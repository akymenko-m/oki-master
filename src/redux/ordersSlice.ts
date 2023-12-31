import { createSlice } from '@reduxjs/toolkit';
import {
  addOrder,
  deleteOrder,
  fetchByQuery,
  fetchOrders,
  getOrder,
  updateOrder,
} from './ordersOperations';
import { IState } from '../interfaces/admin/state.interface';
import {
  addToArchive,
  deleteArchivedOrder,
  fetchArchiveByQuery,
  fetchArchivedOrders,
} from './archivedOrdersOperations';

const initialState: IState = {
  total: null,
  items: [],
  archivedOrders: [],
  currentOrder: null,
  isLoading: false,
  error: '',
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setCurrentOrder(state, action) {
      state.currentOrder = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.orders;
        state.total = action.payload.total;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchByQuery.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.total = null;
      })
      .addCase(fetchByQuery.rejected, (state, action) => {
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
      })
      .addCase(fetchArchivedOrders.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArchivedOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.archivedOrders = action.payload.orders;
        state.total = action.payload.total;
      })
      .addCase(fetchArchivedOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addToArchive.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(addToArchive.fulfilled, (state, action) => {
        state.archivedOrders = [...state.items, action.payload];
        state.isLoading = false;
      })
      .addCase(addToArchive.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchArchiveByQuery.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArchiveByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.archivedOrders = action.payload;
        state.total = null;
      })
      .addCase(fetchArchiveByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteArchivedOrder.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(deleteArchivedOrder.fulfilled, (state, action) => {
        state.archivedOrders = state.items.filter(
          (item) => item.orderNumber !== action.payload.orderNumber
        );
        state.isLoading = false;
      })
      .addCase(deleteArchivedOrder.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getOrder.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      }),
});

export const { setCurrentOrder } = ordersSlice.actions;

const orderReducer = ordersSlice.reducer;

export default orderReducer;
