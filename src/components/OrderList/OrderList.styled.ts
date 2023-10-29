import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 0;
  }
`;

export default {
  List,
};
