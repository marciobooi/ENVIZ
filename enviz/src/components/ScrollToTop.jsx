import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/scrollToTop.css';

const ScrollToTop = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="ecl-scroll-to-top"
                    aria-label={t('common.scrollToTop')}
                    title={t('common.scrollToTop')}
                >
                    <svg
                        className="ecl-scroll-to-top__icon"
                        focusable="false"
                        aria-hidden="true"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                            transform="rotate(-90 12 12)"
                        />
                    </svg>
                </button>
            )}
        </>
    );
};

export default ScrollToTop; 