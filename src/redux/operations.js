import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648423d5ee799e3216265036.mockapi.io';

export const fetchWords = createAsyncThunk(
  'words/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/words');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/words/${id}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editWord = createAsyncThunk(
  'words/editWord',
  async (word, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/words/${word.id}`, word);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
