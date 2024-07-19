import { useAppSelector } from '../../redux-hooks';
import { selectPaginatedCards } from '@features/cardslist/cardsList-selectors';

const usePrepareCards = () => {
  const сards = useAppSelector((state) => selectPaginatedCards(state));

  return сards;
};

export default usePrepareCards;
