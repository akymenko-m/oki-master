import { createSlice } from '@reduxjs/toolkit';
import { addOrder, deleteOrder, fetchOrders, updateOrder } from './operations';
import { IState } from '../interfaces/admin/state.interface';

const initialState: IState = {
  items: [],
  isLoading: false,
  error: undefined,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addOrder.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.orderNumber !== action.payload.orderNumber
        );
        state.isLoading = false;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(updateOrder.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.items = state.items.map((el) =>
          el.orderNumber === action.payload.orderNumber ? action.payload : el
        );
        state.isLoading = false;
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      }),
});

const orderReducer = ordersSlice.reducer;

export default orderReducer;
