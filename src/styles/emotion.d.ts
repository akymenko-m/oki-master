import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: string;
      secondary: string;
      white: string;
      red: string;
      accent: string;
      dark: string;
      light: string;
      'light-20': string;
      mainBackground: string[];
      aboutUsBackground: string[];
      iconBackground: string[];
      iconActive: string[];
    };
    fontSizes: {
      desktop: {
        xs: string;
        small: string;
        medium: string;
        large: string;
        xl: string;
        xxl: string;
        xxxl: string;
      };
      mobile: {
        xs: string;
        small: string;
        medium: string;
        large: string;
        xl: string;
      };
    };
    letterSpasing: {
      none: string;
      auto: string;
      small: string;
      medium: string;
      large: string;
    };
    breakpoints: {
      s: string;
      m: string;
      l: string;
    };
    lineHeight: {
      auto: string;
      xs: string;
      small: string;
      medium: string;
      large: string;
      xl: string;
      xxl: string;
    };
    animations: {
      cubicBezier: string;
    };
    spacing: {
      step: number;
    };
    duration: string;
  }
}
