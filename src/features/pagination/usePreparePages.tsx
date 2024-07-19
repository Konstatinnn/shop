import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux-hooks';
import { selectFilteredCards } from '@features/cardslist/cardsList-selectors';

export const usePreparePages = () => {
  const cardsLength = useAppSelector((state) => selectFilteredCards(state));
  const [pages, setPages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const paginationPages: JSX.Element[] = [];

    for (let index = 0; index < Math.ceil(cardsLength.length / 10); index++) {
      paginationPages.push(
        <a href="" className="pagination__link" key={index}>
          <span className="pagination__page">{index + 1}</span>
        </a>
      );
    }

    setPages(paginationPages);
  }, [cardsLength]);

  return pages;
};
