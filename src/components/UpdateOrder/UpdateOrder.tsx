import { toast } from 'react-toastify';
import Button from '../Button/Button';
import OrderForm from '../OrderForm/OrderForm';
import { IItem } from '../../interfaces/admin/item.interface';
import OrderLayout from '../OrderLayout/OrderLayout';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteOrder, fetchOrders } from '../../redux/ordersOperations';
import {
  addToArchive,
  deleteArchivedOrder,
  fetchArchivedOrders,
} from '../../redux/archivedOrdersOperations';

interface IProps {
  toggleOrderDetails: () => void;
  currentOrder: IItem | null;
  page: number;
  isArchived: boolean;
}

function UpdateOrder({
  toggleOrderDetails,
  currentOrder,
  page,
  isArchived,
}: IProps): JSX.Element {
  const dispatch = useAppDispatch();

  const formattedFormData = {
    orderNumber: currentOrder!.orderNumber,
    date: currentOrder!.date,
    name: currentOrder!.name,
    phone: currentOrder!.phone,
    repairType: currentOrder!.repairType,
    price: currentOrder!.price,
    completeSet: currentOrder!.completeSet,
    comment: currentOrder!.comment,
    status: currentOrder!.status,
  };

  const handleDelete = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(
      isArchived
        ? deleteArchivedOrder(currentOrder!._id!)
        : deleteOrder(currentOrder!._id!)
    )
      .unwrap()
      .then(() => {
        toast.success('Замовлення видалене успішно');
        toggleOrderDetails();
        if (isArchived) {
          dispatch(fetchArchivedOrders(page));
        } else {
          dispatch(fetchOrders(page));
        }
      })
      .catch((error) => {
        if (error) {
          toast.error('Сталася помилка. Спробуйте пізніше');
        }
      });
  };

  const handleToArchive = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(addToArchive(formattedFormData))
      .unwrap()
      .then(() => {
        toast.success('Перенесено в архів');
        toggleOrderDetails();
        dispatch(fetchOrders(page));
        dispatch(fetchArchivedOrders(page));
      })
      .catch((error) => {
        if (error) {
          toast.error('Сталася помилка. Спробуйте пізніше');
        }
      });

    dispatch(deleteOrder(currentOrder!._id!));
  };

  return (
    <OrderLayout title="Картка замовлення" toggleModal={toggleOrderDetails}>
      <OrderForm
        toggleOrderDetails={toggleOrderDetails}
        currentOrder={currentOrder}
        isArchived={isArchived}
      />

      {!isArchived && (
        <Button
          type="button"
          className="order-form update"
          onClick={handleToArchive}
        >
          В архів
        </Button>
      )}

      <Button
        type="button"
        className="order-form update"
        onClick={handleDelete}
      >
        Видалити замовлення
      </Button>
    </OrderLayout>
  );
}

export default UpdateOrder;
