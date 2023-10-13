import { RootState } from './store';

export const getOrders = (state: RootState) => state.orders.items;
export const getIsloading = (state: RootState) => state.orders.isLoading;
