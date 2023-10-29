import { useSelector } from 'react-redux';
import { getTotal, sortedGetOrders } from '../../redux/selectors';
import OrderList from '../OrderList/OrderList';
import Button from '../Button/Button';
import adminPageStyles from '../../pages/Admin/AdminPage.styled';
import { IItem } from '../../interfaces/admin/item.interface';
import Filter from '../Filter/Filter';

interface IProps {
  getOrderDetails: (arg0: IItem) => void;
  toggleOrderDetails: () => void;
  createNewOrder: () => void;
  handleLoadMore: () => void;
  showLoadMore: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CurrentOrders({
  getOrderDetails,
  toggleOrderDetails,
  createNewOrder,
  handleLoadMore,
  showLoadMore,
  onChange,
}: IProps) {
  const { StyledPlusIcon } = adminPageStyles;

  const orders = useSelector(sortedGetOrders);
  const totalOrders = useSelector(getTotal);

  return (
    <div>
      <Filter className="orders" onChange={onChange} />

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
        <StyledPlusIcon />
      </Button>

      {showLoadMore && totalOrders && (
        <Button
          type="button"
          className="order-form update page"
          onClick={handleLoadMore}
        >
          Завантажити ще
        </Button>
      )}
    </div>
  );
}

export default CurrentOrders;
