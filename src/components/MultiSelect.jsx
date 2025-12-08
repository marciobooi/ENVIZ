import { useEffect, useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { COUNTRY_GROUPS } from '../config/countryGroups';
import CountryCheckbox from './CountryCheckbox';

const MultiSelect = ({
    onChange,
    label,
    helperText
}) => {
    // Refs
    const selectRef = useRef(null);
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null);
    const lastFocusedElementRef = useRef(null);
    const componentId = useRef(`multiselect-${Math.random().toString(36).substr(2, 9)}`).current;

    // State
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedValues, setSelectedValues] = useState(Object.values(COUNTRY_GROUPS).flat());

    const { t } = useTranslation();
    const defaultLabel = t('multiSelect.label');

    // Filter handlers
    const getFilteredCountries = useCallback((group) => {
        if (!searchTerm) return COUNTRY_GROUPS[group];
        return COUNTRY_GROUPS[group].filter(code =>
            t(`multiSelect.countries.${code}`).toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, t]);

    // Mouse event handlers
    const handleMouseEvents = {
        handleToggle: (e) => {
            e.stopPropagation();
            if (!isOpen) {
                lastFocusedElementRef.current = document.activeElement;
            }
            setIsOpen(!isOpen);
            setSearchTerm('');
        },

        handleClickOutside: useCallback((event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !event.target.closest(".ecl-select__multiple-toggle")
            ) {
                setIsOpen(false);
            }
        }, []),
    };

    // Keyboard event handlers
    const handleKeyboardEvents = {
        handleKeyDown: useCallback((e) => {
            if (!isOpen) return;

            // Move all declarations outside switch
            const focusableElements = dropdownRef.current?.querySelectorAll(
                'input[type="search"], input[type="checkbox"], button:not([disabled])'
            );
            const elements = Array.from(focusableElements || []);
            const firstElement = elements[0];
            const lastElement = elements[elements.length - 1];
            const checkboxes = Array.from(
                dropdownRef.current?.querySelectorAll('input[type="checkbox"]') || []
            ).filter(el => !el.disabled);
            const currentIndex = checkboxes.indexOf(document.activeElement);
            const nextIndex = e.key === "ArrowDown"
                ? (currentIndex + 1) % checkboxes.length
                : (currentIndex - 1 + checkboxes.length) % checkboxes.length;

            switch (e.key) {
                case "Escape":
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                    document.getElementById("select-multiple-toggle")?.focus();
                    break;

                case "Tab":
                    if (!elements.length) return;
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                    break;

                case "ArrowDown":
                case "ArrowUp":
                    e.preventDefault();
                    if (!checkboxes.length) return;
                    checkboxes[nextIndex].focus();
                    break;

                default:
                    break;
            }
        }, [isOpen]),
    };

    // Selection handlers
    const selectionHandlers = {
        handleCheckboxChange: useCallback((value, checked) => {
            setSelectedValues(prev =>
                checked ? [...prev, value] : prev.filter(v => v !== value)
            );
        }, []),

        handleSelectAll: useCallback((checked) => {
            try {
                const allCountries = Object.values(COUNTRY_GROUPS).flat();
                const newValues = checked ? [...allCountries] : [];
                setSelectedValues(newValues);
                announceSelectionChange(newValues.length);
                toast.success(
                    checked
                        ? t('multiSelect.success.allSelected')
                        : t('multiSelect.success.allDeselected')
                );
            } catch (error) {
                toast.error(t('multiSelect.errors.selectionFailed', error));
            }
        }, [t]),

        handleApply: useCallback(() => {
            try {
                onChange(selectedValues);
                setIsOpen(false);
                toast.success(t('multiSelect.success.selectionApplied'));
            } catch (error) {
                toast.error(t('multiSelect.errors.applyFailed', error));
            }
        }, [onChange, selectedValues, t]),

        handleClear: useCallback(() => {
            try {
                setSelectedValues([]);
                onChange([]);
                toast.info(t('multiSelect.success.selectionCleared'));
            } catch (error) {
                toast.error(t('multiSelect.errors.clearFailed', error));
            }
        }, [onChange, t]),
    };

    // Accessibility helpers
    const announceSelectionChange = useCallback((count) => {
        const message = count === 0
            ? t('multiSelect.aria.noSelection')
            : t('multiSelect.aria.selectedCount', { count });

        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.textContent = message;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    }, [t]);

    // Effects
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseEvents.handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleMouseEvents.handleClickOutside);
        };
    }, [handleMouseEvents.handleClickOutside]);

    useEffect(() => {
        if (isOpen) {
            searchInputRef.current?.focus();
        } else if (lastFocusedElementRef.current) {
            lastFocusedElementRef.current.focus();
        }
    }, [isOpen]);

    return (
        <div
            className="ecl-form-group"
            role="application"
            aria-label={t('multiSelect.aria.countrySelector')}
            aria-describedby={helperText ? `select-multiple-helper-${componentId}` : undefined}
        >
            <label
                htmlFor="select-multiple-toggle"
                id="select-multiple-label"
                className="ecl-form-label"
            >
                {label || defaultLabel}
            </label>

            {helperText && (
                <div
                    id={`select-multiple-helper-${componentId}`}
                    className="ecl-help-block"
                >
                    {t(helperText)}
                </div>
            )}

            <div className="ecl-select__container ecl-select__container--m ecl-select__container--hidden">
                <select
                    ref={selectRef}
                    className="ecl-select"
                    id="select-multiple"
                    name="countries"
                    required=""
                    aria-label={label || defaultLabel}
                    aria-describedby={helperText ? `select-multiple-helper-${componentId}` : undefined}
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
                                <use xlinkHref="./icons.svg#corner-arrow"></use>
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
                        onClick={handleMouseEvents.handleToggle}
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
                            onClick={handleMouseEvents.handleToggle}
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
                    className="ecl-select__multiple-dropdown"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t('multiSelect.aria.dropdownDialog')}
                    onKeyDown={handleKeyboardEvents.handleKeyDown}
                    style={{ display: isOpen ? 'block' : 'none' }}
                >
                    <input
                        ref={searchInputRef}
                        className="ecl-text-input"
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                            checked={selectedValues.length === Object.values(COUNTRY_GROUPS).flat().length}
                            onChange={(e) => selectionHandlers.handleSelectAll(e.target.checked)}
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
                        {Object.entries(COUNTRY_GROUPS).map(([groupKey]) => {
                            const filteredCountries = getFilteredCountries(groupKey);
                            if (filteredCountries.length === 0) return null;

                            return (
                                <fieldset
                                    key={groupKey}
                                    className="ecl-select__multiple-group"
                                    aria-label={t(`multiSelect.groups.${groupKey.toLowerCase()}`)}
                                >
                                    <legend className="ecl-select__multiple-group__title">
                                        {t(`multiSelect.groups.${groupKey.toLowerCase()}`)}
                                    </legend>
                                    {filteredCountries.map((code) => (
                                        <CountryCheckbox
                                            key={code}
                                            code={code}
                                            checked={selectedValues.includes(code)}
                                            onChange={selectionHandlers.handleCheckboxChange}
                                            t={t}
                                        />
                                    ))}
                                </fieldset>
                            );
                        })}
                    </div>

                    <div className="ecl-select-multiple-toolbar">
                        <button
                            className="ecl-button ecl-button--primary"
                            onClick={selectionHandlers.handleApply}
                        >
                            {t('multiSelect.apply')}
                        </button>
                        <button
                            className="ecl-button ecl-button--secondary"
                            onClick={selectionHandlers.handleClear}
                        >
                            {t('multiSelect.clearAll')}
                        </button>
                    </div>
                </div>
                <div id={`select-multiple-description`} className="helper-text sr-only">
                        {t('multiSelect.helperText')}
                </div>
            </div>
          
        </div>
    );
};

MultiSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    helperText: PropTypes.string
};

export default MultiSelect;
