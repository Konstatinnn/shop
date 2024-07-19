import { createSlice } from '@reduxjs/toolkit';
import { ICard } from '@ui/Card';

interface SideCartType {
  isCartOpen: boolean;
  addedCards: ICard[];
  IsSideCartEmpty: boolean;
}

const initialState: SideCartType = {
  isCartOpen: false,
  addedCards: [],
  IsSideCartEmpty: true,
};

const sideCart = createSlice({
  name: 'sideCartState',
  initialState,
  reducers: {
    changeCartState: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addCardToSideCart: {
      reducer: (state, action) => {
        state.addedCards.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity++;
          }
          return item;
        });

        const isElementInArray = state.addedCards.find((item) => item.id === action.payload.id);
        if (!isElementInArray) state.addedCards.push(action.payload);
      },
      prepare: (card: ICard) => {
        return {
          payload: {
            ...card,
            quantity: 1,
            type: 'side-card',
          },
          meta: undefined,
          error: undefined,
        };
      },
    },
    addCountToAddedCard: (state, action) => {
      state.addedCards.forEach((item) => {
        if (item.id == action.payload) item.quantity++;
      });
    },
    removeCountOfAddedCard: (state, action) => {
      state.addedCards.forEach((item) => {
        if (item.id == action.payload) {
          if (item.quantity < 2) {
            state.addedCards = state.addedCards.filter((item) => item.id !== action.payload);
          } else item.quantity--;
        }
      });
    },
    removeCardFromSideCart: (state, action) => {
      state.addedCards = state.addedCards.filter((item) => item.id !== action.payload);
    },
  },
});

export const sideCartReducer = sideCart.reducer;
export const {
  changeCartState,
  addCardToSideCart,
  addCountToAddedCard,
  removeCountOfAddedCard,
  removeCardFromSideCart,
} = sideCart.actions;
