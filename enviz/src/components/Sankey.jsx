import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Select from './Select';
import MultiSelect from './MultiSelect';
import RadioGroupComponent from './Radio';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    DEFAULTS,
    FUELS,
    UNITS,
    API_BASE_URL,
    VISUALIZATION_URL
} from '../config/sankeyConfig';
import '../styles/form.css'

const Sankey = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState(null);
    const [availableOptions, setAvailableOptions] = useState({
        years: [],
        countries: []
    });

    const [formData, setFormData] = useState({
        countries: [],
        year: '',
        ...DEFAULTS
    });

    const fetchData = async () => {
        const toastId = toast.loading(t('common.loading'));
        try {
            const response = await axios.get(
                `${API_BASE_URL}/${DEFAULTS.dataset}?format=JSON&geo=BE&unit=KTOE&nrg_bal=NRGSUP&siec=TOTAL&lang=${i18n.language}`,
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
            const yearOptions = Object.entries(timeLabels)
                .map(([value, label]) => ({
                    value,
                    label
                }))
                .sort((a, b) => b.value.localeCompare(a.value));

            // Process countries
            const geoLabels = dimensions.geo?.category?.label || {};
            const countryOptions = Object.entries(geoLabels).map(([value, label]) => ({
                value,
                label
            }));

            // Set latest year and all countries if not already set
            if (!formData.year || !formData.countries.length) {
                setFormData(prev => ({
                    ...prev,
                    year: yearOptions[0].value,
                    countries: countryOptions.map(opt => opt.value) // Select all countries
                }));
            }

            setAvailableOptions({
                years: yearOptions,
                countries: countryOptions
            });

            setData(dimensions);
            toast.update(toastId, {
                render: t('sankey.success.dataLoaded'),
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });
        } catch (err) {
            toast.update(toastId, {
                render: err.response?.data?.message || err.message || t('sankey.errors.fetchFailed'),
                type: 'error',
                isLoading: false,
                autoClose: 5000
            });
            console.error('Error fetching data:', err);
        }
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = () => {
        try {
            const params = new URLSearchParams({
                geos: formData.countries.join(','),
                fuels: formData.fuel,
                unit: formData.unit,
                year: formData.year,
                flowDisagg: formData.details === 'true' ? 'true' : 'false',
                language: i18n.language.toUpperCase(),
                highlight: "",
                nodeDisagg: "0101000000000"
            });

            const url = `${VISUALIZATION_URL}?${params.toString()}`;
            window.location.href = url;
            onClose();
        } catch (error) {
            toast.error(t('sankey.errors.urlCreationFailed', error));
        }
    };

    const fuelOptions = Object.entries(FUELS).map(([value, label]) => ({
        value,
        label: t(`sankey.fuel.options.${value.toLowerCase()}`)
    }));

    const unitOptions = Object.entries(UNITS).map(([value, label]) => ({
        value,
        label: t(`sankey.unit.options.${value.toLowerCase()}`)
    }));

    const bodyContent = (
        <div className="sankey-form">
            <div className="form-row">
                <div className="form-col">
                    <MultiSelect
                        options={availableOptions.countries}
                        value={formData.countries}
                        onChange={(values) => handleChange('countries', values)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('sankey.year.label')}
                        helperText={t('sankey.year.helper')}
                        options={availableOptions.years}
                        value={formData.year}
                        onChange={(value) => handleChange('year', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('sankey.fuel.label')}
                        helperText={t('sankey.fuel.helper')}
                        options={fuelOptions}
                        value={formData.fuel}
                        onChange={(value) => handleChange('fuel', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('sankey.unit.label')}
                        helperText={t('sankey.unit.helper')}
                        options={unitOptions}
                        value={formData.unit}
                        onChange={(value) => handleChange('unit', value)}
                    />
                </div>
                <div className="form-col">
                    <RadioGroupComponent
                        label={t('sankey.details.label')}
                        helperText={t('sankey.details.helper')}
                        name="details"
                        options={[
                            { value: 'true', label: t('common.yes') },
                            { value: 'false', label: t('common.no') }
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
            modalTitle={t('sankey.title')}
            bodyContent={bodyContent}
        />
    );
};

Sankey.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Sankey; 