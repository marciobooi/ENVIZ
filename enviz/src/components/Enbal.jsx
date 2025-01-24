import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Select from './Select';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';
import {
    DEFAULTS,
    MAIN_FUEL_FAMILIES,
    ENBAL_UNITS,
    DECIMALS,
    BASE_URL,
    YEARS_API_URL
} from '../config/enbalConfig';
import { COUNTRY_GROUPS } from '../config/countryGroups';
import '../styles/form.css';
import Spinner from './Spinner';

const Enbal = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [years, setYears] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        geo: DEFAULTS.geo,
        unit: DEFAULTS.unit,
        year: DEFAULTS.year,
        fuel: DEFAULTS.fuel,
        decimals: DEFAULTS.decimals
    });

    // Fetch available years
    useEffect(() => {
        const fetchYearsDebounced = debounce(async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams({
                    format: 'JSON',
                    geo: DEFAULTS.geo,
                    unit: 'TJ',
                    nrg_bal: 'IMP',
                    siec: 'TOTAL',
                    lang: i18n.language,
                });

                const response = await fetch(`${YEARS_API_URL}?${params}`);
                const data = await response.json();
                const yearsList = Object.keys(data.dimension.time.category.index);
                setYears(yearsList.length ? yearsList.sort().reverse() : [DEFAULTS.year]);
                toast.success(t('enbal.success.yearsLoaded'));
            } catch {
                setYears([DEFAULTS.year]);
                toast.error(t('enbal.errors.yearsFetchFailed'));
            } finally {
                setLoading(false);
            }
        }, 300);

        fetchYearsDebounced();
        return () => fetchYearsDebounced.cancel();
    }, [i18n.language]);

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        try {
            const params = new URLSearchParams({
                language: i18n.language,
                ...formData,
                ...DEFAULTS,
                year: formData.year,
                geo: formData.geo,
                unit: formData.unit,
                fuel: formData.fuel,
                decimals: formData.decimals
            });

            const url = `${BASE_URL}?${params.toString()}`;
            window.location.href = url;
            onClose();
            toast.success(t('enbal.success.redirecting'));
        } catch {
            toast.error(t('enbal.errors.urlCreationFailed'));
        }
    };

    // Memoized options
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
        () => years.map(year => ({
            value: year,
            label: year
        })),
        [years]
    );

    const fuelOptions = useMemo(
        () => MAIN_FUEL_FAMILIES.map(value => ({
            value,
            label: t(`enbal.fuel.${value}`)
        })),
        [t]
    );

    const unitOptions = useMemo(
        () => ENBAL_UNITS.map(value => ({
            value,
            label: t(`enbal.unit.${value}`)
        })),
        [t]
    );

    const decimalOptions = useMemo(
        () => DECIMALS.map(value => ({
            value,
            label: value
        })),
        []
    );

    const bodyContent = loading ? (
        <div className="loading">
            <Spinner text={t('common.loading')} size="l" color="primary" centered />
        </div>
    ) : (
        <div className="form">
            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('enbal.country.label')}
                        name="geo"
                        optgroups={countryOptgroups}
                        value={formData.geo}
                        onChange={(value) => handleChange('geo', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enbal.fuel.label')}
                        name="fuel"
                        options={fuelOptions}
                        value={formData.fuel}
                        onChange={(value) => handleChange('fuel', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enbal.year.label')}
                        name="year"
                        options={yearOptions}
                        value={formData.year}
                        onChange={(value) => handleChange('year', value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('enbal.unit.label')}
                        name="unit"
                        options={unitOptions}
                        value={formData.unit}
                        onChange={(value) => handleChange('unit', value)}
                    />
                </div>
                <div className="form-col">
                    <Select
                        label={t('enbal.decimals.label')}
                        name="decimals"
                        options={decimalOptions}
                        value={formData.decimals}
                        onChange={(value) => handleChange('decimals', value)}
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
            modalTitle={t('enbal.title')}
            bodyContent={bodyContent}
        />
    );
};

Enbal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Enbal; 