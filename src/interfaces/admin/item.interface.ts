export interface IItem {
  _id?: string;
  orderNumber: string;
  date: string;
  name: string;
  phone: string;
  repairType: string;
  price: number | undefined;
  completeSet?: string;
  comment?: string;
  status: 'accepted' | 'atWork' | 'done' | undefined;
  createdAt?: string;
  updatedAt?: string;
}
