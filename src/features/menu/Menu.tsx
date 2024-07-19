import foodIcom from '@assets/menu/foodIcon.svg';
import clothes from '@assets/menu/clothes.svg';
import electronicIcon from '@assets/menu/electronics.svg';

import { forwardRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { fetchCards } from '@features/cardslist/getCardsDataAsync';
import { selectCategory } from './menu-selectors';
import { changeCategory, changeMenuState } from './menu-slice';

import '@css/Menu.scss';

const Menu = forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector((state) => selectCategory(state));

  const chooseCategoryHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    const category = event.target as HTMLElement;

    if (category.className !== 'menu__link') return;

    if (category.dataset.category === currentCategory) {
      dispatch(changeMenuState());
      return;
    }

    dispatch(changeCategory(category.dataset.category));
    dispatch(fetchCards(category.dataset.category));
  };

  return (
    <div ref={ref} className={`menu`} onClick={chooseCategoryHandler}>
      <a href="#" className="menu__link" data-category="food">
        <img src={foodIcom} alt="" className="menu__icon" />
        Еда
      </a>

      <a href="#" className="menu__link" data-category="clothing">
        <img src={clothes} alt="" className="menu__icon" />
        Одежда
      </a>

      <a href="#" className="menu__link" data-category="electronics">
        <img src={electronicIcon} alt="" className="menu__icon" />
        Электроника
      </a>
    </div>
  );
});

export default Menu;
