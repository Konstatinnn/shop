import CardsList from '@features/cardslist/CardsList';
import Menu from '@features/menu/Menu';
import SideCart from '@features/sidecart/SideCart';

import { useAppDispatch, useAppSelector } from '../redux-hooks';
import { useEffect, useRef } from 'react';
import { fetchCards } from '@features/cardslist/getCardsDataAsync';
import { CSSTransition } from 'react-transition-group';
import { selectSideCartState } from '@features/sidecart/sideCart-selectors';

import '@css/Main.scss';

const Main = () => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.menu.isMenuOpen);
  const sideCartState = useAppSelector((state) => selectSideCartState(state));
  const menuRef = useRef(null);
  const sideCartRef = useRef(null);

  useEffect(() => {}, [menuState, sideCartState]);
  useEffect(() => {
    dispatch(fetchCards('food'));
  }, []);

  return (
    <main className="main">
      <div className="main__container">
        <CSSTransition in={menuState} timeout={300} classNames="menu" nodeRef={menuRef} unmountOnExit>
          <Menu ref={menuRef} />
        </CSSTransition>

        <CSSTransition in={sideCartState} timeout={300} classNames="side-cart" nodeRef={sideCartRef} unmountOnExit>
          <SideCart />
        </CSSTransition>

        <CardsList />
      </div>
    </main>
  );
};

export default Main;
