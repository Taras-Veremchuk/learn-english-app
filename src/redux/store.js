import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { wordsReducer } from './wordsSlice';
const rootReducer = combineReducers({
  words: wordsReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
