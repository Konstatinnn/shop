import { createSlice } from '@reduxjs/toolkit';
import { ICard } from '@ui/Card';
import { fetchCards } from './getCardsDataAsync';

interface CardsSliceType {
  cards: ICard[];
  loading: boolean;
  error: string | null;
}

const initialState: CardsSliceType = {
  cards: [],
  loading: false,
  error: null,
};

const cardsList = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    sortedCards: (state, action) => {
      state.cards = state.cards.filter((card) => card.title.toLowerCase().includes(action.payload));
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      console.log(action);
      state.error = 'Не можем получить данные. Попробуйте еще раз!';
    });
  },
});

export const { sortedCards, setLoading } = cardsList.actions;

export default cardsList.reducer;
