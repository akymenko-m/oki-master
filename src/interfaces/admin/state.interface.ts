import { IItem } from './item.interface';

export interface IState {
  total: number | null;
  items: IItem[];
  archivedOrders: IItem[];
  currentOrder: IItem | null;
  isLoading: boolean;
  error: string | undefined;
}
