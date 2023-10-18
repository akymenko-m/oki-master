export interface IOrder {
  _id?: string;
  orderNumber: string;
  date: Date;
  name: string;
  phone: string;
  repairType: string;
  price: number | undefined;
  completeSet?: string;
  comment?: string;
  status: 'accepted' | 'atWork' | 'done' | undefined;
}
