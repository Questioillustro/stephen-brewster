import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      link: string;
    };
  }

  interface PaletteOptions {
    link: string;
  }
}

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[100],
    },
    secondary: {
      main: '#FFFFFF',
    },
    link: blue[400],
  },
  typography: {
    allVariants: {
      color: '#FFFFFF',
    },
  },
});

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#FDFEFF',
    },
    secondary: {
      main: '#000000',
    },
    link: blue[900],
  },
  typography: {
    allVariants: {
      color: '#000000',
    },
  },
});
