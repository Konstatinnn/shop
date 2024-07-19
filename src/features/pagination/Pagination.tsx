// import React from 'react';
import { usePreparePages } from '@features/pagination/usePreparePages';
import { useAppDispatch } from '../../redux-hooks';
import { changeCurrentPage } from '@features/pagination/pagination-slice';

import '@css/Pagination.scss';

const Pagination = () => {
  const pages = usePreparePages();
  const dispatch = useAppDispatch();
  const paginationHandler = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();

    const choosenPage = event.target as HTMLSpanElement;
    if (choosenPage.className == 'pagination') return;
    dispatch(changeCurrentPage(+choosenPage.textContent));
  };

  return (
    <span className="pagination" onClick={paginationHandler}>
      {pages}
    </span>
  );
};

export default Pagination;
