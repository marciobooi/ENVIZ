import { useTranslation } from 'react-i18next';
import '../styles/footer.css';

const Footer = () => {
    const { t } = useTranslation();

    const handleKeyDown = (event, href) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.location.href = href;
        }
    };

    return (
        <footer role="contentinfo" aria-label={t('footer.ariaLabel')}>
            <div id="footer" className="ecl-site-footer">
                <nav aria-label={t('footer.navAriaLabel')}>
                    <ul id="footerCredits"
                        className="ecl-site-footer__list"
                        role="menubar"
                    >
                        <li className="ecl-site-footer__list-item" role="none">
                            <a
                                id="footer-privacy"
                                href="https://ec.europa.eu/info/legal-notice_en"
                                className="ecl-link ecl-link--standalone ecl-site-footer__link"
                                role="menuitem"
                                onKeyDown={(e) => handleKeyDown(e, "https://ec.europa.eu/info/legal-notice_en")}
                                aria-label={t('footer.legalAriaLabel')}
                            >
                                {t('footer.legal')}
                            </a>
                        </li>
                        <li className="ecl-site-footer__list-item" role="none">
                            <a
                                id="footer-legal"
                                href="https://ec.europa.eu/info/privacy-policy_en"
                                className="ecl-link ecl-link--standalone ecl-site-footer__link"
                                role="menuitem"
                                onKeyDown={(e) => handleKeyDown(e, "https://ec.europa.eu/info/privacy-policy_en")}
                                aria-label={t('footer.privacyAriaLabel')}
                            >
                                {t('footer.privacy')}
                            </a>
                        </li>
                        <li className="ecl-site-footer__list-item" role="none">
                            <a
                                id="footer-cookies"
                                href="https://ec.europa.eu/info/cookies_en"
                                className="ecl-link ecl-link--standalone ecl-site-footer__link"
                                role="menuitem"
                                onKeyDown={(e) => handleKeyDown(e, "https://ec.europa.eu/info/cookies_en")}
                                aria-label={t('footer.cookiesAriaLabel')}
                            >
                                {t('footer.cookies')}
                            </a>
                        </li>
                        <li className="ecl-site-footer__list-item" role="none">
                            <a
                                id="footer-access"
                                href="https://ec.europa.eu/eurostat/web/main/help/accessibility"
                                className="ecl-link ecl-link--standalone ecl-site-footer__link"
                                role="menuitem"
                                onKeyDown={(e) => handleKeyDown(e, "https://ec.europa.eu/eurostat/web/main/help/accessibility")}
                                aria-label={t('footer.accessibilityAriaLabel')}
                            >
                                {t('footer.accessibility')}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer; 