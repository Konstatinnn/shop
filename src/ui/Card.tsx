import { useAppDispatch } from '../redux-hooks';
import { addCardToSideCart } from '@features/sidecart/sideCart-slice';
import { Quanity } from '@features/sidecart/Quanity';
import '@css/Card.scss';

export type CardType = 'card' | 'side-card';
export interface ICard {
  title: string;
  type: CardType;
  id: string;
  price: string;
  oldPrice: string;
  description: string;
  image: string;
  quantity?: number;
}

const Card = (props: ICard) => {
  const { type, price, oldPrice, description, image, title, quantity, id } = props;
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={`${type == 'side-card' ? type : 'card'}`}>
        <div className={`${type}__image`}>
          <img src={image} alt="" className={`${type}__img`} />
        </div>

        <div className={`${type}__price`}>
          <span className={`${type}__actual-price`}>{price} руб</span>
          <span className={`${type}__old-price`}>{oldPrice}</span>
          <div className="card__title">{title}</div>
        </div>
        <div className={`${type}__desciption`}>{description}</div>

        {type == 'side-card' ? (
          <div className="side-card__add-count">
            <Quanity id={id} quantity={quantity} price={+price} />
          </div>
        ) : (
          <button
            className="card__button"
            onClick={() => {
              dispatch(addCardToSideCart({ ...props }));
            }}
          >
            Добавить
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
