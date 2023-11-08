import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledButton = styled.button`
  background-color: transparent;

  &.none {
    display: none;
  }

  &.general {
    width: calc(100% - 2px);
    display: block;
    margin: 0 auto;
    height: 32px;
    padding: 1px 42px;
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

    @media (hover: hover) {
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

  &.order-status {
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
      background-color 250ms ${(props) => props.theme.animations.cubicBezier},
      color 250ms ${(props) => props.theme.animations.cubicBezier};

    &:hover {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    &:active {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.dark};
    }
  }

  &.add {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 38px;
    right: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors['light-20']};
    transition: background-color 250ms
      ${(props) => props.theme.animations.cubicBezier};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
      outline: none;
    }

    &:active {
      background-color: ${(props) => props.theme.colors.light};
    }
  }

  &.order {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 15px;
  }

  &.order-form {
    padding: 2px 50px;
    max-height: 32px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.white};
    line-height: ${(props) => props.theme.lineHeight.small};
    font-weight: 500;
    transition:
      background-color 250ms ${(props) => props.theme.animations.cubicBezier},
      color 250ms ${(props) => props.theme.animations.cubicBezier};

    &.update {
      width: 100%;
    }

    &.page {
      margin-top: 20px;
    }

    &:hover,
    &:focus {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    &:active {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.dark};
    }
  }

  &.archive {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;

    & svg {
      transition: stroke 250ms ${(props) => props.theme.animations.cubicBezier};
    }

    &:hover svg,
    &:focus svg {
      stroke: ${(props) => props.theme.colors.dark};
    }
  }

  &.open:hover path,
  &.open:focus path,
  &.order:hover path,
  &.order:focus path {
    fill: ${(props) => props.theme.colors.accent};
  }

  & path {
    transition: fill 250ms ${(props) => props.theme.animations.cubicBezier};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.general {
      height: 53px;
      padding: 12px 60px;
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

    &.order-status {
      width: 30px;
      height: 30px;
      top: 12px;
      right: 24px;
    }

    &.order {
      width: 24px;
      height: 24px;
      top: 0;
      right: 24px;
    }

    &.order-form {
      padding: 4px 50px;
      max-height: 35px;
    }

    &.order-form.update.page {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      max-width: 50%;
    }

    &.add {
      display: none;
    }

    &.with-icons {
      min-width: max-content;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: ${(props) => props.theme.fontSizes.desktop.xs};
      line-height: 30px;
      transition: color 250ms ${(props) => props.theme.animations.cubicBezier};

      &:hover,
      &:focus {
        color: ${(props) => props.theme.colors.accent};
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.general {
      width: 312px;
      padding: 2px 13px;
      font-size: ${(props) => props.theme.fontSizes.desktop.medium};
      line-height: ${(props) => props.theme.lineHeight.xl};
    }

    &.features {
      width: 32px;
      height: 32px;
      top: 39px;
      right: 16px;
    }

    &.order-status {
      top: 18px;
      right: 18px;
    }

    &.order {
      width: 30px;
      height: 30px;
      top: 28px;
      right: 18px;
    }

    &.login {
      width: 246px;
      padding: 10px 50px;
    }

    &.order-form {
      margin: 0 auto;
      margin-right: 0;
      padding: 11px 80px;
      max-height: 53px;
      width: calc(50% - 10px);
      font-size: ${(props) => props.theme.fontSizes.desktop.medium};
      font-weight: 600;
      line-height: 30px;

      &.update {
        margin: 0;
      }

      &.with-icons {
        gap: 8px;
      }
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
