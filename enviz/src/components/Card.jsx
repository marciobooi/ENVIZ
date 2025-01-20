import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../styles/card.css';

const Card = ({ imageUrl, imageAlt, title, description, onCustomize, onGoToTool }) => {
    const { t } = useTranslation();

    return (
        <article className="ecl-card">
            <picture className="ecl-picture ecl-card__picture">
                <img
                    className="ecl-card__image"
                    src={imageUrl}
                    alt={imageAlt}
                />
            </picture>
            <div className="ecl-card__body">
                <div className="ecl-content-block ecl-card__content-block">
                    <div className="ecl-content-block__title">
                        <h2 className="ecl-link ecl-link--standalone">{title}</h2>
                    </div>
                    <div className="ecl-content-block__description">
                        {description}
                    </div>
                    <div className="ecl-card__actions">
                        <button
                            className="ecl-button ecl-button--secondary"
                            onClick={onCustomize}
                            type="button"
                            aria-label={t('card.customizeButton')}
                        >
                            {t('card.customizeButton')}
                        </button>
                        <button
                            className="ecl-button ecl-button--primary"
                            onClick={onGoToTool}
                            type="button"
                            aria-label={t('card.goToToolButton')}
                        >
                            {t('card.goToToolButton')}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onCustomize: PropTypes.func.isRequired,
    onGoToTool: PropTypes.func.isRequired
};

export default Card;