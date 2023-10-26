import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

export default {
  List,
};
