import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../assets/logo-icon.svg';

const Link = styled.a`
  display: inline-block;
  height: 100%;
  line-height: 0;
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

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.header {
      width: 73px;
      height: 70px;
    }

    &.footer {
      width: 125px;
      height: 94px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.footer {
      width: 289px;
      height: 215px;
    }
  }
`;

export default { StyledLogo, Link };
