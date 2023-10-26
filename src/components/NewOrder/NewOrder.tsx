import OrderForm from '../OrderForm/OrderForm';
import OrderLayout from '../OrderLayout/OrderLayout';

interface IProps {
  createNewOrder: () => void;
  isArchived: boolean;
}

function NewOrder({ createNewOrder, isArchived }: IProps): JSX.Element {
  return (
    <OrderLayout title="Нове замовлення" toggleModal={createNewOrder}>
      <OrderForm createNewOrder={createNewOrder} isArchived={isArchived} />
    </OrderLayout>
  );
}

export default NewOrder;
