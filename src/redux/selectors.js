import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words.items;

export const selectFilterValue = state => state.filter;

export const selectFilterdWords = createSelector(
  [selectFilterValue, selectWords],
  (filter, words) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return words.filter(
      word =>
        word.uaWord.toLowerCase().includes(normalizedFilter) ||
        word.enWord.toLowerCase().includes(normalizedFilter)
    );
  }
);
