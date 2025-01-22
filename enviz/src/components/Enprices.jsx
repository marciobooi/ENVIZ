import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import Modal from './Modal'; // Assuming you already have the modal component
import Select from './Select';
import MultiSelect from './MultiSelect';
import RadioGroupComponent from './Radio';
import { useTranslation } from 'react-i18next';
import {
    DEFAULTS,
    getDatasetCode,
    getConsumptionLevels,
    getUnits,
    getCurrencies,
    getPriceDataset
} from '../config/enpricesConfig';
import '../styles/enprices.css';

const Enprices = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [currentDataset, setCurrentDataset] = useState(
        getDatasetCode(DEFAULTS.dataset, DEFAULTS.fuel, DEFAULTS.consumer, DEFAULTS.component)
    );
    const [formData, setFormData] = useState({
        countries: [],
        year: '',
        ...DEFAULTS
    });

    const handleChange = (field, value) => {
        let newFormData = { ...formData, [field]: value };

        // If fuel, consumer, or component changes, we need to update the dataset
        if (['fuel', 'consumer', 'component'].includes(field)) {
            const newDataset = getDatasetCode(
                field === 'fuel' ? value : formData.fuel,
                field === 'consumer' ? value : formData.consumer,
                field === 'component' ? value : formData.component === 'true'
            );

            setCurrentDataset(newDataset);

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

    // Select options
    const yearOptions = Array.from({ length: 24 }, (_, i) => ({
        value: `${2024 - i}`,
        label: `${2024 - i}`
    }));

    const fuelOptions = [
        { value: '6000', label: t('enprices.fuel.electricity') },
        { value: '4100', label: t('enprices.fuel.gas') }
    ];

    const consumerOptions = [
        { value: 'N_HOUSEHOLD', label: t('enprices.consumer.nonHousehold') },
        { value: 'HOUSEHOLD', label: t('enprices.consumer.household') }
    ];

    const consumptionOptions = getConsumptionLevels(currentDataset).map(level => ({
        value: level,
        label: t(`enprices.consumption.${level.toLowerCase()}`)
    }));

    const currencyOptions = getCurrencies(currentDataset).map(currency => ({
        value: currency,
        label: t(`enprices.currency.${currency.toLowerCase()}`)
    }));

    const unitOptions = getUnits(currentDataset).map(unit => ({
        value: unit,
        label: t(`enprices.unit.${unit.toLowerCase()}`)
    }));

    const handleSubmit = () => {
        // Handle form submission
        console.log({
            formData,
        });
        onClose();
    };

    // Create the modal content
    const bodyContent = (
        <div className="enprices-form">
            <div className="form-row">
                <div className="form-col">
                    <MultiSelect
                        onChange={(values) => handleChange('countries', values)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enprices.year.label')}
                        helperText={t('enprices.year.helper')}
                        options={yearOptions}
                        value={formData.year}
                        onChange={(value) => handleChange('year', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enprices.fuel.label')}
                        helperText={t('enprices.fuel.helper')}
                        options={fuelOptions}
                        value={formData.fuel}
                        onChange={(value) => handleChange('fuel', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('enprices.consumer.label')}
                        helperText={t('enprices.consumer.helper')}
                        options={consumerOptions}
                        value={formData.consumer}
                        onChange={(value) => handleChange('consumer', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enprices.consumption.label')}
                        helperText={t('enprices.consumption.helper')}
                        options={consumptionOptions}
                        value={formData.consumptionLevel}
                        onChange={(value) => handleChange('consumptionLevel', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enprices.currency.label')}
                        helperText={t('enprices.currency.helper')}
                        options={currencyOptions}
                        value={formData.currency}
                        onChange={(value) => handleChange('currency', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('enprices.unit.label')}
                        helperText={t('enprices.unit.helper')}
                        options={unitOptions}
                        value={formData.unit}
                        onChange={(value) => handleChange('unit', value)}
                    />
                </div>
                <div className="form-col">
                    <RadioGroupComponent
                        label={t('enprices.component.label')}
                        helperText={t('enprices.component.helper')}
                        name="component"
                        options={[
                            { value: 'true', label: t('common.yes') },
                            { value: 'false', label: t('common.no') }
                        ]}
                        value={formData.component}
                        onChange={(value) => handleChange('component', value)}
                    />
                </div>
                <div className="form-col">
                    <RadioGroupComponent
                        label={t('enprices.details.label')}
                        helperText={t('enprices.details.helper')}
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
