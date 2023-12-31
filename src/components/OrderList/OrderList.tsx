import { IItem } from '../../interfaces/admin/item.interface';
import OrderItem from '../OrderItem/OrderItem';
import OrderListHeader from '../OrderListHeader/OrderListHeader';
import styles from './OrderList.styled';

interface IProps {
  orders: IItem[];
  getOrderDetails: (arg0: IItem) => void;
  toogleOrderDetails: () => void;
}

function OrderList({ orders, getOrderDetails, toogleOrderDetails }: IProps) {
  const { List } = styles;

  return (
    <List>
      <OrderListHeader className="header bold" />
      {orders.map((order) => (
        <OrderItem
          key={order.orderNumber}
          order={order}
          getOrderDetails={getOrderDetails}
          toogleOrderDetails={toogleOrderDetails}
        />
      ))}
    </List>
  );
}

export default OrderList;
