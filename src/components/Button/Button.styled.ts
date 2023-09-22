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

    transition:
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    &:active {
      background-color: ${(props) => props.theme.colors.dark};
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.dark};
    }
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

const mobileMenu = css`
  position: absolute;
  top: 12px;
  right: 15px;
  width: 20px;
  height: 20px;
`;

export default { StyledButton, mobileMenu };
