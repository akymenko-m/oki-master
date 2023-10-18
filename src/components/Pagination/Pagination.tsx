import styles from './Pagination.styled';

interface IProps {
  setCurrentPage: (arg0: number) => void;
}

function Pagination({ setCurrentPage }: IProps) {
  const { StyledPagination, Container } = styles;

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <StyledPagination onChange={onChange} total={25} />
    </Container>
  );
}

export default Pagination;
