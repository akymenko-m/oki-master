import { createAsyncThunk } from '@reduxjs/toolkit';
import { IItem } from '../interfaces/admin/item.interface';
import { instance } from './ordersOperations';

export const fetchArchivedOrders = createAsyncThunk(
  'archive/fetchArchivedOrders',
  async (page: number, thunkApi) => {
    try {
      const { data } = await instance.get(`/archive/?page=${page}`);
      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject);
    }
  }
);

export const fetchArchiveByQuery = createAsyncThunk(
  'archive/fetchByQuery',
  async (query: string, thunkApi) => {
    try {
      const { data } = await instance.get(`/archive/search?query=${query}`);
      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject);
    }
  }
);

export const addToArchive = createAsyncThunk(
  'archive/addToArchive',
  async (order: IItem, thunkApi) => {
    try {
      const { data } = await instance.post(`/archive`, order);
      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject);
    }
  }
);

export const deleteArchivedOrder = createAsyncThunk(
  'archive/deleteOrder',
  async (orderId: string, thunkApi) => {
    try {
      const { data } = await instance.delete(`/archive/${orderId}`);
      return data;
    } catch (error) {
      const errorObject = error as Error;
      return thunkApi.rejectWithValue(errorObject);
    }
  }
);
