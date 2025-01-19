import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import SocialSharing from './SocialSharing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

import '../styles/nav.css';
import '../styles/cummon.css';


function Navbar() {
    const { t } = useTranslation();
    const [isShareMenuVisible, setIsShareMenuVisible] = useState(false);
    const shareButtonRef = useRef(null);

    const toggleShareMenu = () => {
        setIsShareMenuVisible(!isShareMenuVisible);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isShareMenuVisible) {
                setIsShareMenuVisible(false);
                shareButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isShareMenuVisible]);

    return (
        <div id="navbar-container">
            <div id="es_app_header_title" className="">
                <h1 id="toolTitle" className="ecl-u-type-heading-1" data-i18n="navbar.title">
                    {t('navbar.title')}
                </h1>
            </div>
            <div className="social-container">
                <button type="button" id="tutorialBtn" title={t('navbar.tutorialButton')} className="ecl-button ecl-button--secondary roundBtn" aria-label={t('navbar.tutorialreaLabel')}>
                    <FontAwesomeIcon icon={faBookOpen} aria-hidden="true" />
                </button>
                <div className="dropdown" style={{ position: 'relative' }}>
                    <button
                        ref={shareButtonRef}
                        id="shareBtn"
                        className="ecl-button roundBtn ecl-button--secondary"
                        type="button"
                        title={t('navbar.shareButton')}
                        onClick={toggleShareMenu}
                        aria-expanded={isShareMenuVisible}
                        aria-label={t('navbar.shareAreaLabel')}
                        role="button"
                    >
                        <FontAwesomeIcon icon={faShareAlt} aria-hidden="true" />
                    </button>
                    <SocialSharing
                        isVisible={isShareMenuVisible}
                    />
                </div>
            </div>
            <LanguageSwitcher />
            <div className="logo">
                <a id="home" href="https://ec.europa.eu/eurostat/web/main/home">
                    <img id="eurostatLogo" src="/estat-logo-horizontal.svg" alt={t('navbar.imageAlt')} />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
