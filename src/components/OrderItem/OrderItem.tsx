import { IItem } from '../../interfaces/admin/item.interface';
import styles from './OrderItem.styled';

interface IProps {
  order: IItem;
}

function OrderItem({ order }: IProps) {
  const { Item, Text } = styles;

  return (
    <Item>
      <Text className="bold">{order.orderNumber}</Text>
      <Text>{order.name}</Text>
      <Text>{order.phone}</Text>
    </Item>
  );
}

export default OrderItem;
