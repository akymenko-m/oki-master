import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Item = styled.li`
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &:first-of-type {
      grid-row-start: 1;
      grid-row-end: 4;
    }

    &:last-of-type {
      grid-column-start: 3;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-image: url('/bg-image.png');
  background-size: contain;
  transition: background-image 250ms ease-in;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 4px 0px #255f1a;
  }

  &:active {
    background-image: url('/bg-image-active.png');
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 100px;
    height: 100px;
    border-radius: 16px;

    &:hover,
    &:focus {
      box-shadow: 0px 5px 5px 0px #255f1a;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 150px;
    height: 150px;
    border-radius: 24px;
  }
`;

const Image = styled.img`
  width: 36px;
  height: 36px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 150px;
    height: 150px;
  }
`;

export default { Image, StyledLink, Item };
