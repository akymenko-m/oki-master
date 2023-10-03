import ScrollToHashElement from '../../helpers/scrollToHashElement';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Process from '../Process/Process';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import styles from './App.styled';

const API_KEY = process.env.REACT_APP_API_KEY!;
const MAP_URL = process.env.MAP_URL!;

function App() {
  const { MainBlock } = styles;

  return (
    <div>
      <ScrollToHashElement />

      <MainBlock>
        <Header />
        <Hero />
      </MainBlock>

      <About />
      <Services />
      <Gallery />
      <Process />
      <Reviews />
      <Contacts apiKey={API_KEY} mapUrl={MAP_URL} />
      <Footer />
    </div>
  );
}

export default App;
