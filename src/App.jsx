import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// Components
import Navbar from './components/Navbar';
import CardsContainer from './components/CardsContainer';
import Tutorial from './components/Tutorial';
import TutorialProvider from './contexts/TutorialContext';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Enprices from './components/Enprices';
import Sankey from './components/Sankey';
import Enmonthly from './components/Enmonthly';
import Entrade from './components/Entrade';
import Enbal from './components/Enbal';
import Endash from './components/Endash';
import ErrorBoundary from './components/ErrorBoundary';
import MetaTags from './components/MetaTags';
import Spinner from './components/Spinner';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const { t } = useTranslation();

  const handleToggleModal = useCallback((modalId) => {
    setActiveModal(prevModal => prevModal === modalId ? null : modalId);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const modalComponents = {
    enprices: Enprices,
    sankey: Sankey,
    enmonthly: Enmonthly,
    entrade: Entrade,
    enbal: Enbal,
    endash: Endash
  };

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Spinner
          text={t('common.loading')}
          size="l"
          color="primary"
        />
      </div>
    );
  }

  const ModalComponent = activeModal ? modalComponents[activeModal] : null;

  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ErrorBoundary>
            <TutorialProvider>
              <MetaTags />
              <div className="app-container">
                <Navbar />
                <main id="main-content" tabIndex="-1">
                  <CardsContainer toggleModal={handleToggleModal} />
                  {ModalComponent && <ModalComponent isOpen onClose={handleCloseModal} />}
                </main>
                <Footer />
                <Tutorial />
                <ScrollToTop />
              </div>
            </TutorialProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;


