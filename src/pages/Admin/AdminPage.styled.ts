import styled from '@emotion/styled';
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg';
import { ReactComponent as ArchiveIcon } from '../../assets/archive-icon.svg';
import { ReactComponent as BackIcon } from '../../assets/back-icon.svg';
import { ReactComponent as OrdersIcon } from '../../assets/orders-icon.svg';

const Overlay = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.5);
    overflow-y: scroll;
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: auto;
    max-width: 600px;
    position: relative;
    top: 20px;
    transform: translate(-50%, 0);
    border: 2px solid ${(props) => props.theme.colors.dark};
    border-radius: 24px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: 886px;
  }
`;

const MainBlock = styled.div`
  padding: 24px 0;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 40px 0;

    &.order {
      padding: 24px 0;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 48px 0;

    &.order {
      padding: 0;
    }
  }
`;

const HeaderBlock = styled.div`
  margin-bottom: 9px;
  padding-bottom: 9px;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.order {
      margin-bottom: 0;
      padding-bottom: 36px;
      border-bottom: 2px solid ${(props) => props.theme.colors.dark};
    }

    &.admin-page {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 40px 43px;
  }
`;

const HeaderAdmin = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 10px 0;
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 2px solid ${(props) => props.theme.colors.dark};
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.mobile.small};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
  line-height: ${(props) => props.theme.lineHeight.xs};
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    min-width: max-content;
    font-size: ${(props) => props.theme.fontSizes.desktop.xs};
    line-height: ${(props) => props.theme.lineHeight.small};
    line-height: 30px;

    &.order {
      font-size: ${(props) => props.theme.fontSizes.desktop.small};
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.order {
      font-size: ${(props) => props.theme.fontSizes.desktop.medium};
    }
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  width: 38px;
  height: 38px;
  fill: ${(props) => props.theme.colors.dark};
  transition: fill 250ms ${(props) => props.theme.animations.cubicBezier};

  &.header {
    width: 25px;
    height: 25px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.header {
      width: 30px;
      height: 30px;
    }
  }
`;

const StyledArchiveIcon = styled(ArchiveIcon)`
  width: 25px;
  height: 25px;
  stroke: ${(props) => props.theme.colors.accent};

  &.header {
    width: 25px;
    height: 25px;
    stroke: ${(props) => props.theme.colors.dark};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.header {
      width: 30px;
      height: 30px;
    }
  }
`;

const StyledBackIcon = styled(BackIcon)`
  width: 25px;
  height: 25px;
  stroke: ${(props) => props.theme.colors.accent};
`;

const StyledOrdersIcon = styled(OrdersIcon)`
  width: 30px;
  height: 30px;
  fill: ${(props) => props.theme.colors.dark};
`;

export default {
  MainBlock,
  HeaderBlock,
  Title,
  StyledPlusIcon,
  Modal,
  StyledArchiveIcon,
  StyledBackIcon,
  Overlay,
  HeaderAdmin,
  StyledOrdersIcon,
};
