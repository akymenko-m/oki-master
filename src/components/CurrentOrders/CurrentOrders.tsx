import { useSelector } from 'react-redux';
import { getTotal, sortedGetOrders } from '../../redux/selectors';
import OrderList from '../OrderList/OrderList';
import Button from '../Button/Button';
import adminPageStyles from '../../pages/Admin/AdminPage.styled';
import { IItem } from '../../interfaces/admin/item.interface';
import Filter from '../Filter/Filter';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchByQuery } from '../../redux/ordersOperations';

interface IProps {
  getOrderDetails: (arg0: IItem) => void;
  toggleOrderDetails: () => void;
  createNewOrder: () => void;
  handleLoadMore: () => void;
  showLoadMore: boolean;
  setIsUseFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

function CurrentOrders({
  getOrderDetails,
  toggleOrderDetails,
  createNewOrder,
  handleLoadMore,
  showLoadMore,
  setIsUseFilter,
}: IProps) {
  const { StyledCloseIcon } = adminPageStyles;

  const orders = useSelector(sortedGetOrders);
  const totalOrders = useSelector(getTotal);

  const dispatch = useAppDispatch();

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setIsUseFilter(true);
    dispatch(fetchByQuery(query));
  };

  return (
    <div>
      <Filter onChange={inputChange} />

      {orders.length ? (
        <OrderList
          orders={orders}
          getOrderDetails={getOrderDetails}
          toogleOrderDetails={toggleOrderDetails}
        />
      ) : (
        <div>Даних не знайдено</div>
      )}

      <Button type="button" className="add" onClick={createNewOrder}>
        <StyledCloseIcon />
      </Button>

      {showLoadMore && totalOrders && (
        <Button
          type="button"
          className="order-form update"
          onClick={handleLoadMore}
        >
          Завантажити ще
        </Button>
      )}
    </div>
  );
}

export default CurrentOrders;
