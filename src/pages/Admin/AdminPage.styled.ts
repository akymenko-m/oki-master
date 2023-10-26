import styled from '@emotion/styled';
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg';
import { ReactComponent as ArchiveIcon } from '../../assets/archive-icon.svg';
import { ReactComponent as BackIcon } from '../../assets/back-icon.svg';

const MainBlock = styled.div`
  padding: 24px 0;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const HeaderBlock = styled.div`
  margin-bottom: 9px;
  padding-bottom: 9px;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.mobile.small};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
  line-height: ${(props) => props.theme.lineHeight.xs};
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const StyledCloseIcon = styled(PlusIcon)`
  width: 38px;
  height: 38px;
  fill: ${(props) => props.theme.colors.dark};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const StyledArchiveIcon = styled(ArchiveIcon)`
  width: 25px;
  height: 25px;
  stroke: ${(props) => props.theme.colors.accent};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const StyledBackIcon = styled(BackIcon)`
  width: 25px;
  height: 25px;
  stroke: ${(props) => props.theme.colors.accent};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.white};
  /* margin: 0 auto; */
  /* margin-top: 50px; */
  /* padding: 20px 11px; */
  /* display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center; */

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

export default {
  MainBlock,
  HeaderBlock,
  Title,
  StyledCloseIcon,
  Modal,
  StyledArchiveIcon,
  StyledBackIcon,
};
