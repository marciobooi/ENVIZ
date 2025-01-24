import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Select from './Select';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { DEFAULTS, BASE_URL } from '../config/endashConfig';
import { COUNTRY_GROUPS } from '../config/countryGroups';
import '../styles/form.css';

const Endash = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        geos: DEFAULTS.geos
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (value) => {
        if (!value) {
            toast.error(t('endash.errors.missingCountry'));
            return;
        }
        setFormData(prev => ({
            ...prev,
            geos: value
        }));
    };

    const handleSubmit = () => {
        try {
            setIsLoading(true);
            const params = new URLSearchParams({
                geos: formData.geos
            });

            const url = `${BASE_URL}?${params.toString()}`;
            window.location.href = url;
            onClose();
            toast.success(t('endash.success.redirecting'));
        } catch (error) {
            toast.error(t('endash.errors.urlCreationFailed'));
        } finally {
            setIsLoading(false);
        }
    };

    const bodyContent = (
        <div className="form">
            <div className="form-row">
                <div className="form-col">
                    <Select
                        label={t('endash.country.label')}
                        name="geos"
                        optgroups={Object.entries(COUNTRY_GROUPS).map(([group, countries]) => ({
                            label: `multiSelect.groups.${group}`,
                            options: countries.map((code) => ({
                                value: code,
                                label: `multiSelect.countries.${code}`,
                            })),
                        }))}
                        value={formData.geos}
                        onChange={handleChange}
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
            modalTitle={t('card.endash.title')}
            bodyContent={bodyContent}
            isLoading={isLoading}
        />
    );
};

Endash.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Endash; 