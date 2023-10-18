import styled from '@emotion/styled';
import Pagination from 'rc-pagination';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 18px;
  text-align: center;
`;

const StyledPagination = styled(Pagination)`
  &::after {
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    content: ' ';
  }

  & .rc-pagination-total-text {
    display: inline-block;
    height: 28px;
    margin-right: 8px;
    line-height: 26px;
    vertical-align: middle;
  }

  & .rc-pagination-item {
    display: inline-block;
    min-width: 28px;
    height: 28px;
    margin-right: 8px;
    line-height: 26px;
    text-align: center;
    vertical-align: middle;
    list-style: none;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 2px;
    outline: 0;
    cursor: pointer;
    user-select: none;

    & a {
      display: block;
      padding: 0 6px;
      transition: none;

      &:hover {
        text-decoration: none;
      }
    }

    &:focus,
    &:hover {
      border-color: ${(props) => props.theme.colors.accent};
      transition:
        color 250ms ${(props) => props.theme.animations.cubicBezier},
        border-color 250ms ${(props) => props.theme.animations.cubicBezier};
      a {
        color: ${(props) => props.theme.colors.accent};
      }
    }
  }

  & .rc-pagination-item-active {
    font-weight: 500;
    background: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.accent};

    & a {
      color: ${(props) => props.theme.colors.accent};
    }

    &:focus,
    &:hover {
      border-color: ${(props) => props.theme.colors.accent};
    }

    &:focus a,
    &:hover a {
      color: ${(props) => props.theme.colors.accent};
    }
  }

  & .rc-pagination-jump-prev,
  & .rc-pagination-jump-next {
    outline: 0;

    & button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    & button:after {
      display: block;
      content: '•••';
    }
  }

  & .rc-pagination-prev,
  & .rc-pagination-jump-prev,
  & .rc-pagination-jump-next {
    margin-right: 8px;
  }

  & .rc-pagination-prev,
  & .rc-pagination-next,
  & .rc-pagination-jump-prev,
  & .rc-pagination-jump-next {
    display: inline-block;
    min-width: 28px;
    height: 28px;
    line-height: ${(props) => props.theme.lineHeight.small};
    text-align: center;
    vertical-align: middle;
    list-style: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
  }

  & .rc-pagination-prev,
  & .rc-pagination-next {
    outline: 0;

    & button {
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      user-select: none;
    }

    &:hover button {
      border-color: ${(props) => props.theme.colors.accent};
    }

    &:focus .rc-pagination-item-link,
    &:hover .rc-pagination-item-link {
      color: ${(props) => props.theme.colors.accent};
      border-color: ${(props) => props.theme.colors.accent};
    }
  }

  & .rc-pagination-item-link {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 12px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 2px;
    outline: none;
    transition:
      color 250ms ${(props) => props.theme.animations.cubicBezier},
      border-color 250ms ${(props) => props.theme.animations.cubicBezier},
      background-color 250ms ${(props) => props.theme.animations.cubicBezier};
  }

  & .rc-pagination-prev button:after {
    content: '‹';
    display: block;
  }

  & .rc-pagination-next button:after {
    content: '›';
    display: block;
  }

  & .rc-pagination-disabled {
    &,
    &:hover,
    &:focus {
      cursor: not-allowed;
      & .rc-pagination-item-link {
        border-color: ${(props) => props.theme.colors.secondary};
        cursor: not-allowed;
      }
    }
  }

  & .rc-pagination-slash {
    margin: 0 10px 0 5px;
  }

  & .rc-pagination-options {
    display: inline-block;
    margin-left: 16px;
    vertical-align: middle;
  }

  & .rc-pagination-size-changer.rc-select {
    display: inline-block;
    width: auto;
    margin-right: 8px;
  }

  & .rc-pagination-quick-jumper {
    display: inline-block;
    height: 28px;
    line-height: ${(props) => props.theme.lineHeight.small};
    vertical-align: top;

    & input {
      width: 50px;
      margin: 0 8px;
    }
  }

  & .rc-pagination-simple .rc-pagination-prev,
  & .rc-pagination-simple .rc-pagination-next {
    height: 24px;
    line-height: 24px;
    vertical-align: top;

    & .rc-pagination-item-link {
      height: 24px;
      background-color: transparent;
      border: 0;
      &::after {
        height: 24px;
        line-height: 24px;
      }
    }
  }

  & .rc-pagination-simple .rc-pagination-simple-pager {
    display: inline-block;
    height: 24px;
    margin-right: 8px;

    input {
      box-sizing: border-box;
      height: 100%;
      margin-right: 8px;
      padding: 0 6px;
      text-align: center;
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.secondary};
      border-radius: 2px;
      outline: none;
      transition: border-color 250ms
        ${(props) => props.theme.animations.cubicBezier};

      &:hover {
        border-color: ${(props) => props.theme.colors.accent};
      }
    }
  }

  & .rc-pagination-disabled {
    cursor: not-allowed;

    & .rc-pagination-item {
      background: hsv(0, 0, 96%);
      border-color: ${(props) => props.theme.colors.secondary};
      cursor: not-allowed;

      a {
        color: fade(#000, 25%);
        background: transparent;
        border: none;
        cursor: not-allowed;
      }

      & .rc-pagination-item-active {
        border-color: transparent;
        a {
          color: ${(props) => props.theme.colors.white};
        }
      }
    }
  }

  & .rc-pagination-item-link {
    color: fade(#000, 25%);
    background: hsv(0, 0, 96%);
    border-color: ${(props) => props.theme.colors.secondary};
    cursor: not-allowed;
  }

  & .rc-pagination-item-link-icon {
    opacity: 0;
  }

  & .rc-pagination-item-ellipsis {
    opacity: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

export default { Container, StyledPagination };
