import { IOrderStatus } from '../interfaces/orderStatus.interface';

const orderStatus: IOrderStatus[] = [
  {
    status: 'accepted',
    name: 'Прийнято',
  },
  {
    status: 'atWork',
    name: 'Ремонтується',
  },
  {
    status: 'done',
    name: 'Готово',
  },
];

export default orderStatus;
