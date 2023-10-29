import { useEffect } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import OrderLayout from '../OrderLayout/OrderLayout';

interface IProps {
  createNewOrder: () => void;
  isArchived: boolean;
}

function NewOrder({ createNewOrder, isArchived }: IProps): JSX.Element {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        createNewOrder();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [createNewOrder]);

  return (
    <OrderLayout
      title="Нове замовлення"
      toggleModal={createNewOrder}
      className="order"
    >
      <OrderForm
        className="order"
        createNewOrder={createNewOrder}
        isArchived={isArchived}
      />
    </OrderLayout>
  );
}

export default NewOrder;
