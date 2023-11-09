import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
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
import { IItem } from '../../interfaces/admin/item.interface';
import Loader from '../../components/Loader/Loader';
import { getIsError, getIsloading } from '../../redux/selectors';

const API_KEY = process.env.REACT_APP_API_KEY!;
const MAP_URL = process.env.MAP_URL!;

function HomePage() {
  const { MainBlock } = styles;

  const [showStatusOrder, setShowStatusOrder] = useState(false);
  const [orderData, setOrderData] = useState<IItem | undefined>(undefined);
  const isLoading = useSelector(getIsloading);
  const isError = useSelector(getIsError);

  const handleStatusOrder = () => {
    setShowStatusOrder(!showStatusOrder);
    setOrderData(undefined);
  };

  useEffect(() => {
    if (showStatusOrder) {
      document.body.style.overflow = 'hidden';
    }

    if (isError) {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showStatusOrder, isError]);

  return (
    <div>
      {isLoading && <Loader />}
      <ScrollToHashElement />
      <ToastContainer autoClose={2000} closeOnClick />

      <MainBlock>
        <Header />
        <Hero
          handleStatusOrder={handleStatusOrder}
          setOrderData={setOrderData}
        />
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
        orderData={orderData}
      />
    </div>
  );
}

export default HomePage;
