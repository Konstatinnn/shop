import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  currentCategory: 'food',
};

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeMenuState: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    changeCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.isMenuOpen = false;
    },
  },
});

export const { changeMenuState, changeCategory } = menu.actions;
export const menuReducer = menu.reducer;
