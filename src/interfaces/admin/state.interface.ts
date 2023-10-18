import { IItem } from './item.interface';

export interface IState {
  items: IItem[];
  currentOrder: IItem | null;
  isLoading: boolean;
  error: string | undefined;
}
