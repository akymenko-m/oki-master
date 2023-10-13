import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUpdateOrderParams } from '../interfaces/admin/orderParams.interface';

export const instance = axios.create({
  baseURL: 'http://localhost:8080/api/orders',
});

export const fetchOrders = createAsyncThunk(
  'orders/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/');
      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject.message);
    }
  }
);

export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (order, thunkApi) => {
    try {
      const { data } = await instance.post(`/`, order);

      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject.message);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (orderId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/${orderId}`);

      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject.message);
    }
  }
);

export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async (obj: IUpdateOrderParams, thunkApi) => {
    const { orderId, formData } = obj;
    try {
      const { data } = await instance.patch(`/${orderId}`, formData);

      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject.message);
    }
  }
);
