import categories from '@assets/header/category.svg';
import shopcart from '@assets/header/basket-shopping.svg';
import SearchBar from '@features/searchbar/SearchBar';
import logo from '@assets/header/logo.svg';

import NavItem from '@ui/NavItem';

import { useAppDispatch } from '../redux-hooks';
import { changeMenuState } from '@features/menu/menu-slice';
import { changeCartState } from '@features/sidecart/sideCart-slice';

import '@css/Header.scss';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="header__container">
        <a href="" className="header__logo logo">
          <img src={logo} alt="" className="logo__icon" />
          <span className="logo__name">Shop.com</span>
        </a>

        <NavItem
          description="Категории"
          parentBlockClass="header__categories"
          image={categories}
          onClick={() => {
            dispatch(changeMenuState());
          }}
        />

        <SearchBar parrentClass={'header__searchbar'} />

        <NavItem
          description="Корзина"
          parentBlockClass="header__shopcart"
          image={shopcart}
          onClick={() => dispatch(changeCartState())}
        />
      </div>
    </header>
  );
};

export default Header;
