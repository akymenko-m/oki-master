import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Process from '../Process/Process';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const API_KEY = process.env.REACT_APP_API_KEY!;
const MAP_URL = process.env.MAP_URL!;

function App() {
  return (
    <div>
      <Header />

      <About />
      <Services />
      <Gallery />
      <Process />
      <Reviews />
      <Contacts apiKey={API_KEY} mapUrl={MAP_URL} />
    </div>
  );
}

export default App;
