import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUpdateOrderParams } from '../interfaces/admin/orderParams.interface';
import { IItem } from '../interfaces/admin/item.interface';

export const instance = axios.create({
  baseURL: 'http://localhost:8080/api/orders',
});

export const fetchOrders = createAsyncThunk(
  'orders/fetchAll',
  async (page: number, thunkApi) => {
    try {
      const { data } = await instance.get(`/?page=${page}`);
      return data;
    } catch (error) {
      const errorObject = error as Error;

      return thunkApi.rejectWithValue(errorObject);
    }
  }
);

export const fetchByQuery = createAsyncThunk(
  'orders/fetchByQuery',
  async (query: string, thunkApi) => {
    try {
      const { data } = await instance.get(`/search?query=${query}`);
      return data;
    } catch (error) {
      const errorObject = error as Error;

      return thunkApi.rejectWithValue(errorObject);
    }
  }
);

export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (order: IItem, thunkApi) => {
    try {
      const { data } = await instance.post(`/`, order);
      return data;
    } catch (error) {
      const errorObject = error as Error;

      return thunkApi.rejectWithValue(errorObject);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (orderId: string, thunkApi) => {
    try {
      const { data } = await instance.delete(`/${orderId}`);
      return data;
    } catch (error) {
      const errorObject = error as Error;

      return thunkApi.rejectWithValue(errorObject);
    }
  }
);

export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async (obj: IUpdateOrderParams, thunkApi) => {
    const { orderId, formattedFormData } = obj;
    try {
      const { data } = await instance.patch(`/${orderId}`, formattedFormData);
      return data;
    } catch (error) {
      const errorObject = error as Error;

      return thunkApi.rejectWithValue(errorObject);
    }
  }
);
