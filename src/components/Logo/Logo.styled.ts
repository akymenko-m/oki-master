import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../assets/logo-icon.svg';

const Link = styled.a`
  display: inline-block;
  height: auto;
  line-height: 0;

  &.order-status {
    position: absolute;
    top: 3px;
    left: 10px;
  }

  &.admin-page {
    position: absolute;
    top: 0;
    left: 0;
  }

  &.admin {
    position: absolute;
    top: 0;
    left: 15px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.order-status {
      top: 12px;
      left: 24px;
    }

    &.admin.order {
      left: 41px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.order-status {
      top: 28px;
      left: 41px;
    }

    &.order {
      top: 20px;
      left: 41px;
    }
  }
`;

const StyledLogo = styled(Logo)`
  width: 59px;
  height: 46px;
  transition: fill 250ms ${(props) => props.theme.animations.cubicBezier};

  &.header {
    fill: ${(props) => props.theme.colors.accent};

    &:hover,
    &:focus {
      fill: ${(props) => props.theme.colors.dark};
    }
  }

  &.footer {
    fill: ${(props) => props.theme.colors.text};

    &:hover,
    &:focus {
      fill: ${(props) => props.theme.colors.dark};
    }
  }

  &.order-status {
    width: 32px;
    height: 25px;
    fill: ${(props) => props.theme.colors.accent};
  }

  &.login {
    fill: ${(props) => props.theme.colors.accent};
  }

  &.admin,
  &.admin-page {
    width: 32px;
    height: 25px;
    fill: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.header {
      width: 73px;
      height: 70px;
    }

    &.footer {
      width: 125px;
      height: 94px;
    }

    &.order-status {
      width: 73px;
      height: 70px;
    }

    &.login {
      width: 73px;
      height: 70px;
    }

    &.admin {
      width: 59px;
      height: 46px;
    }

    &.admin-page {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.footer {
      width: 289px;
      height: 215px;
    }

    &.order {
      width: 73px;
      height: 70px;
    }

    &.login {
      width: 140px;
      height: 106px;
    }
  }
`;

export default { StyledLogo, Link };
