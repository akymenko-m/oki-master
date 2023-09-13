import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
  position: relative;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 115px;
  }
`;

const Burger = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 26px;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 30px;
  }
`;

export default { HeaderWrapper, Burger, Navigation };
