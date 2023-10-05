import styled from '@emotion/styled';
import { ReactComponent as StatusDoneIcon } from '../../assets/status-done-icon.svg';
import { ReactComponent as StatusAtworkIcon } from '../../assets/status-atwork-icon.svg';
import { ReactComponent as StatusAcceptedIcon } from '../../assets/status-accepted-icon.svg';

const Modal = styled.div`
  margin: 0 auto;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.dark};
  border-radius: 10px;
  top: 30%;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 2;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  pointer-events: none;

  &.open {
    opacity: 1;
    pointer-events: visible;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 700px;
    top: 15%;
    border: 2px solid ${(props) => props.theme.colors.dark};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: 886px;
  }
`;

const Overlay = styled.div`
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 1;
  overflow-y: scroll;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  pointer-events: none;

  &.open {
    opacity: 1;
    pointer-events: visible;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 0 38px;
  }
`;

const ModalHeader = styled.div`
  padding: 37px 0 14px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.dark};
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 54px 0 43px 0;
    font-size: ${(props) => props.theme.fontSizes.desktop.medium};
    font-weight: 600;
    border-bottom: 2px solid ${(props) => props.theme.colors.dark};
  }
`;

const OrderNumber = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-weight: 700;
  }
`;

const ModalContent = styled.div`
  padding: 8px 10px 25px 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 25px 23px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 25px 41px;
  }
`;

const Name = styled.p`
  padding-bottom: 8px;
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding-bottom: 18px;
  }
`;

const Number = styled.p`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.xs};
    line-height: 22px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.small};
  }
`;

const List = styled.ul`
  margin: 32px 0 28px 0;
  display: flex;
  justify-content: center;
  gap: 22px;
  position: relative;

  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    width: 220px;
    height: 7px;
    background: linear-gradient(
      270.02deg,
      #255f1a -5.75%,
      #41a92e 48.22%,
      #bcea8f 108.39%
    );
    z-index: -1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin: 50px 0 47px 0;
    gap: 87px;

    &::after {
      height: 18px;
      width: 500px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin: 48px 0 49px 0;
    gap: 132px;

    &::after {
      width: 600px;
    }
  }
`;

const Item = styled.li`
  width: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: ${(props) => props.theme.fontSizes.mobile.xs};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 162px;
    gap: 8px;
    font-size: ${(props) => props.theme.fontSizes.desktop.medium};
    font-weight: 500;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 180px;
  }
`;

const StasusDone = styled(StatusDoneIcon)`
  width: 36px;
  height: 36px;
  fill: ${(props) => props.theme.colors.secondary};

  &.done {
    fill: ${(props) => props.theme.colors.dark};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 77px;
    height: 77px;
  }
`;

const StasusAtwork = styled(StatusAtworkIcon)`
  width: 36px;
  height: 36px;
  fill: ${(props) => props.theme.colors.secondary};

  &.done {
    fill: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 77px;
    height: 77px;
  }
`;

const StasusAccepted = styled(StatusAcceptedIcon)`
  width: 36px;
  height: 36px;
  fill: ${(props) => props.theme.colors.secondary};

  &.done {
    fill: ${(props) => props.theme.colors.light};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 77px;
    height: 77px;
  }
`;

const CommentBlock = styled.div`
  position: relative;
  padding: 4px 0 4px 6px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 6px 0 6px 10px;
  }
`;

const Comment = styled.p`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    line-height: 30px;
  }
`;

export default {
  Modal,
  Overlay,
  ModalHeader,
  OrderNumber,
  ModalContent,
  Name,
  StasusDone,
  StasusAtwork,
  StasusAccepted,
  List,
  Item,
  Number,
  Comment,
  CommentBlock,
};
