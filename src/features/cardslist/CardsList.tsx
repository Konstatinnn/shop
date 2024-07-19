import Pagination from '@features/pagination/Pagination';
import ICard from '@ui/Card';
import Card from '@ui/Card';
import Loader from '@ui/Loader';
import usePrepareCards from '@features/cardslist/usePrepareCards';

import { useAppSelector } from '../../redux-hooks';
import { selectFilterWord } from '@features/filter/filter-selectors';

import '@css/error-fetch.scss';
import '@css/CardList.scss';
import '@css/Value-empty.scss';

const CardsList = () => {
  const loading = useAppSelector((state) => state.cardsList.loading);
  const error = useAppSelector((state) => state.cardsList.error);
  const cards = usePrepareCards();
  const filterWord = useAppSelector((state) => selectFilterWord(state));

  if (error) {
    return <div className="error-fetch">{error}</div>;
  }

  if (filterWord && !cards.length) {
    return <div className="value-empty">Ничего не найдено, попробуйте выбрать другой товар!</div>;
  }

  return (
    <>
      <div className="cards-list">{loading ? <Loader /> : cards.map((card) => <Card {...card} key={card.id} />)}</div>
      {!loading && !!cards.length && <Pagination />}
    </>
  );
};

export default CardsList;
