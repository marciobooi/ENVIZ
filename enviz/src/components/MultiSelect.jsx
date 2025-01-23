import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const MultiSelect = ({ onChange }) => {
    const selectRef = useRef(null);
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null);
    const lastFocusedElementRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    // Initialize selectedValues with all countries selected
    const AGGREGATES_COUNTRY_CODES = ["EU27_2020", "EA"];
    const EU_COUNTRY_CODES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE"];
    const EFTA_COUNTRY_CODES = ["IS", "LI", "NO"];
    const ENLARGEMENT_COUNTRY_CODES = ["BA", "ME", "MD", "MK", "GE", "AL", "RS", "TR", "UA", "XK"];

    const [selectedValues, setSelectedValues] = useState([
        ...AGGREGATES_COUNTRY_CODES,
        ...EU_COUNTRY_CODES,
        ...EFTA_COUNTRY_CODES,
        ...ENLARGEMENT_COUNTRY_CODES
    ]);

    const { t } = useTranslation();

    const handleToggle = (e) => {
        e.stopPropagation();
        if (!isOpen) {
            lastFocusedElementRef.current = document.activeElement;
        }
        setIsOpen(!isOpen);
    };

    const handleTabKey = (e) => {
        if (!isOpen) return;

        const focusableElements = dropdownRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    };

    const handleApply = () => {
        onChange(selectedValues);
        setIsOpen(false);
    };

    const handleClear = () => {
        setSelectedValues([]);
        onChange([]);
    };

    const handleCheckboxChange = (value, checked) => {
        setSelectedValues((prev) =>
            checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
    };

    const handleSelectAll = (checked) => {
        const allValues = [
            ...AGGREGATES_COUNTRY_CODES,
            ...EU_COUNTRY_CODES,
            ...EFTA_COUNTRY_CODES,
            ...ENLARGEMENT_COUNTRY_CODES
        ];
        setSelectedValues(checked ? allValues : []);
    };

    useEffect(() => {
        const currentRef = selectRef.current;

        if (currentRef && !currentRef.hasAttribute("data-ecl-auto-initialized")) {
            try {
                const select = new window.ECL.Select(currentRef);
                select.init();
                currentRef.setAttribute("data-ecl-auto-initialized", "true");
            } catch (error) {
                console.error("Failed to initialize ECL Select:", error);
            }
        }

        const handleChange = (e) => {
            const selectedOptions = Array.from(e.target.selectedOptions).map((o) => o.value);
            onChange && onChange(selectedOptions);
        };

        if (currentRef) {
            currentRef.addEventListener("change", handleChange);
        }

        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !event.target.closest(".ecl-select__multiple-toggle")
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            if (currentRef && currentRef.ECLSelect) {
                currentRef.ECLSelect.destroy();
            }
            if (currentRef) {
                currentRef.removeEventListener("change", handleChange);
            }
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onChange]);

    useEffect(() => {
        if (isOpen) {
            searchInputRef.current?.focus();
        } else if (lastFocusedElementRef.current) {
            lastFocusedElementRef.current.focus();
        }
    }, [isOpen]);

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setIsOpen(false);
        } else if (e.key === "Tab") {
            handleTabKey(e);
        }
    };

    return (
        <div className="ecl-form-group" role="application">
            <label
                htmlFor="select-multiple-toggle"
                id="select-multiple-label"
                className="ecl-form-label"
            >
                {t('multiSelect.label')}
            </label>
            <div className="ecl-select__container ecl-select__container--m ecl-select__container--hidden">
                <select
                    ref={selectRef}
                    className="ecl-select"
                    id="select-multiple"
                    name="countries"
                    required=""
                    aria-describedby="select-multiple-helper"
                    data-ecl-auto-init="Select"
                    multiple=""
                    data-ecl-select-multiple=""
                    data-ecl-select-default="Choose options"
                    data-ecl-select-clear-all="Clear all"
                    data-ecl-select-close="Apply"
                    data-ecl-select-all="Select all"
                    data-ecl-select-search="Enter filter keyword"
                    data-ecl-select-no-results="No results found"
                    tabIndex="-1"
                >

                </select>
                <div className="ecl-select__icon">
                    <button className="ecl-button ecl-button--ghost ecl-button--icon-only" type="button" tabIndex="-1">
                        <span className="ecl-button__container">
                            <span className="ecl-button__label" data-ecl-label="true">{t('multiSelect.toggleDropdown')}</span>
                            <svg className="ecl-icon ecl-icon--xs ecl-icon--rotate-180 ecl-button__icon" focusable="false" aria-hidden="true">
                                <use xlinkHref="/icons.svg#corner-arrow"></use>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className="ecl-select__multiple">
                <div className="ecl-select__container ecl-select__container--m">
                    <div className={`ecl-select-multiple-selections-counter ${selectedValues.length ? 'ecl-select-multiple-selections-counter--visible' : ''
                        }`}>
                        <span>{selectedValues.length || ''}</span>
                    </div>
                    <button
                        className={`ecl-select ecl-select__multiple-toggle ${isOpen ? 'ecl-select--active' : ''}`}
                        type="button"
                        aria-controls="select-multiple-dropdown"
                        id="select-multiple-toggle"
                        aria-expanded={isOpen}
                        aria-labelledby="select-multiple-label"
                        aria-describedby="select-multiple-helper"
                        onClick={handleToggle}
                    >
                        {selectedValues.length
                            ? selectedValues.map((code) => t(`multiSelect.countries.${code}`)).join(", ")
                            : t("multiSelect.placeholder")
                        }
                    </button>
                    <div className="ecl-select__icon">
                        <button
                            className="ecl-button ecl-button--ghost ecl-button--icon-only"
                            tabIndex="-1"
                            onClick={handleToggle}
                        >
                            <span className="ecl-button__container">
                                <span className="ecl-button__label">{t('multiSelect.toggleDropdown')}</span>
                                <svg className="ecl-icon ecl-icon--s ecl-icon--rotate-180" viewBox="0 0 48 48" focusable="false" aria-hidden="true">
                                    <path fillRule="evenodd" d="m45 30.12-2.73 2.82-18.24-18.36L5.73 33 3 30.18 24.03 9z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div
                    ref={dropdownRef}
                    className="ecl-select__multiple-dropdown ecl-select__container ecl-select__container--m"
                    id="select-multiple-dropdown"
                    style={{ display: isOpen ? 'block' : 'none' }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={t('multiSelect.aria.dropdownDialog')}
                >
                    <input
                        ref={searchInputRef}
                        className="ecl-text-input"
                        type="search"
                        placeholder={t('multiSelect.searchPlaceholder')}
                        aria-label={t('multiSelect.aria.searchInput')}
                    />

                    <div
                        className="ecl-select__multiple-all ecl-checkbox"
                        data-select-multiple-value="Select all"
                    >
                        <input
                            className="ecl-checkbox__input"
                            type="checkbox"
                            id="select-multiple-all"
                            name="select-multiple-all"
                            checked={selectedValues.length === (AGGREGATES_COUNTRY_CODES.length + EU_COUNTRY_CODES.length + EFTA_COUNTRY_CODES.length + ENLARGEMENT_COUNTRY_CODES.length)}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                            aria-label={t('multiSelect.aria.selectAllCheckbox')}
                        />
                        <label className="ecl-checkbox__label" htmlFor="select-multiple-all">
                            <span className="ecl-checkbox__box" aria-hidden="true">
                                <svg className="ecl-icon ecl-icon--s ecl-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 48 48">
                                    <path fillRule="evenodd" d="M19.53 36.69 6 23.19l2.13-2.13 11.4 11.4L39.99 12l2.13 2.13z" />
                                </svg>
                            </span>
                            <span className="ecl-checkbox__label-text">{t('multiSelect.selectAll')}</span>
                        </label>
                    </div>

                    <div className="ecl-select__multiple-options" aria-live="polite">
                        <fieldset data-ecl-multiple-group="Aggregates" className="ecl-select__multiple-group">
                            <legend className="ecl-select__multiple-group__title">{t('multiSelect.groups.aggregates')}</legend>
                            {AGGREGATES_COUNTRY_CODES.map((value, index) => (
                                <div key={value} className="ecl-checkbox" data-select-multiple-value={value} data-visible="true">
                                    <input
                                        className="ecl-checkbox__input"
                                        type="checkbox"
                                        id={`select-multiple-${index + 1}`}
                                        name={`select-multiple-${index + 1}`}
                                        checked={selectedValues.includes(value)}
                                        onChange={(e) => handleCheckboxChange(value, e.target.checked)}
                                    />
                                    <label className="ecl-checkbox__label" htmlFor={`select-multiple-${index + 1}`}>
                                        <span className="ecl-checkbox__box" aria-hidden="true">
                                            <svg className="ecl-icon ecl-icon--s ecl-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 48 48">
                                                <path fillRule="evenodd" d="M19.53 36.69 6 23.19l2.13-2.13 11.4 11.4L39.99 12l2.13 2.13z" />
                                            </svg>
                                        </span>
                                        <span className="ecl-checkbox__label-text">{t(`multiSelect.countries.${value}`)}</span>
                                    </label>
                                </div>
                            ))}
                        </fieldset>

                        <fieldset data-ecl-multiple-group="EU countries" className="ecl-select__multiple-group">
                            <legend className="ecl-select__multiple-group__title">{t('multiSelect.groups.euCountries')}</legend>
                            {EU_COUNTRY_CODES.map((value, index) => (
                                <div
                                    key={value}
                                    className="ecl-checkbox"
                                    data-select-multiple-value={value}
                                    data-visible="true"
                                >
                                    <input
                                        className="ecl-checkbox__input"
                                        type="checkbox"
                                        id={`select-multiple-${index + 7}`}
                                        name={`select-multiple-${index + 7}`}
                                        checked={selectedValues.includes(value)}
                                        onChange={(e) => handleCheckboxChange(value, e.target.checked)}
                                    />
                                    <label className="ecl-checkbox__label" htmlFor={`select-multiple-${index + 7}`}>
                                        <span className="ecl-checkbox__box" aria-hidden="true">
                                            <svg className="ecl-icon ecl-icon--s ecl-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 48 48">
                                                <path fillRule="evenodd" d="M19.53 36.69 6 23.19l2.13-2.13 11.4 11.4L39.99 12l2.13 2.13z" />
                                            </svg>
                                        </span>
                                        <span className="ecl-checkbox__label-text">{t(`multiSelect.countries.${value}`)}</span>
                                    </label>
                                </div>
                            ))}
                        </fieldset>

                        <fieldset data-ecl-multiple-group="EFTA countries" className="ecl-select__multiple-group">
                            <legend className="ecl-select__multiple-group__title">{t('multiSelect.groups.eftaCountries')}</legend>
                            {EFTA_COUNTRY_CODES.map((value, index) => (
                                <div
                                    key={value}
                                    className="ecl-checkbox"
                                    data-select-multiple-value={value}
                                    data-visible="true"
                                >
                                    <input
                                        className="ecl-checkbox__input"
                                        type="checkbox"
                                        id={`select-multiple-${index + 13}`}
                                        name={`select-multiple-${index + 13}`}
                                        checked={selectedValues.includes(value)}
                                        onChange={(e) => handleCheckboxChange(value, e.target.checked)}
                                    />
                                    <label className="ecl-checkbox__label" htmlFor={`select-multiple-${index + 13}`}>
                                        <span className="ecl-checkbox__box" aria-hidden="true">
                                            <svg className="ecl-icon ecl-icon--s ecl-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 48 48">
                                                <path fillRule="evenodd" d="M19.53 36.69 6 23.19l2.13-2.13 11.4 11.4L39.99 12l2.13 2.13z" />
                                            </svg>
                                        </span>
                                        <span className="ecl-checkbox__label-text">{t(`multiSelect.countries.${value}`)}</span>
                                    </label>
                                </div>
                            ))}
                        </fieldset>

                        <fieldset data-ecl-multiple-group="Enlargement countries" className="ecl-select__multiple-group">
                            <legend className="ecl-select__multiple-group__title">{t('multiSelect.groups.enlargementCountries')}</legend>
                            {ENLARGEMENT_COUNTRY_CODES.map((value, index) => (
                                <div
                                    key={value}
                                    className="ecl-checkbox"
                                    data-select-multiple-value={value}
                                    data-visible="true"
                                >
                                    <input
                                        className="ecl-checkbox__input"
                                        type="checkbox"
                                        id={`select-multiple-${index + 17}`}
                                        name={`select-multiple-${index + 17}`}
                                        checked={selectedValues.includes(value)}
                                        onChange={(e) => handleCheckboxChange(value, e.target.checked)}
                                    />
                                    <label className="ecl-checkbox__label" htmlFor={`select-multiple-${index + 17}`}>
                                        <span className="ecl-checkbox__box" aria-hidden="true">
                                            <svg className="ecl-icon ecl-icon--s ecl-checkbox__icon" focusable="false" aria-hidden="true" viewBox="0 0 48 48">
                                                <path fillRule="evenodd" d="M19.53 36.69 6 23.19l2.13-2.13 11.4 11.4L39.99 12l2.13 2.13z" />
                                            </svg>
                                        </span>
                                        <span className="ecl-checkbox__label-text">{t(`multiSelect.countries.${value}`)}</span>
                                    </label>
                                </div>
                            ))}
                        </fieldset>
                    </div>

                    <div className="ecl-select-multiple-toolbar">
                        <button
                            className="ecl-button ecl-button--primary"
                            onClick={handleApply}
                        >
                            {t('multiSelect.apply')}
                        </button>
                        <button
                            className="ecl-button ecl-button--secondary"
                            onClick={handleClear}
                        >
                            {t('multiSelect.clearAll')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MultiSelect.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default MultiSelect;
