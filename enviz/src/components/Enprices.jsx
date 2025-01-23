import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import Modal from './Modal'; // Assuming you already have the modal component
import Select from './Select';
import MultiSelect from './MultiSelect';
import RadioGroupComponent from './Radio';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    DEFAULTS,
    getDatasetCode,
    getConsumptionLevels,
    getUnits,
    BASE_URL
} from '../config/enpricesConfig';
import '../styles/form.css';


const Enprices = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState(null);
    const [availableOptions, setAvailableOptions] = useState({
        years: [],
        consumptionLevels: [],
        units: [],
        countries: []
    });
    const [currentDataset, setCurrentDataset] = useState(
        DEFAULTS.dataset
    );
    const [formData, setFormData] = useState({
        countries: [], // Will be populated with all countries after fetch
        year: '',
        ...DEFAULTS
    });

    const fetchData = async (datasetCode) => {
        const toastId = toast.loading(t('common.loading'));
        try {
            const response = await axios.get(
                `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/${datasetCode}?format=JSON&lang=${i18n.language.toLowerCase()}`,
                { timeout: 10000 }
            );
            if (response.status !== 200) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const dimensions = response.data.dimension;
            if (!dimensions) {
                throw new Error('Invalid data structure received from API');
            }

            // Process time options
            const timeLabels = dimensions.time?.category?.label || {};
            const yearOptions = Object.entries(timeLabels).map(([value, label]) => ({
                value,
                label
            }));

            // Process consumption levels
            const consumptionLabels = dimensions.nrg_cons?.category?.label || {};
            const consumptionOptions = Object.entries(consumptionLabels).map(([value, label]) => ({
                value,
                label
            }));

            // Process units
            const unitLabels = dimensions.unit?.category?.label || {};
            const unitOptions = Object.entries(unitLabels).map(([value, label]) => ({
                value,
                label
            }));

            // Process currencies
            const currencyLabels = dimensions.currency?.category?.label || {};
            const currencyOptions = Object.entries(currencyLabels).map(([value, label]) => ({
                value,
                label
            }));

            // Get countries
            const geoLabels = dimensions.geo?.category?.label || {};
            const countryOptions = Object.entries(geoLabels).map(([value, label]) => ({
                value,
                label
            }));

            // Sort and filter options
            const sortedOptions = {
                years: yearOptions.sort((a, b) => b.value.localeCompare(a.value)),
                consumptionLevels: consumptionOptions.filter(opt => opt.value && opt.label),
                units: unitOptions.filter(opt => opt.value && opt.label),
                currencies: currencyOptions.filter(opt => opt.value && opt.label),
                countries: countryOptions
            };

            // Set latest year and all countries if not already set
            if (!formData.year || !formData.countries.length) {
                setFormData(prev => ({
                    ...prev,
                    year: sortedOptions.years[0].value,
                    countries: countryOptions.map(opt => opt.value) // Select all countries
                }));
            }

            setAvailableOptions(sortedOptions);
            setData(dimensions);
            toast.update(toastId, {
                render: t('enprices.success.dataLoaded'),
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });
        } catch (err) {
            toast.update(toastId, {
                render: err.response?.data?.message || err.message || t('enprices.errors.fetchFailed'),
                type: 'error',
                isLoading: false,
                autoClose: 5000
            });
            console.error('Error fetching data:', err);
        }
    };

    const handleChange = (field, value) => {
        let newFormData = { ...formData, [field]: value };

        // If fuel, consumer, or component changes, we need to update the dataset
        if (['fuel', 'consumer', 'component'].includes(field)) {
            const newDataset = getDatasetCode(
                null,  // Don't use current dataset when parameters change
                field === 'fuel' ? value : formData.fuel,
                field === 'consumer' ? value : formData.consumer,
                field === 'component' ? value === 'true' : formData.component === 'true'
            );

            setCurrentDataset(newDataset);
            fetchData(newDataset);

            // Update consumption levels and units based on new dataset
            const newConsumptionLevels = getConsumptionLevels(newDataset);
            const newUnits = getUnits(newDataset);

            newFormData = {
                ...newFormData,
                consumptionLevel: newConsumptionLevels[0],
                unit: newUnits[0]
            };
        }

        setFormData(newFormData);
    };

    // Ensure all countries are selected by default in MultiSelect
    useEffect(() => {
        if (availableOptions.countries.length > 0 && formData.countries.length === 0) {
            setFormData(prev => ({
                ...prev,
                countries: availableOptions.countries.map(opt => opt.value)
            }));
        }
    }, [availableOptions.countries]);

    // Fetch initial data when component mounts
    useEffect(() => {
        fetchData(currentDataset);
    }, [currentDataset, i18n.language]);

    const fuelOptions = [
        { value: '6000', label: t(`enprices.fuel.options.electricity`) },
        { value: '4100', label: t(`enprices.fuel.options.gas`) }
    ];

    const consumerOptions = [
        { value: 'N_HOUSEHOLD', label: t(`enprices.consumer.options.nonHousehold`) },
        { value: 'HOUSEHOLD', label: t(`enprices.consumer.options.household`) }
    ];

    const handleSubmit = () => {
        try {
            const params = new URLSearchParams({
                geos: formData.countries.join(','),
                product: formData.fuel,
                consumer: formData.consumer,
                consoms: formData.consumptionLevel,
                unit: formData.unit,
                currency: formData.currency,
                language: i18n.language.toUpperCase(),
                detail: formData.details === 'true' ? '1' : '0',
                component: formData.component === 'true' ? '1' : '0',
                time: formData.year,
                // Default parameters
                taxs: 'I_TAX,X_TAX,X_VAT',
                nrg_prc: 'undefined',
                order: 'DESC',
                dataset: currentDataset,
                chartInDetails: '0',
                chartId: 'mainChart',
                chartGeo: '',
                percentage: '0',
                share: 'false'
            });

            const url = `${BASE_URL}?${params.toString()}`;
            window.location.href = url;
            onClose();
        } catch (error) {
            toast.error(t('enprices.errors.urlCreationFailed', error));
        }
    };

    // Create the modal content
    const bodyContent = (
        <div className="form">
            <div className="form-row">
                <div className="form-col">
                    <MultiSelect
                        options={availableOptions.countries}
                        value={formData.countries}
                        onChange={(values) => handleChange('countries', values)}
                        label="multiSelect.label"
                    />
                </div>
                <div className="form-col">
                    <Select
                        label="enprices.year.label"
                        helperText="enprices.year.helper"
                        options={availableOptions.years}
                        value={formData.year}
                        onChange={(value) => handleChange('year', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label="enprices.fuel.label"
                        helperText="enprices.fuel.helper"
                        options={fuelOptions}
                        value={formData.fuel}
                        onChange={(value) => handleChange('fuel', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Select
                        label="enprices.consumer.label"
                        helperText="enprices.consumer.helper"
                        options={consumerOptions}
                        value={formData.consumer}
                        onChange={(value) => handleChange('consumer', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label="enprices.consumption.label"
                        helperText="enprices.consumption.helper"
                        options={availableOptions.consumptionLevels}
                        value={formData.consumptionLevel}
                        onChange={(value) => handleChange('consumptionLevel', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label="enprices.currency.label"
                        helperText="enprices.currency.helper"
                        options={availableOptions.currencies}
                        value={formData.currency}
                        onChange={(value) => handleChange('currency', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Select
                        label="enprices.unit.label"
                        helperText="enprices.unit.helper"
                        options={availableOptions.units}
                        value={formData.unit}
                        onChange={(value) => handleChange('unit', value)}
                    />
                </div>
                <div className="form-col">
                    <RadioGroupComponent
                        label="enprices.component.label"
                        helperText="enprices.component.helper"
                        name="component"
                        options={[
                            { value: 'true', label: 'common.yes' },
                            { value: 'false', label: 'common.no' }
                        ]}
                        value={formData.component}
                        onChange={(value) => handleChange('component', value)}
                    />
                </div>
                <div className="form-col">
                    <RadioGroupComponent
                        label="enprices.details.label"
                        helperText="enprices.details.helper"
                        name="details"
                        options={[
                            { value: 'true', label: 'common.yes' },
                            { value: 'false', label: 'common.no' }
                        ]}
                        value={formData.details}
                        onChange={(value) => handleChange('details', value)}
                    />
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            modalTitle={t('enprices.title')}
            bodyContent={bodyContent}
        />
    );
};

Enprices.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Enprices;
