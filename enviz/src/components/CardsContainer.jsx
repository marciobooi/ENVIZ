import Card from './Card';
import ModalComponent from './Modal';
import '../styles/cards-container.css';
import { useTranslation } from 'react-i18next';
import getCardData from '../config/cardData';
import { useRef, useState } from 'react';

const CardsContainer = () => {
    const { t } = useTranslation();

    // Declare toggleModal function first to avoid accessing it before initialization
    const toggleModal = (cardId) => {
        setModalState((prevState) => ({
            isOpen: !prevState.isOpen,
            cardId: cardId || null, // Set cardId when opening
        }));
    };

    const cardData = getCardData(t, toggleModal); // Now it's accessible here
    const cardRefs = useRef(new Map());
    const [modalState, setModalState] = useState({ isOpen: false, cardId: null });

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
            role="list"
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
            {/* Pass isOpen to ModalComponent */}
            <ModalComponent
                isOpen={modalState.isOpen} // Ensure this is passed
                onClose={() => toggleModal(null)}
                modalTitle="Card Details"
                bodyContent={
                    modalState.cardId
                        ? `Details about card with ID: ${modalState.cardId}`
                        : 'No card selected.'
                }
            />
        </div>
    );
};

export default CardsContainer;
