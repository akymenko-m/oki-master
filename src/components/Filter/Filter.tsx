import styles from './Filter.styled';

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Filter({ onChange }: IProps) {
  const { FilterInput, StyledSearchIcon, FilterBlock } = styles;

  return (
    <FilterBlock>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Пошук"
        onChange={onChange}
      />
      <StyledSearchIcon />
    </FilterBlock>
  );
}

export default Filter;
