import { useSelector } from 'react-redux';
import OrderList from '../OrderList/OrderList';
import { IItem } from '../../interfaces/admin/item.interface';
import Filter from '../Filter/Filter';
import { getTotal, sortedArchiveOrders } from '../../redux/selectors';
import Button from '../Button/Button';

interface IProps {
  getOrderDetails: (arg0: IItem) => void;
  toggleOrderDetails: () => void;
  handleLoadMore: () => void;
  showLoadMore: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ArchivedOrders({
  getOrderDetails,
  toggleOrderDetails,
  handleLoadMore,
  showLoadMore,
  onChange,
}: IProps) {
  const archivedOrders = useSelector(sortedArchiveOrders);
  const totalOrders = useSelector(getTotal);

  return (
    <div>
      <Filter className="orders" onChange={onChange} />

      {archivedOrders.length ? (
        <OrderList
          orders={archivedOrders}
          getOrderDetails={getOrderDetails}
          toogleOrderDetails={toggleOrderDetails}
        />
      ) : (
        <div>Даних не знайдено</div>
      )}

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

export default ArchivedOrders;
