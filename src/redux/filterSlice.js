const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});
export const { reducer: filterReducer } = filterSlice;
export const { setFilter } = filterSlice.actions;
