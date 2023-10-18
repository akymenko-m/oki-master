import { useAppDispatch } from '../../hooks/hooks';
import { fetchByQuery } from '../../redux/operations';
import styles from './Filter.styled';

function Filter() {
  const { FilterInput, StyledSearchIcon, FilterBlock } = styles;

  const dispatch = useAppDispatch();

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    dispatch(fetchByQuery(query));
  };

  return (
    <FilterBlock>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Пошук"
        onChange={inputChange}
      />
      <StyledSearchIcon />
    </FilterBlock>
  );
}

export default Filter;
