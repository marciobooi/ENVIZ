import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { forwardRef } from 'react';
import '../styles/card.css';

const Card = forwardRef(({ id, imageUrl, imageAlt, title, description, onCustomize, onGoToTool, onKeyDown, hasCustomization = true, label }, ref) => {
    const { t } = useTranslation();

    const handleKeyDown = (event) => {
        if (onKeyDown) {
            onKeyDown(event);
        }

        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onGoToTool();
        }
    };

    return (
        <div
            ref={ref}
            className="ecl-card"
            tabIndex="0"
            aria-labelledby={`card-title-${id}`}
            aria-describedby={`card-desc-${id}`}
            onKeyDown={handleKeyDown}
        >
            {/* ARIA live announcement */}
            <div
                id={`card-announcement-${id}`}
                role="status"
                aria-live="polite"
                className="sr-only"
            >
                {`You are on ${title}.`}
            </div>
            <div className="ecl-card__image-container">
                {label && (
                    <div className="ecl-content-block__label-container" aria-label="Labels">
                        <div className="ecl-content-block__label-item">
                            <span className="ecl-label ecl-label--high">{label}</span>
                        </div>
                    </div>
                )}
                <picture className="ecl-picture ecl-card__picture">
                    <img
                        className="ecl-card__image"
                        src={imageUrl}
                        alt={imageAlt}
                    />
                </picture>
            </div>
            <div className="ecl-card__body">
                <div className="ecl-content-block ecl-card__content-block">
                    <div className="ecl-content-block__title" id={`card-title-${id}`}>
                        <h2 className="ecl-link ecl-link--standalone">{title}</h2>
                    </div>
                    <div className="ecl-content-block__description" id={`card-desc-${id}`}>
                        {description}
                    </div>
                </div>
            </div>
            <div className="ecl-card__actions">
                {hasCustomization && (
                    <button
                        id="modal-toggle"
                        aria-controls="modal-example"
                        aria-haspopup="dialog"
                        className="ecl-button ecl-button--secondary"
                        onClick={onCustomize}
                        type="button"
                        aria-label={t('card.customizeButton')}
                    >
                        {t('card.customizeButton')}
                    </button>
                )}
                <button
                    className={`ecl-button ecl-button--primary ${!hasCustomization ? 'ecl-button--full-width' : ''}`}
                    onClick={onGoToTool}
                    type="button"
                    aria-label={t('card.goToToolButton')}
                >
                    {t('card.goToToolButton')}
                </button>
            </div>
        </div>
    );
});

Card.propTypes = {
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onCustomize: PropTypes.func,
    onGoToTool: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
    hasCustomization: PropTypes.bool,
    label: PropTypes.string
};

Card.displayName = 'Card';

export default Card;