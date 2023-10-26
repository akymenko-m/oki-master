import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import OrderList from '../OrderList/OrderList';
import { IItem } from '../../interfaces/admin/item.interface';
import Filter from '../Filter/Filter';
import { getTotal, sortedArchiveOrders } from '../../redux/selectors';
import { fetchArchiveByQuery } from '../../redux/archivedOrdersOperations';
import Button from '../Button/Button';

interface IProps {
  getOrderDetails: (arg0: IItem) => void;
  toggleOrderDetails: () => void;
  handleLoadMore: () => void;
  showLoadMore: boolean;
  setIsUseFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

function ArchivedOrders({
  getOrderDetails,
  toggleOrderDetails,
  handleLoadMore,
  showLoadMore,
  setIsUseFilter,
}: IProps) {
  const archivedOrders = useSelector(sortedArchiveOrders);
  const totalOrders = useSelector(getTotal);

  const dispatch = useAppDispatch();
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setIsUseFilter(true);
    dispatch(fetchArchiveByQuery(query));
  };

  return (
    <div>
      <Filter onChange={inputChange} />

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
          className="order-form update"
          onClick={handleLoadMore}
        >
          Завантажити ще
        </Button>
      )}
    </div>
  );
}

export default ArchivedOrders;
