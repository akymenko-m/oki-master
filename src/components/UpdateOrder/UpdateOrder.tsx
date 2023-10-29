import { toast } from 'react-toastify';
import { useEffect } from 'react';
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
import styles from './UpdateOrder.styled';

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
  const { ButtonsBlock } = styles;

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

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        toggleOrderDetails();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [toggleOrderDetails]);

  return (
    <OrderLayout
      title="Картка замовлення"
      className="order"
      toggleModal={toggleOrderDetails}
    >
      <OrderForm
        toggleOrderDetails={toggleOrderDetails}
        currentOrder={currentOrder}
        isArchived={isArchived}
      />

      <ButtonsBlock>
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
          Видалити
        </Button>
      </ButtonsBlock>
    </OrderLayout>
  );
}

export default UpdateOrder;
