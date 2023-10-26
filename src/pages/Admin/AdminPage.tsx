import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import LogInModal from '../../components/LogInModal/LogInModal';
import appStyles from '../../components/App/App.styled';
import storage from '../../helpers/storage';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchOrders } from '../../redux/ordersOperations';
import { getCurrentOrder, getIsloading, getTotal } from '../../redux/selectors';
import Loader from '../../components/Loader/Loader';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import styles from './AdminPage.styled';
import NewOrder from '../../components/NewOrder/NewOrder';
import { setCurrentOrder } from '../../redux/ordersSlice';
import { IItem } from '../../interfaces/admin/item.interface';
import CurrentOrders from '../../components/CurrentOrders/CurrentOrders';
import ArchivedOrders from '../../components/ArchivedOrders/ArchivedOrders';
import { fetchArchivedOrders } from '../../redux/archivedOrdersOperations';
import UpdateOrder from '../../components/UpdateOrder/UpdateOrder';

function AdminPage() {
  const { Container } = appStyles;
  const { MainBlock, HeaderBlock, Title, StyledArchiveIcon, StyledBackIcon } =
    styles;

  const [isLogIn, setIsLogIn] = useState(storage.load('login') ?? false);
  const [page, setPage] = useState(1);
  const [newOrder, setNewOrder] = useState(false);
  const [updateOrder, setUpdateOrder] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isUseFilter, setIsUseFilter] = useState(false);

  const currentOrder = useSelector(getCurrentOrder);
  const isLoading = useSelector(getIsloading);
  const totalOrders = useSelector(getTotal);

  const dispatch = useAppDispatch();

  const logIn = () => {
    setIsLogIn(!isLogIn);
    storage.save('login', !isLogIn);
  };

  const createNewOrder = () => {
    setNewOrder(!newOrder);
  };

  const getOrderDetails = (orderDetails: IItem) => {
    dispatch(setCurrentOrder(orderDetails));
  };

  const toggleOrderDetails = () => {
    setUpdateOrder(!updateOrder);
  };

  const toggleArchiveOrders = async () => {
    setIsArchived(!isArchived);
    setIsUseFilter(false);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (isLogIn && !isArchived && !isUseFilter) {
      dispatch(fetchOrders(page));
      setShowLoadMore(page < Math.ceil(totalOrders! / 10));
    } else if (isLogIn && isArchived && !isUseFilter) {
      dispatch(fetchArchivedOrders(page));
      setShowLoadMore(page < Math.ceil(totalOrders! / 10));
    }
  }, [page, dispatch, isLogIn, totalOrders, isArchived, isUseFilter]);

  useEffect(() => {
    if (newOrder) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [newOrder]);

  return (
    <Container>
      {isLoading && <Loader />}

      <ToastContainer autoClose={2000} closeOnClick />

      {isLogIn ? (
        <MainBlock>
          <HeaderBlock>
            <Logo className="admin" />
            <Title>{isArchived ? 'Архів' : 'Усі замовлення'}</Title>

            <Button
              type="button"
              className="archive"
              onClick={toggleArchiveOrders}
            >
              {isArchived ? <StyledBackIcon /> : <StyledArchiveIcon />}
            </Button>
          </HeaderBlock>

          {!isArchived && (
            <CurrentOrders
              getOrderDetails={getOrderDetails}
              toggleOrderDetails={toggleOrderDetails}
              createNewOrder={createNewOrder}
              handleLoadMore={handleLoadMore}
              showLoadMore={showLoadMore}
              setIsUseFilter={setIsUseFilter}
            />
          )}

          {isArchived && (
            <ArchivedOrders
              getOrderDetails={getOrderDetails}
              toggleOrderDetails={toggleOrderDetails}
              handleLoadMore={handleLoadMore}
              showLoadMore={showLoadMore}
              setIsUseFilter={setIsUseFilter}
            />
          )}
        </MainBlock>
      ) : (
        <LogInModal logIn={logIn} />
      )}

      {newOrder && (
        <NewOrder createNewOrder={createNewOrder} isArchived={isArchived} />
      )}
      {updateOrder && (
        <UpdateOrder
          page={page}
          toggleOrderDetails={toggleOrderDetails}
          currentOrder={currentOrder}
          isArchived={isArchived}
        />
      )}
    </Container>
  );
}

export default AdminPage;
