import { RootState } from 'store';

export const selectCategory = (state: RootState) => state.menu.currentCategory;
export const selectMenuState = (state: RootState) => state.menu.isMenuOpen;
