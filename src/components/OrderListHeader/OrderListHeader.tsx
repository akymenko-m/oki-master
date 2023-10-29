import OrderItemStyles from '../OrderItem/OrderItem.styled';

interface IProps {
  className: string;
}

function OrderListHeader({ className }: IProps) {
  const { Item, Text } = OrderItemStyles;

  return (
    <Item className={className}>
      <Text>№ замовлення</Text>
      <Text>Ім’я</Text>
      <Text>Телефон</Text>
      <Text>Дата</Text>
      <Text>Ціна,₴</Text>
      <Text>Вид ремонту</Text>
      <Text>Статус</Text>
      <Text>Комплектація</Text>
    </Item>
  );
}

export default OrderListHeader;
