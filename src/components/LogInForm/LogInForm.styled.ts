import styled from '@emotion/styled';
import { ReactComponent as CheckIcon } from '../../assets/check-icon.svg';

const Form = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 18px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 20px;
  }
`;

const Warning = styled.span`
  opacity: 0;
  transition: opacity 250ms ${(props) => props.theme.animations.cubicBezier};
  font-size: ${(props) => props.theme.fontSizes.mobile.xs};
  color: ${(props) => props.theme.colors.red};

  &.error {
    opacity: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.xs};
  }
`;

const Input = styled.input`
  height: 60px;
  padding: 22px 20px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.mobile.small};
  font-weight: 400;
  position: relative;

  &::placeholder {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.desktop.xs};
    line-height: ${(props) => props.theme.lineHeight.xs};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.medium};
    line-height: ${(props) => props.theme.lineHeight.large};
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 24px;
  position: absolute;
  top: 18px;
  right: 20px;
  fill: ${(props) => props.theme.colors.secondary};
  transition: fill 250ms ${(props) => props.theme.animations.cubicBezier};

  &.focus {
    fill: ${(props) => props.theme.colors.accent};
  }
`;

export default { Form, Input, StyledCheckIcon, Warning };
