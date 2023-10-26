import { IItem } from '../../interfaces/admin/item.interface';
import styles from './OrderItem.styled';

interface IProps {
  order: IItem;
  getOrderDetails: (arg0: IItem) => void;
  toogleOrderDetails: () => void;
}

function OrderItem({ order, getOrderDetails, toogleOrderDetails }: IProps) {
  const { Item, Text } = styles;

  const handleClick = () => {
    getOrderDetails(order);
    toogleOrderDetails();
  };

  return (
    <Item onClick={handleClick}>
      <Text className="bold">{order.orderNumber}</Text>
      <Text>{order.name}</Text>
      <Text>{order.phone}</Text>
    </Item>
  );
}

export default OrderItem;
