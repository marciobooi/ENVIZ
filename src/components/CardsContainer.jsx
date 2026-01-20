import Card from './Card';
import '../styles/cards-container.css';
import { useTranslation } from 'react-i18next';
import getCardData from '../config/cardData';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const CardsContainer = ({ toggleModal }) => {
    const { t } = useTranslation();
    const cardData = getCardData(t, toggleModal);
    const cardRefs = useRef(new Map());

    const handleCardKeyDown = (event, currentIndex) => {
        const totalCards = cardData.length;
        let nextIndex;

        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                nextIndex = (currentIndex - 1 + totalCards) % totalCards;
                break;
            case 'ArrowDown':
                event.preventDefault();
                nextIndex = (currentIndex + 1) % totalCards;
                break;
            default:
                return;
        }

        const nextCard = cardRefs.current.get(nextIndex);
        if (nextCard) {
            nextCard.focus();
        }
    };

    return (
        <div
            className="cards-container"
            aria-label={t('card.containerLabel')}
        >
            {cardData.map((card, index) => (
                <Card
                    key={card.id}
                    {...card}
                    ref={(el) => {
                        if (el) {
                            cardRefs.current.set(index, el);
                        } else {
                            cardRefs.current.delete(index);
                        }
                    }}
                    onKeyDown={(e) => handleCardKeyDown(e, index)}
                />
            ))}
        </div>
    );
};

CardsContainer.propTypes = {
    toggleModal: PropTypes.func.isRequired
};

export default CardsContainer;
