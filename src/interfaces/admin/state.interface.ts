import { IItem } from './item.interface';

export interface IState {
  items: IItem[];
  isLoading: boolean;
  error: string | undefined;
  //   error: string | null;
}
