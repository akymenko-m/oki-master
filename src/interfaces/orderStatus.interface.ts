export interface IOrderStatus {
  status: 'accepted' | 'atWork' | 'done';
  name: 'Прийнято' | 'Ремонтується' | 'Готово';
}
