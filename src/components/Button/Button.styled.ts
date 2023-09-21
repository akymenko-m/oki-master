import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledButton = styled.button`
  background-color: transparent;

  &.none {
    display: none;
  }

  &.general {
    width: 100%;
    height: 32px;
    padding: 1px 62px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.accent};
    line-height: ${(props) => props.theme.lineHeight.small};
    font-size: ${(props) => props.theme.fontSizes.mobile.small};
    color: ${(props) => props.theme.colors.accent};
    font-weight: 500;
  }

  &.features {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 10px;
    right: 0;
  }

  & path {
    transition: fill 250ms ${(props) => props.theme.animations.cubicBezier};
  }

  &:hover path,
  &:focus path {
    fill: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.general {
      height: 53px;
      padding: 12px 65px;
      line-height: ${(props) => props.theme.lineHeight.small};
      font-size: ${(props) => props.theme.fontSizes.desktop.small};
      border: 2px solid ${(props) => props.theme.colors.accent};
    }

    &.features {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.general {
      width: 312px;
      padding: 2px 16px;
      font-size: ${(props) => props.theme.fontSizes.desktop.medium};
      line-height: ${(props) => props.theme.lineHeight.xl};
    }

    &.features {
      width: 32px;
      height: 32px;
      top: 39px;
      right: 16px;
    }
  }
`;

const features = css`
  width: 20px;
  height: 20px;
`;

const mobileMenu = css`
  position: absolute;
  top: 12px;
  right: 15px;
  width: 20px;
  height: 20px;
`;

export default { StyledButton, features, mobileMenu };
