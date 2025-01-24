import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Select from './Select';
import Radio from './Radio';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';
import {
    DEFAULTS,
    TRADE_FUELS,
    TRADE_FLOWS,
    getSiec,
    getUnits,
    BASE_URL,
    YEARS_API_URL,
    findDatasetKey
} from '../config/entradeConfig';
import { COUNTRY_GROUPS } from '../config/countryGroups';
import '../styles/form.css';
import Spinner from './Spinner';



const Entrade = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();

    // State
    const [years, setYears] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state for data fetch
    const [formData, setFormData] = useState({
        geo: DEFAULTS.geo,
        year: DEFAULTS.year,
        trade: DEFAULTS.trade,
        fuel: DEFAULTS.fuel,
        siec: DEFAULTS.siec,
        unit: DEFAULTS.unit,
        filter: DEFAULTS.filter,
    });

    // Ensure default values for `siec` and `unit` on mount
    useEffect(() => {
        const initializeDefaults = () => {
            const datasetKey = findDatasetKey(formData.fuel, formData.trade);

            if (datasetKey) {
                setFormData((prev) => ({
                    ...prev,
                    siec: getSiec(datasetKey)[0] || DEFAULTS.siec,
                    unit: getUnits(datasetKey)[0] || DEFAULTS.unit,
                }));
            }
        };

        initializeDefaults();
    }, []);

    // Fetch available years dynamically
    useEffect(() => {
        const fetchYearsDebounced = debounce(async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams({
                    format: 'JSON',
                    geo: formData.geo,
                    unit: formData.unit,
                    siec: formData.siec,
                    lang: i18n.language,
                });

                const response = await fetch(`${YEARS_API_URL}?${params}`);
                const data = await response.json();
                const yearsList = Object.keys(data.dimension.time.category.index);
                setYears(yearsList.length ? yearsList.sort().reverse() : [DEFAULTS.year]);
                toast.success(t('entrade.success.yearsLoaded'));
            } catch {
                setYears([DEFAULTS.year]); // Fallback to default year
                toast.error(t('entrade.errors.yearsFetchFailed'));
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        }, 300);

        fetchYearsDebounced();
        return () => fetchYearsDebounced.cancel();
    }, [i18n.language, formData.geo, formData.unit, formData.siec]);

    // Update `siec` and `unit` dynamically when `fuel` or `trade` changes
    const handleChange = (field, value) => {
        if (field === 'fuel' || field === 'trade') {
            const updatedFormData = { ...formData, [field]: value };
            const datasetKey = findDatasetKey(updatedFormData.fuel, updatedFormData.trade);

            if (datasetKey) {
                const updatedSiec = getSiec(datasetKey);
                const updatedUnits = getUnits(datasetKey);

                setFormData({
                    ...updatedFormData,
                    siec: updatedSiec[0] || '',
                    unit: updatedUnits[0] || '',
                });

                toast.info(t('entrade.success.optionsUpdated'));
            } else {
                toast.error(t('entrade.errors.datasetNotFound'));
            }
        } else {
            // Update other fields normally
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    const handleSubmit = () => {
        if (!formData.geo || !formData.year || !formData.trade || !formData.fuel) {
            toast.error(t('entrade.errors.missingFields'));
            return;
        }

        try {
            const params = new URLSearchParams({
                language: i18n.language,
                ...formData,
                detail: '1',
            });

            const url = `${BASE_URL}?${params.toString()}`;
            window.location.href = url;
            onClose();
            toast.success(t('entrade.success.redirecting'));
        } catch {
            toast.error(t('entrade.errors.urlCreationFailed'));
        }
    };

    // Memoized options
    const siecOptions = useMemo(
        () =>
            getSiec(findDatasetKey(formData.fuel, formData.trade) || '').map((value) => ({
                value,
                label: t(`entrade.siec.${value}`),
            })),
        [formData.fuel, formData.trade, t]
    );

    const unitOptions = useMemo(
        () =>
            getUnits(findDatasetKey(formData.fuel, formData.trade) || '').map((value) => ({
                value,
                label: t(`entrade.unit.${value}`),
            })),
        [formData.fuel, formData.trade, t]
    );

    const countryOptgroups = useMemo(
        () =>
            Object.entries(COUNTRY_GROUPS).map(([group, countries]) => ({
                label: `multiSelect.groups.${group}`,
                options: countries.map((code) => ({
                    value: code,
                    label: `multiSelect.countries.${code}`,
                })),
            })),
        []
    );

    const yearOptions = useMemo(
        () =>
            years.map((year) => ({
                value: year,
                label: year,
            })),
        [years]
    );

    const tradeOptions = useMemo(
        () =>
            TRADE_FLOWS.map((value) => ({
                value,
                label: t(`entrade.trade.${value.toLowerCase()}`),
            })),
        [t]
    );

    const fuelOptions = useMemo(
        () =>
            TRADE_FUELS.map((value) => ({
                value,
                label: t(`entrade.fuel.${value.toLowerCase()}`),
            })),
        [t]
    );

    const filterOptions = [
        { value: 'all', label: t('entrade.filter.all') },
        { value: 'top5', label: t('entrade.filter.top5') },
    ];

    const bodyContent = loading ? (
        <div className="loading">
            <Spinner text={t('common.loading')} size="l" color="primary" centered />
        </div>
    ) : (
        <div className="form">
            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('entrade.country.label')}
                        name="geo"
                        optgroups={countryOptgroups}
                        value={formData.geo}
                        onChange={(value) => handleChange('geo', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('entrade.year.label')}
                        name="year"
                        options={yearOptions}
                        value={formData.year}
                        onChange={(value) => handleChange('year', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('entrade.trade.label')}
                        name="trade"
                        options={tradeOptions}
                        value={formData.trade}
                        onChange={(value) => handleChange('trade', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('entrade.fuel.label')}
                        name="fuel"
                        options={fuelOptions}
                        value={formData.fuel}
                        onChange={(value) => handleChange('fuel', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('entrade.siec.label')}
                        name="siec"
                        options={siecOptions}
                        value={formData.siec}
                        onChange={(value) => handleChange('siec', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('entrade.unit.label')}
                        name="unit"
                        options={unitOptions}
                        value={formData.unit}
                        onChange={(value) => handleChange('unit', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Radio
                        label={t('entrade.filter.label')}
                        name="filter"
                        options={filterOptions}
                        value={formData.filter}
                        onChange={(value) => handleChange('filter', value)}
                        helper={t('entrade.filter.helper')}
                    />
                </div>
            </div>
        </div>
    )
   

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            modalTitle={t('entrade.title')}
            bodyContent={bodyContent}
        />
    );
};

Entrade.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Entrade;
