import { useAppDispatch } from '../../redux-hooks';
import { addCountToAddedCard, removeCountOfAddedCard, removeCardFromSideCart } from '@features/sidecart/sideCart-slice';

interface QuanityProps {
  quantity: number;
  price: number;
  id: string;
}

export const Quanity = ({ quantity, price, id }: QuanityProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="quantity">
        <div className="quantity__total">
          {quantity + ' x '}
          {quantity * +price}
        </div>
        <div onClick={() => dispatch(addCountToAddedCard(id))} className="quantity__add">
          +
        </div>
        <div className="quantity__count">{quantity}</div>
        <div onClick={() => dispatch(removeCountOfAddedCard(id))} className="quantity__remove">
          -
        </div>
      </div>
      <a href="#!" onClick={() => dispatch(removeCardFromSideCart(id))} className="side-card__remove">
        x
      </a>
    </>
  );
};
