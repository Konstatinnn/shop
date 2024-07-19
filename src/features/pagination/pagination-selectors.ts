import { RootState } from 'store';

export const selectCurrentPage = (state: RootState) => state.pagination.currentPage;

export const selectCardsPerPage = (state: RootState) => state.pagination.cardsPerPage;
