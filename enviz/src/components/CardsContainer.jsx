import Card from './Card';
import '../styles/cards-container.css';
import { useTranslation } from 'react-i18next';

const CardsContainer = () => {
    const { t } = useTranslation();

    const cardData = [
        {
            imageUrl: "ENPRICES.png",
            imageAlt: t('card.electricity.imageAlt'),
            title: t('card.electricity.title'),
            description: t('card.electricity.description'),
            onCustomize: () => console.log("Customize 1"),
            onGoToTool: () => console.log("Go to tool 1")
        },
        {
            imageUrl: "/SANKEY.png",
            imageAlt: t('card.gas.imageAlt'),
            title: t('card.gas.title'),
            description: t('card.gas.description'),
            onCustomize: () => console.log("Customize 2"),
            onGoToTool: () => console.log("Go to tool 2")
        }
    ];

    return (
        <div
            className="cards-container"
            role="region"
            aria-label={t('card.containerLabel')}
        >
            {cardData.map((card, index) => (
                <Card
                    key={card.id || index}
                    {...card}
                />
            ))}
        </div>
    );
};

export default CardsContainer;