import styles from './Filter.styled';

interface IProps extends React.ComponentPropsWithoutRef<'div'> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Filter({ onChange, className }: IProps) {
  const { FilterInput, StyledSearchIcon, FilterBlock } = styles;

  return (
    <FilterBlock className={className}>
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
