import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faGlobe } from '@fortawesome/free-solid-svg-icons';
import useClickOutside from '../hooks/useClickOutside';

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState(i18n.language);
    const dropdownRef = useRef(null);
    const languageButtonRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        setActiveLanguage(i18n.language);
    }, [i18n.language]);

    useEffect(() => {
        const dropdownElement = dropdownRef.current;

        if (isVisible && dropdownRef.current) {
            const focusableElements = dropdownRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const handleKeyDown = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) { // Shift + Tab
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else { // Tab
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            dropdownElement.addEventListener('keydown', handleKeyDown);

            return () => {
                if (dropdownElement) {
                    dropdownElement.removeEventListener('keydown', handleKeyDown);
                }
            };
        }
    }, [isVisible]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isVisible) {
                setIsVisible(false);
                languageButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isVisible]);

    useClickOutside(containerRef, () => setIsVisible(false), isVisible);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLanguage(lng);
    };

    return (
        <div className="" id="lang-section" ref={containerRef}>
            <button
                ref={languageButtonRef}
                id="toggleLanguageBtn"
                type="button"
                className="ecl-button ecl-button--secondary icon-bottom"
                aria-expanded={isVisible}
                aria-label={t('languageSwitcher.changeLanguage', { language: t(`languageSwitcher.languages.${activeLanguage}`) })}
                onClick={toggleVisibility}
            >
                <FontAwesomeIcon icon={faGlobe} />
                <span className="language-text">
                    {t(`languageSwitcher.languages.${activeLanguage}`)}
                </span>
            </button>

            {isVisible && (
                <div
                    ref={dropdownRef}
                    className="ecl-site-header__language-container"
                    id="language-list-overlay"
                    data-ecl-language-list-overlay=""
                    aria-labelledby="ecl-site-header__language-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="ecl-site-header__language-header">
                        <div className="ecl-site-header__language-title" id="ecl-site-header__language-title">
                            {t('languageSwitcher.selectLanguage')}
                        </div>
                        <button
                            id="languageClsBtn"
                            className="ecl-button ecl-button--ghost ecl-site-header__language-close"
                            type="button"
                            data-ecl-language-list-close=""
                            tabIndex="0"
                            onClick={toggleVisibility}
                        >
                            <span className="ecl-button__container">
                                <span className="ecl-u-sr-only" data-ecl-label="true">{t('languageSwitcher.close')}</span>
                                <FontAwesomeIcon icon={faClose} />
                            </span>
                        </button>
                    </div>

                    <div className="ecl-site-header__language-content ecl-site-header__language-content--stack">
                        <div
                            className="ecl-site-header__language-category ecl-site-header__language-category--3-col"
                            data-ecl-language-list-eu=""
                        >
                            <div className="ecl-site-header__language-category-title">{t('OFFICIAL')}</div>
                            <ul className="ecl-site-header__language-list">
                                {['en', 'de', 'fr'].map((lang) => (
                                    <li
                                        key={lang}
                                        className={`ecl-site-header__language-item ${activeLanguage === lang ? 'active' : ''}`}
                                        id={lang.toUpperCase()}
                                        data-lang={lang.toUpperCase()}
                                        tabIndex="0"
                                        onClick={() => changeLanguage(lang)}
                                    >
                                        <span className="ecl-link ecl-link--standalone ecl-site-header__language-link">
                                            <span className="ecl-site-header__language-link-code">{lang}</span>
                                            <span className="ecl-site-header__language-link-label">{t(`languageSwitcher.languages.${lang}`)}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageSwitcher;
