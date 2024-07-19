import cardsListReducer from '@features/cardslist/cardsList-slice';
import paginationReducer from '@features/pagination/pagination-slice';
import filterReducer from '@features/filter/filter-slice';

import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from '@features/menu/menu-slice';
import { sideCartReducer } from '@features/sidecart/sideCart-slice';

export const store = configureStore({
  reducer: {
    cardsList: cardsListReducer,
    menu: menuReducer,
    sideCart: sideCartReducer,
    pagination: paginationReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
