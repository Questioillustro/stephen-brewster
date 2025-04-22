import { createTheme, Theme } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';

const headingStyles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce(
  (acc, variant) => ({
    ...acc,
    [variant]: { fontFamily: 'sans-serif' },
  }),
  {},
);

const DefaultTypography = {
  fontFamily: '"Comic Neue", "Bangers", "Poppins", sans-serif',
  ...headingStyles,
  body1: { fontFamily: 'sans-serif' },
  body2: { fontFamily: 'sans-serif' },
};

export const DarkTheme: Theme = createTheme({
  typography: DefaultTypography,
  palette: {
    mode: 'dark',
    primary: {
      main: blue[300],
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

export const LightTheme = createTheme({
  typography: DefaultTypography,
  palette: {
    mode: 'light',
    background: {
      paper: '#FDFEFF',
    },
    secondary: {
      main: '#000000',
    },
    info: {
      main: '#000000',
    },
  },
});
