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
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (any-hover: hover) {
      &:hover {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      }
    }

    &:active {
      background-color: ${(props) => props.theme.colors.dark};
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.dark};
    }

    &:hover path,
    &:focus path {
      fill: ${(props) => props.theme.colors.accent};
    }
  }

  &.features {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 10px;
    right: 0;

    &:hover path,
    &:focus path {
      fill: ${(props) => props.theme.colors.accent};
    }
  }

  &.form {
    width: 31px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.dark};
    border-radius: 10px;
    transition: background-color 250ms
      ${(props) => props.theme.animations.cubicBezier};

    &:active {
      background-color: ${(props) => props.theme.colors.accent};
    }
  }

  &.order {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 10px;

    &:hover path,
    &:focus path {
      fill: ${(props) => props.theme.colors.accent};
    }
  }

  &.login {
    width: 175px;
    padding: 4px 30px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.white};
    line-height: ${(props) => props.theme.lineHeight.small};
    font-weight: 500;
    transition:
      background-color 1250ms ${(props) => props.theme.animations.cubicBezier},
      color 1250ms ${(props) => props.theme.animations.cubicBezier};

    &:hover {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    &:active {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.dark};
    }
  }

  &.open:hover path,
  &.open:focus path {
    fill: ${(props) => props.theme.colors.accent};
  }

  & path {
    transition: fill 250ms ${(props) => props.theme.animations.cubicBezier};
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

    &.form {
      width: 69px;
      height: 66px;
    }

    &.order {
      width: 30px;
      height: 30px;
      top: 12px;
      right: 24px;
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

    &.order {
      top: 18px;
      right: 18px;
    }

    &.login {
      width: 246px;
      padding: 10px 50px;
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
