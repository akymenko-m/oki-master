import styled from '@emotion/styled';
import { ReactComponent as QuotesIcon } from '../../assets/quotes-icon.svg';

const Item = styled.li`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 330px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 374px;
  }
`;

const Card = styled.div`
  position: relative;
  padding-bottom: 10px;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 7px;
    left: 0;
    background-color: ${(props) => props.theme.colors.accent};
    border-radius: 2px;
    z-index: -1;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 100%;
    padding-bottom: 18px;

    &::before {
      top: 15px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 22px 22px 40px 22px;

    &::after {
      bottom: 22px;
      width: 88%;
      left: 6%;
    }

    &::before {
      top: 38px;
      width: 88%;
      left: 6%;
    }
  }
`;

const IconContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: white;
  width: 28px;
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 18px;
    width: 77px;
    height: 34px;
  }
`;

const StyledQuotesIcon = styled(QuotesIcon)`
  width: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 49px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: calc(100% - 46px);
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  line-height: ${(props) => props.theme.lineHeight.xs};

  &.user {
    line-height: 30px;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSizes.mobile.medium};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.xs};
    line-height: 30px;

    &.review {
      flex-grow: 1;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.user {
      font-size: ${(props) => props.theme.fontSizes.desktop.medium};
    }
  }
`;

export default {
  Item,
  Card,
  Name,
  Text,
  StyledQuotesIcon,
  IconContainer,
  TextContainer,
};
