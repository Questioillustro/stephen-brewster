import { createTheme } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';

const headingStyles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce(
  (acc, variant) => ({
    ...acc,
    [variant]: { fontFamily: 'Bangers' },
  }),
  {},
);

export const BavDarkTheme = createTheme({
  typography: {
    fontFamily: '"Comic Neue", "Bangers", "Poppins", sans-serif',
    ...headingStyles,
  },
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

export const BavLightTheme = createTheme({
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
  typography: {
    allVariants: {
      color: '#000000',
    },
  },
});
