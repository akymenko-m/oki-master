export interface IItem {
  _id: string;
  orderNumber: string;
  date: Date;
  name: string;
  phone: string;
  repairType: string;
  price: number;
  completeSet?: string;
  comment?: string;
}
