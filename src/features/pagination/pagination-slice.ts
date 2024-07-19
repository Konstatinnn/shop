import { createSlice } from '@reduxjs/toolkit';
import { changeCategory } from '@features/menu/menu-slice';

const initialState = {
  currentPage: 1,
  cardsPerPage: 10,
};

const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeCategory, (state) => {
      state.currentPage = 1;
    });
  },
});

export default pagination.reducer;
export const { changeCurrentPage } = pagination.actions;
