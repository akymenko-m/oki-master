import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const List = styled.ul`
  display: none;
  font-size: ${(props) => props.theme.fontSizes.mobile.medium};
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeight.large};

  &.footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: ${(props) => props.theme.fontSizes.mobile.xs};
    font-weight: 400;
    line-height: ${(props) => props.theme.lineHeight.medium};
  }

  &.open {
    display: flex;
    flex-direction: column;
    gap: 13px;
    align-items: flex-end;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.header {
      display: flex;
      flex-direction: row;
      gap: 26px;
      justify-content: center;
      align-items: center;
      font-size: ${(props) => props.theme.fontSizes.desktop.medium};
      line-height: ${(props) => props.theme.lineHeight.xl};
    }

    &.footer {
      width: 125px;
      font-size: ${(props) => props.theme.fontSizes.desktop.small};
      line-height: 30px;
      gap: 20px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.header {
      gap: 30px;
      justify-content: flex-start;
    }

    &.footer {
      width: 146px;
    }
  }
`;

const Item = styled.li`
  transition:
    background-color 250ms ${(props) => props.theme.animations.cubicBezier},
    opacity 250ms ${(props) => props.theme.animations.cubicBezier};
  cursor: pointer;

  &.open {
    position: relative;
  }

  &.header {
    padding: 11px 3px;
    width: max-content;
    position: relative;
    background-color: transparent;
  }

  &.header::after,
  &.open::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    opacity: 0;
    transition: opacity 250ms ${(props) => props.theme.animations.cubicBezier};
  }

  &.header:hover::after,
  &.header:focus::after,
  &.open:hover::after,
  &.open:focus::after {
    background-color: ${(props) => props.theme.colors.accent};
    opacity: 1;
  }

  &.header:active {
    background-color: ${(props) => props.theme.colors['light-20']};
    border-radius: 10px;

    &::after {
      opacity: 0;
    }
  }

  &.footer:last-of-type {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.footer:last-of-type {
      display: block;
    }

    &.header {
      padding: 11px 14px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  height: 100%;
`;

export default { List, Item, StyledLink };
