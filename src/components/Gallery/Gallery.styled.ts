import styled from '@emotion/styled';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    grid-gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-bottom: 50px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 16px;
  }
`;

const Item = styled.div`
  border-radius: 10px;
  overflow: hidden;

  &:first-of-type {
    display: inline-grid;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  &:last-of-type {
    display: inline-grid;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &:first-of-type {
      display: inline-grid;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 1;
    }

    &:last-of-type {
      display: inline-grid;
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  }
`;

const Image = styled.img`
  height: 100%;
`;

export default { GalleryContainer, Item, Image };
