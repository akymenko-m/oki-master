import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 28px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 31px;
    row-gap: 48px;
  }
`;

export default { List };
