const theme = Object.freeze({
  colors: {
    text: '#141515',
    secondary: '#D9D9D9',
    white: '#ffffff',
    red: '#e81f15',
    accent: '#41A92E',
    dark: '#245D19',
    light: '#BCEA8F',
    'light-20': '#E6F5D9',
    grey: '#7B7B7B',
    mainBackground: [
      'linear-gradient(67.46deg, #FEFEFE 68.58%, #BCEA8F 102.14%)',
    ],
    aboutUsBackground: ['linear-gradient(180deg, #BCEA8F 0%, #41A92E 100%)'],
    iconBackground: [
      'linear-gradient(129.28deg, #BCEA8F 5.55%, #245D19 250.99%)',
    ],
    iconActive: ['background: rgba(36, 93, 25, 1)'],
  },
  fontSizes: {
    desktop: {
      xs: '18px',
      small: '20px',
      medium: '24px',
      large: '32px',
      xl: '40px',
      xxl: '48px',
      xxxl: '60px',
    },
    mobile: {
      xs: '12px',
      small: '14px',
      medium: '18px',
      large: '24px',
      xl: '28px',
    },
  },
  letterSpasing: {
    none: '0',
    auto: 'auto',
    small: '24px',
    medium: '27px',
    large: '117',
  },
  breakpoints: {
    s: '320px',
    m: '768px',
    l: '1280px',
  },
  lineHeight: {
    auto: 'auto',
    xs: '16px',
    small: '28px',
    medium: '32px',
    large: '40px',
    xl: '48px',
    xxl: '70px',
  },
  animations: {
    cubicBezier: 'cubic-bezier(0, 0.110, 0.35, 2);',
  },
  spacing: {
    step: 4,
  },
  duration: '300ms',
});

export default theme;
