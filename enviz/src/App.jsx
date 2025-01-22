import { useState } from 'react';
import Navbar from './components/Navbar';
import CardsContainer from './components/CardsContainer';
import Tutorial from './components/Tutorial';
import TutorialProvider from './contexts/TutorialContext';
import Footer from './components/Footer';

// import '@ecl/preset-eu/dist/scripts/ecl-eu.js';
import Enprices from './components/Enprices';
import getCardData from './config/cardData';
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (modalId) => {
    setActiveModal(activeModal === modalId ? null : modalId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const cardData = getCardData(t, toggleModal);

  return (
    <TutorialProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <CardsContainer cards={cardData} toggleModal={toggleModal} />
        </main>
        <Footer />
        <Tutorial />
        <Enprices
          isOpen={activeModal === 'enprices'}
          onClose={handleCloseModal}
        />
      </div>
    </TutorialProvider>
  );
}

export default App;
