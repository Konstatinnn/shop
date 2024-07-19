import { createSlice } from '@reduxjs/toolkit';
import { changeCategory } from '@features/menu/menu-slice';

const initialState = {
  filerWord: '',
};

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterWord: (state, action) => {
      state.filerWord = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeCategory, (state) => {
      state.filerWord = '';
    });
  },
});

export const { changeFilterWord } = filter.actions;
export default filter.reducer;
