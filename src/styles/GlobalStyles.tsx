import { css, useTheme, Global } from '@emotion/react';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Raleway', sans-serif;
          font-weight: 400;
          color: ${theme.colors.text};

          @media (min-width: ${theme.breakpoints.s}) {
            font-size: ${theme.fontSizes.mobile.small};
          }
          @media (min-width: ${theme.breakpoints.m}) {
            font-size: ${theme.fontSizes.desktop.small};
          }
          @media (min-width: ${theme.breakpoints.l}) {
            font-size: ${theme.fontSizes.desktop.medium};
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }

        ul,
        ol {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        button {
          padding: 0;
          border: none;
          font: inherit;
          color: inherit;
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .accent {
          color: ${theme.colors.accent};
        }
      `}
    />
  );
}

export default GlobalStyles;
