import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { wordsReducer } from './wordsSlice';
import { filterReducer } from './filterSlice';
const rootReducer = combineReducers({
  words: wordsReducer,
  filter: filterReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
