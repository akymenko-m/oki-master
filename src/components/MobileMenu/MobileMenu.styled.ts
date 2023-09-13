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
    width 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
`;

const CloseButton = styled.button`
  display: ${(props) => (props.className?.includes('open') ? 'block' : 'none')};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 12px;
  right: 15px;
  background-color: transparent;
  & path {
    transition: fill 250ms ${(props) => props.theme.animations.cubicBezier};
  }

  &:hover path,
  &:focus path {
    fill: ${(props) => props.theme.colors.accent};
  }
`;

export default { Menu, CloseButton };
