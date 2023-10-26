import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUpdateOrderParams } from '../interfaces/admin/orderParams.interface';
import { IItem } from '../interfaces/admin/item.interface';

const BASE_URL = process.env.BASE_URL!;

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchOrders = createAsyncThunk(
  'orders/fetchAll',
  async (page: number, thunkApi) => {
    try {
      const { data } = await instance.get(`/orders/?page=${page}`);
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
      const { data } = await instance.get(`/orders/search?query=${query}`);
      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject);
    }
  }
);

export const getOrder = createAsyncThunk(
  'orders/getOrder',
  async (query: string, thunkApi) => {
    try {
      const { data } = await instance.get(`/orders/findOne?query=${query}`);
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
      const { data } = await instance.post(`/orders`, order);
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
      const { data } = await instance.delete(`/orders/${orderId}`);
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
      const { data } = await instance.patch(
        `/orders/${orderId}`,
        formattedFormData
      );
      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject);
    }
  }
);
