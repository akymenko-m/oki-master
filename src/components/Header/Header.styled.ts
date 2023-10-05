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

  &:hover path {
    fill: ${(props) => props.theme.colors.accent};
  }

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 1;
  overflow-y: scroll;
`;

export default { HeaderWrapper, Burger, Navigation, Overlay };
