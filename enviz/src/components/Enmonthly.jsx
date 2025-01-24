import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import {
    DEFAULTS,
    ENMONTHLY_CHARTS,
    getSiec,
    getUnits,
    getNrgBal,
    BASE_URL,
    CODES_DATASET_ENMONTHLY
} from '../config/enmonthlyConfig';
import { COUNTRY_GROUPS } from '../config/countryGroups';
import '../styles/form.css';
import Select from './Select';

const Enmonthly = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [currentDataset, setCurrentDataset] = useState(DEFAULTS.dataset);
    const [formData, setFormData] = useState({
        geo: DEFAULTS.geo,
        dataset: DEFAULTS.dataset,
        nrg_bal: DEFAULTS.nrg_bal,
        unit: DEFAULTS.unit,
        siec: DEFAULTS.siec,
        detail: DEFAULTS.detail
    });

    const handleChange = (field, value) => {
        let newFormData = { ...formData, [field]: value };

        if (field === 'dataset') {
            setCurrentDataset(value);
            const datasetConfig = CODES_DATASET_ENMONTHLY[value];

            const newSiec = datasetConfig?.siec[0] || '';
            const newUnit = datasetConfig?.unit[0] || '';
            const newNrgBal = datasetConfig?.nrg_bal[0] || '';

            newFormData = {
                ...newFormData,
                siec: newSiec,
                unit: newUnit,
                nrg_bal: newNrgBal
            };

            toast.info(t('enmonthly.success.datasetChanged'));
        }

        setFormData(newFormData);
    };

    const handleSubmit = () => {
        try {
            const params = new URLSearchParams({
                geo: formData.geo,
                language: i18n.language.toUpperCase(),
                detail: formData.detail,
                nrg_bal: formData.nrg_bal,
                unit: formData.unit,
                siec: formData.siec,
                dataset: formData.dataset
            });

            const url = `${BASE_URL}?${params.toString()}`;
            window.location.href = url;
            onClose();
            toast.success(t('enmonthly.success.redirecting'));
        } catch {
            toast.error(t('enmonthly.errors.urlCreationFailed'));
        }
    };

    const chartOptions = ENMONTHLY_CHARTS.map(value => ({
        value,
        label: t(`enmonthly.charts.${value}`)
    }));

    const siecOptions = getSiec(currentDataset).map(value => ({
        value,
        label: t(`enmonthly.siec.${value}`)
    }));

    const unitOptions = getUnits(currentDataset).map(value => ({
        value,
        label: t(`enmonthly.unit.${value}`)
    }));

    const nrgBalOptions = getNrgBal(currentDataset).map(value => ({
        value,
        label: t(`enmonthly.nrgBal.${value}`)
    }));

    // Create country options using optgroups structure
    const countryOptgroups = Object.entries(COUNTRY_GROUPS).map(([group, countries]) => ({
        label: `multiSelect.groups.${group}`,  // Translation key for the group label
        options: countries.map(code => ({
            value: code,
            label: `multiSelect.countries.${code}` // Translation key for the country name
        }))
    }));

    const bodyContent = (
        <div className="form">
            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('enmonthly.country.label')}
                        name="geo"
                        optgroups={countryOptgroups}
                        value={formData.geo}
                        onChange={(value) => handleChange('geo', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enmonthly.chart.label')}
                        name="dataset"
                        options={chartOptions}
                        value={formData.dataset}
                        onChange={(value) => handleChange('dataset', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enmonthly.siec.label')}
                        name="siec"
                        options={siecOptions}
                        value={formData.siec}
                        onChange={(value) => handleChange('siec', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('enmonthly.nrgBal.label')}
                        name="nrgBal"
                        options={nrgBalOptions}
                        value={formData.nrg_bal}
                        onChange={(value) => handleChange('nrg_bal', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enmonthly.unit.label')}
                        name="unit"
                        options={unitOptions}
                        value={formData.unit}
                        onChange={(value) => handleChange('unit', value)}
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
            modalTitle={t('enmonthly.title')}
            bodyContent={bodyContent}
        />
    );
};

Enmonthly.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Enmonthly; 