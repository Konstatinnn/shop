import '@css/SearchBar.scss';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { changeFilterWord } from '@features/filter/filter-slice';
import { selectFilterWord } from '@features/filter/filter-selectors';
import { useEffect, useState } from 'react';

interface SearchBarProps {
  parrentClass: string;
}

const SearchBar = ({ parrentClass }: SearchBarProps) => {
  const dispatch = useAppDispatch();
  const filterWord = useAppSelector((state) => selectFilterWord(state));
  const [inputValue, setInputValue] = useState(filterWord);

  let timerId: NodeJS.Timeout;

  const searchCards = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    const debaunce = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        dispatch(changeFilterWord(event.target.value));
      }, 700);
    };
    debaunce();
  };

  useEffect(() => {
    setInputValue(filterWord);
  }, [filterWord]);

  return (
    <input
      value={inputValue}
      onChange={searchCards}
      placeholder="Найти на shop.com"
      className={`search-bar ${parrentClass}`}
    ></input>
  );
};

export default SearchBar;
