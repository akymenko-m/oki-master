import orderStatus from '../../data/orderStatus';
import getLocalizedStatus from '../../helpers/getLocalizedStatus';
import { IItem } from '../../interfaces/admin/item.interface';
import styles from './OrderItem.styled';

interface IProps {
  order: IItem;
  getOrderDetails: (arg0: IItem) => void;
  toogleOrderDetails: () => void;
}

function OrderItem({ order, getOrderDetails, toogleOrderDetails }: IProps) {
  const { Item, Text, Title } = styles;

  const formatDate = (arg: string) => {
    const date = new Date(arg);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleClick = () => {
    getOrderDetails(order);
    toogleOrderDetails();
  };

  return (
    <Item onClick={handleClick}>
      <Text className="bold">{order.orderNumber}</Text>
      <Text>
        <Title>Ім’я: </Title>
        <span>{order.name}</span>
      </Text>
      <Text>
        <Title>Телефон: </Title>
        <span>{order.phone}</span>
      </Text>
      <Text>{formatDate(order.date)}</Text>
      <Text>{order.price} грн.</Text>
      <Text>{order.repairType}</Text>
      <Text>{getLocalizedStatus(order.status!, orderStatus)}</Text>
      <Text>{order.completeSet}</Text>
    </Item>
  );
}

export default OrderItem;
