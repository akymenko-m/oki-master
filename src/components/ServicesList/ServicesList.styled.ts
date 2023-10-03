import styled from '@emotion/styled';

const List = styled.ul`
  margin-bottom: 18px;
  display: flex;
  gap: 14px;
  justify-content: center;
  line-height: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 40px;
    gap: 18px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 502px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 26px;
    position: absolute;
    top: 48px;
    right: 0;
  }
`;

export default { List };
