import { createTheme } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      link: string;
      cardContrastBg: string;
    };
  }

  interface PaletteOptions {
    link?: string;
    cardContrastBg?: string;
  }
}

const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[200],
    },
    secondary: {
      main: '#FFFFFF',
    },
    cardContrastBg: '#000000',
    link: blue[400],
  },
  typography: {
    allVariants: {
      color: '#FFFFFF',
    },
  },
});

const LightTheme = createTheme({
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
    cardContrastBg: blueGrey[50],
    link: blue[900],
  },
  typography: {
    allVariants: {
      color: '#000000',
    },
  },
});

export const ThemeBook = {
  DarkMode: DarkTheme,
  LightMode: LightTheme,
};
