import Card from './Card';
import '../styles/cards-container.css';
import { useTranslation } from 'react-i18next';
import getCardData from '../config/cardData';

const CardsContainer = () => {
    const { t } = useTranslation();
    const cardData = getCardData(t);

    return (
        <div
            className="cards-container"
            role="region"
            aria-label={t('card.containerLabel')}
        >
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    {...card}
                />
            ))}
        </div>
    );
};

export default CardsContainer;