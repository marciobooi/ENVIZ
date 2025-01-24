import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';

import '../styles/dropdown.css';

function openWindow(url, height = 450, width = 650) {
    window.open(url, "", `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=${height},width=${width}`);
}

const SocialSharing = ({ isVisible, setIsVisible }) => {
    const menuRef = useRef(null);
    const { t } = useTranslation();
    const currentUrl = encodeURIComponent(window.location.href);

    useEffect(() => {
        if (!isVisible) return;

        const menu = menuRef.current;
        const focusableElements = menu.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e) => {
            if (e.key === 'Tab') {
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
            }
        };

        menu.addEventListener('keydown', handleTabKey);
        firstElement.focus();

        return () => {
            menu.removeEventListener('keydown', handleTabKey);
        };
    }, [isVisible]);

    useClickOutside(menuRef, () => setIsVisible(false), isVisible);

    const shareToLinkedIn = () => {
        const description = encodeURIComponent(t('shareMenu.shareDescription'));
        const url = `https://www.linkedin.com/shareArticle?mini=true&title=Energyprices&summary=${description}&url=${currentUrl}`;
        openWindow(url);
    };

    const shareToTwitter = () => {
        const textContent = encodeURIComponent(t('shareMenu.shareDescription'));
        const url = `https://twitter.com/share?text=${textContent}&url=${currentUrl}`;
        openWindow(url, 400, 700);
    };

    const shareToFacebook = () => {
        const description = encodeURIComponent(t('shareMenu.shareDescription'));
        const url = `https://www.facebook.com/sharer.php?u=${currentUrl}&quote=${description}`;
        openWindow(url, 500, 700);
    };

    return (
        <div
            className="social-share-wrapper"
            ref={menuRef}
            role="dialog"
            aria-label={t('shareMenu.shareAreaLabel')}
        >
            {isVisible && (
                <ul
                    className="dropdown-menu"
                    role="menu"
                    aria-labelledby="shareBtn"
                    tabIndex={-1}
                >
                    <div className="ecl-social-media-share">
                        <p
                            className="ecl-social-media-share__description"
                            id="share-menu-title"
                            role="heading"
                            aria-level="2"
                        >
                            {t('shareMenu.shareTitle')}
                        </p>
                        <ul
                            className="ecl-social-media-share__list"
                            aria-labelledby="share-menu-title"
                        >
                            <li className="ecl-social-media-share__item">
                                <button
                                    onClick={shareToTwitter}
                                    className="ecl-link ecl-link--standalone ecl-link--icon ecl-social-media-share__link"
                                    role="menuitem"
                                    tabIndex={0}
                                    aria-label={t('shareMenu.shareOnX')}
                                >
                                    <FontAwesomeIcon
                                        className="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon"
                                        aria-hidden="true"
                                        icon={faXTwitter}
                                    />
                                    <span className="ecl-link__label">X</span>
                                </button>
                            </li>
                            <li className="ecl-social-media-share__item">
                                <button
                                    onClick={shareToFacebook}
                                    className="ecl-link ecl-link--standalone ecl-link--icon ecl-social-media-share__link"
                                    role="menuitem"
                                    tabIndex={0}
                                    aria-label={t('shareMenu.shareOnFacebook')}
                                >
                                    <FontAwesomeIcon
                                        className="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon"
                                        aria-hidden="true"
                                        icon={faFacebook}
                                    />
                                    <span className="ecl-link__label">Facebook</span>
                                </button>
                            </li>
                            <li className="ecl-social-media-share__item">
                                <button
                                    onClick={shareToLinkedIn}
                                    className="ecl-link ecl-link--standalone ecl-link--icon ecl-social-media-share__link"
                                    role="menuitem"
                                    tabIndex={0}
                                    aria-label={t('shareMenu.shareOnLinkedIn')}
                                >
                                    <FontAwesomeIcon
                                        className="ecl-icon ecl-icon--m ecl-link__icon ecl-social-media-share__icon"
                                        aria-hidden="true"
                                        icon={faLinkedin}
                                    />
                                    <span className="ecl-link__label">LinkedIn</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </ul>
            )}
        </div>
    );
};

SocialSharing.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    setIsVisible: PropTypes.func.isRequired
};

export default SocialSharing;
