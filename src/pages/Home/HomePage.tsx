import { useEffect, useState } from 'react';
import ScrollToHashElement from '../../helpers/scrollToHashElement';
import Contacts from '../../components/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Process from '../../components/Process/Process';
import Reviews from '../../components/Reviews/Reviews';
import Services from '../../components/Services/Services';
import styles from '../../components/App/App.styled';
import OrderStatus from '../../components/OrderStatus/OrderStatus';
import About from '../../components/About/About';

const API_KEY = process.env.REACT_APP_API_KEY!;
const MAP_URL = process.env.MAP_URL!;

function HomePage() {
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

export default HomePage;
