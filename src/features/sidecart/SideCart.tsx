import ICard from '@ui/Card';

import { forwardRef } from 'react';
import { useAppSelector } from '../../redux-hooks';
import { Total } from '@features/sidecart/Total';

import '@css/SideCart.scss';

const SideCart = forwardRef<HTMLDivElement>((_, ref) => {
  const sideCards = useAppSelector((state) => state.sideCart.addedCards);

  return (
    <div ref={ref} className="side-cart">
      {sideCards.length !== 0 ? (
        sideCards.map((card) => <ICard {...card} key={card.id} />)
      ) : (
        <div className="side-cart__empty">
          Корзина Пуста. Нажмите кнопку добавить, чтобы сохранить или оформить товары!
        </div>
      )}
      {sideCards.length !== 0 && <Total />}
    </div>
  );
});

export default SideCart;
