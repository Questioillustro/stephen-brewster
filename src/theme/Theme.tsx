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
    secondary: {
      main: '#FFFFFF',
    },
    link: blue[300],
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
