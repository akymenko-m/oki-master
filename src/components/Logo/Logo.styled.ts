import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const StyledLogo = styled(Logo)`
  width: 59px;
  height: 46px;
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 73px;
    height: 70px;
  }
`;

export default { StyledLogo };
