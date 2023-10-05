import { useEffect, useState } from 'react';
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
import OrderStatus from '../OrderStatus/OrderStatus';

const API_KEY = process.env.REACT_APP_API_KEY!;
const MAP_URL = process.env.MAP_URL!;

function App() {
  const { MainBlock } = styles;

  const [showStatusOrder, setShowStatusOrder] = useState(false);

  const handleStatusOrder = () => {
    setShowStatusOrder(!showStatusOrder);
  };

  useEffect(() => {
    if (showStatusOrder) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showStatusOrder]);

  return (
    <div>
      <ScrollToHashElement />

      <MainBlock>
        <Header />
        <Hero handleStatusOrder={handleStatusOrder} />
      </MainBlock>

      <About />
      <Services />
      <Gallery />
      <Process />
      <Reviews />
      <Contacts apiKey={API_KEY} mapUrl={MAP_URL} />
      <Footer />

      <OrderStatus
        open={showStatusOrder}
        handleStatusOrder={handleStatusOrder}
      />
    </div>
  );
}

export default App;
