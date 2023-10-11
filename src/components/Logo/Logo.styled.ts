import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../assets/logo-icon.svg';

const Link = styled.a`
  display: inline-block;
  height: 100%;
  line-height: 0;

  &.order {
    display: block;
  }
`;

const StyledLogo = styled(Logo)`
  width: 59px;
  height: 46px;

  &.header {
    fill: ${(props) => props.theme.colors.accent};
  }

  &.footer {
    fill: ${(props) => props.theme.colors.text};
  }

  &.order {
    width: 32px;
    height: 25px;
    display: block;
    position: absolute;
    top: 3px;
    left: 10px;
    fill: ${(props) => props.theme.colors.accent};
  }

  &.login {
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

    &.order {
      width: 73px;
      height: 70px;
      top: 12px;
      left: 24px;
    }

    &.login {
      width: 73px;
      height: 70px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.footer {
      width: 289px;
      height: 215px;
    }

    &.order {
      top: 28px;
      left: 41px;
    }

    &.login {
      width: 140px;
      height: 106px;
    }
  }
`;

export default { StyledLogo, Link };
