import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 48px;
  }
`;

export default { List };
