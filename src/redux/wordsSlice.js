import { createSlice } from '@reduxjs/toolkit';
import { fetchWords, deleteWord, editWord } from './operations';
const wordSlice = createSlice({
  name: 'words',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWords.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWord.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteWord.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(editWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(editWord.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editWord.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export const { reducer: wordsReducer } = wordSlice;
