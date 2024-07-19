import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { selectCardsPerPage, selectCurrentPage } from '@features/pagination/pagination-selectors';
import { selectFilterWord } from '@features/filter/filter-selectors';

export const selectCardsList = (state: RootState) => state.cardsList.cards;

export const selectCardsListLength = (state: RootState) => state.cardsList.cards.length;

export const selectFilteredCards = createSelector([selectCardsList, selectFilterWord], (allCards, filter) => {
  if (!filter.trim()) return allCards;
  console.log(filter);

  return allCards.filter((card) => card.title.toLowerCase().includes(filter.toLowerCase()));
});

export const selectPaginatedCards = createSelector(
  [selectFilteredCards, selectCardsPerPage, selectCurrentPage],
  (allCards, cardsPerPage, currentPage) => {
    return allCards.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
  }
);
