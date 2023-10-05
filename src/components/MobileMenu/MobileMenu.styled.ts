import styled from '@emotion/styled';

const Menu = styled.div`
  width: ${(props) => (props.className?.includes('open') ? '152px' : 0)};
  padding: 50px 15px 6px 0;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  opacity: ${(props) => (props.className?.includes('open') ? 1 : 0)};
  background-color: ${(props) => props.theme.colors['light-20']};
  border-radius: 10px 0px 0px 10px;
  transition:
    width 500ms ease-in-out,
    opacity 500ms ease-in-out;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`;

export default { Menu };
