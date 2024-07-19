import { RootState } from 'store';

export const selectSideCartState = (state: RootState) => state.sideCart.isCartOpen;
