import Navbar from './components/Navbar';
import CardsContainer from './components/CardsContainer';
import Tutorial from './components/Tutorial';
import TutorialProvider from './contexts/TutorialContext';
import Footer from './components/Footer';

function App() {
  return (
    <TutorialProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <CardsContainer />
        </main>
        <Footer />
        <Tutorial />
      </div>
    </TutorialProvider>
  );
}

export default App;
