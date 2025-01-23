import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";



const SelectComponent = ({
    label,   
    required = true,
    options = [],
    optgroups = [],
    name = "country",
    value = "",
    onChange,
}) => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const select = selectRef.current;

        const handleSelectChange = () => {
            onChange(select.value);
            setIsOpen(false);
        };

        const handleFocus = () => {
            setIsOpen(true);
        };

        const handleBlur = () => {
            requestAnimationFrame(() => {
                if (document.activeElement !== select) {
                    setIsOpen(false);
                }
            });
        };

        const handleClickOutside = (event) => {
            if (select && !select.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (select) {
            select.addEventListener('change', handleSelectChange);
            select.addEventListener('focus', handleFocus);
            select.addEventListener('blur', handleBlur);
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            if (select) {
                select.removeEventListener('change', handleSelectChange);
                select.removeEventListener('focus', handleFocus);
                select.removeEventListener('blur', handleBlur);
                document.removeEventListener('click', handleClickOutside);
            }
        };
    }, [onChange, i18n.language]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            selectRef.current?.focus();
        }
    };

    return (
        <div className="ecl-form-group">
            <label
                htmlFor={name}
                id={`select-${name}-label`}
                className="ecl-form-label"
            >
                {t(label)}
            </label>

            <div className="ecl-select__container ecl-select__container--m">
                <select
                    ref={selectRef}
                    className="ecl-select"
                    id={name}
                    name={name}
                    required={required}
                    aria-describedby={`select-${name}-helper`}
                    data-ecl-auto-init="Select"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    data-ecl-select-default={t('select.placeholder')}
                    data-ecl-select-no-results={t('select.noOptions')}
                    aria-label={t(label)}
                >
                    <option value="" disabled>{t('select.placeholder')}</option>
                    {optgroups.map((group, index) => (
                        <optgroup key={index} label={t(group.label)}>
                            {group.options.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    aria-label={t(option.label)}
                                >
                                    {t(option.label)}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            aria-label={t(option.label)}
                        >
                            {t(option.label)}
                        </option>
                    ))}
                </select>
                <div className="ecl-select__icon">
                    <button
                        ref={buttonRef}
                        className="ecl-button ecl-button--ghost ecl-button--icon-only"
                        tabIndex="-1"
                        onClick={handleToggle}
                    >
                        <span className="ecl-button__container">
                            <span className="ecl-button__label">{t('select.toggleDropdown')}</span>
                            <svg
                                className={`ecl-icon ecl-icon--s ${isOpen ? '' : 'ecl-icon--rotate-180'}`}
                                viewBox="0 0 48 48"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd" d="m45 30.12-2.73 2.82-18.24-18.36L5.73 33 3 30.18 24.03 9z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

SelectComponent.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            disabled: PropTypes.bool
        })
    ),
    optgroups: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string.isRequired,
                    label: PropTypes.string.isRequired,
                    disabled: PropTypes.bool
                })
            ).isRequired
        })
    ),
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default SelectComponent;
