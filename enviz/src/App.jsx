import Navbar from './components/Navbar';
import CardsContainer from './components/CardsContainer';
import Tutorial from './components/Tutorial';
import TutorialProvider from './contexts/TutorialContext';

function App() {
  return (
    <TutorialProvider>
      <div>
        <Navbar />
        <main>
          <CardsContainer />
        </main>
        <Tutorial />
      </div>
    </TutorialProvider>
  );
}

export default App;
