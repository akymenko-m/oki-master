import { IItem } from '../../interfaces/admin/item.interface';
import OrderItem from '../OrderItem/OrderItem';
import styles from './OrderList.styled';

interface IProps {
  orders: IItem[];
}

function OrderList({ orders }: IProps) {
  //   console.log(orders);
  const { List } = styles;

  return (
    <List>
      {orders.map((order) => (
        <OrderItem key={order.orderNumber} order={order} />
      ))}
    </List>
  );
}

export default OrderList;
