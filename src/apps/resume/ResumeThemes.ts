import { createTheme, Theme } from '@mui/material';
import { blue } from '@mui/material/colors';

const headingStyles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce(
  (acc, variant) => ({
    ...acc,
    [variant]: { fontFamily: 'sans-serif' },
  }),
  {},
);

const ResumeTypography = {
  fontFamily: '"Comic Neue", "Bangers", "Poppins", sans-serif',
  ...headingStyles,
  body1: { fontFamily: 'sans-serif' },
  body2: { fontFamily: 'sans-serif' },
};

export const ResumeDarkTheme: Theme = createTheme({
  typography: ResumeTypography,
  palette: {
    mode: 'dark',
    primary: {
      main: blue[300],
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: blue[500],
          textDecoration: 'none',
          '&:hover': {
            color: blue[300],
          },
        },
      },
    },
  },
});

export const ResumeLightTheme = createTheme({
  typography: ResumeTypography,
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
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: blue[500],
          textDecoration: 'none',
          '&:hover': {
            color: blue[300],
          },
        },
      },
    },
  },
});
