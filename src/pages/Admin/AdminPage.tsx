import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import LogInModal from '../../components/LogInModal/LogInModal';
import appStyles from '../../components/App/App.styled';
import storage from '../../helpers/storage';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchByQuery, fetchOrders } from '../../redux/ordersOperations';
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
import {
  fetchArchiveByQuery,
  fetchArchivedOrders,
} from '../../redux/archivedOrdersOperations';
import UpdateOrder from '../../components/UpdateOrder/UpdateOrder';
import Filter from '../../components/Filter/Filter';

function AdminPage() {
  const { Container } = appStyles;
  const {
    MainBlock,
    HeaderBlock,
    Title,
    StyledArchiveIcon,
    StyledBackIcon,
    StyledPlusIcon,
    HeaderAdmin,
    StyledOrdersIcon,
  } = styles;

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

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setIsUseFilter(true);
    if (isArchived) {
      dispatch(fetchArchiveByQuery(query));
    } else {
      dispatch(fetchByQuery(query));
    }
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
    if (newOrder || updateOrder) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [newOrder, updateOrder]);

  return (
    <Container>
      {isLoading && <Loader />}

      <ToastContainer autoClose={2000} closeOnClick />

      {isLogIn ? (
        <MainBlock className="">
          <HeaderBlock className="admin-page">
            <Logo className="admin-page" />
            <Title>{isArchived ? 'Архів' : 'Усі замовлення'}</Title>

            <Button
              type="button"
              className="archive"
              onClick={toggleArchiveOrders}
            >
              {isArchived ? <StyledBackIcon /> : <StyledArchiveIcon />}
            </Button>
          </HeaderBlock>

          <HeaderAdmin>
            <Title>{isArchived ? 'Архів' : 'Усі замовлення'}</Title>

            {!isArchived && (
              <Button
                type="button"
                onClick={createNewOrder}
                className="with-icons"
              >
                Нове замовлення
                <StyledPlusIcon className="header" />
              </Button>
            )}

            <Button
              type="button"
              onClick={toggleArchiveOrders}
              className="with-icons"
            >
              {isArchived ? 'Усі замовлення' : 'Архів'}
              {isArchived ? (
                <StyledOrdersIcon />
              ) : (
                <StyledArchiveIcon className="header" />
              )}
            </Button>

            <Filter className="header" onChange={inputChange} />
          </HeaderAdmin>

          {!isArchived && (
            <CurrentOrders
              getOrderDetails={getOrderDetails}
              toggleOrderDetails={toggleOrderDetails}
              createNewOrder={createNewOrder}
              handleLoadMore={handleLoadMore}
              showLoadMore={showLoadMore}
              onChange={inputChange}
            />
          )}

          {isArchived && (
            <ArchivedOrders
              getOrderDetails={getOrderDetails}
              toggleOrderDetails={toggleOrderDetails}
              handleLoadMore={handleLoadMore}
              showLoadMore={showLoadMore}
              onChange={inputChange}
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
