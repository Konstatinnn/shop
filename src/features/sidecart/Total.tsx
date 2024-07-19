import { useAppSelector } from '../../redux-hooks';

export const Total = () => {
  const quantity = useAppSelector((state) =>
    state.sideCart.addedCards.reduce((count, item) => {
      return count + item.quantity;
    }, 0)
  );

  const totalAmount = useAppSelector((state) =>
    state.sideCart.addedCards.reduce((amount, item) => {
      return amount + +item.price * item.quantity;
    }, 0)
  );

  return (
    <div className="total">
      <div className="total__count">Количество товаров: {quantity}</div>
      <div className="total__amount">Сумма: {totalAmount}</div>
    </div>
  );
};
