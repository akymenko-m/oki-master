import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const getOrders = (state: RootState) => state.orders.items;
export const sortedGetOrders = createSelector(getOrders, (items) =>
  [...items].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
);

export const getIsloading = (state: RootState) => state.orders.isLoading;
export const getIsError = (state: RootState) => state.orders.error;
export const getCurrentOrder = (state: RootState) => state.orders.currentOrder;
