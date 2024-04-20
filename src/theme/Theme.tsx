import { createTheme, Theme } from '@mui/material';
import { blue, red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      link: string;
    };
  }

  interface PaletteOptions {
    link?: string;
  }
}

const DarkTheme = createTheme({
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
    link: blue[900],
  },
  typography: {
    allVariants: {
      color: '#000000',
    },
  },
});

const GetRandomTheme = (): Theme => {
  return createTheme({
    palette: GetRandomPalette(),
    typography: GetRandomTypography(),
  });
};

const GetRandomPalette = () => {
  return {
    mode: GetRandomMode(),
    primary: {
      main: GetRandomColor(),
    },
    secondary: {
      main: GetRandomColor(),
    },
    info: {
      main: GetRandomColor(),
    },
    link: GetRandomColor(),
  };
};

const GetRandomTypography = () => {
  return {
    allVariants: {
      color: GetRandomColor(),
    },
  };
};

const GetRandomColor = (): string => {
  return `#${GetRandomHexValue()}${GetRandomHexValue()}${GetRandomHexValue()}`;
};

const GetRandomHexValue = (): string => {
  return `${Math.floor(Math.random() * 256).toString(16)}`;
};

const GetRandomMode = (): 'dark' | 'light' => {
  return Math.floor(Math.random() * 2) === 0 ? 'dark' : 'light';
};

export const ThemeBook = {
  DarkMode: DarkTheme,
  LightMode: LightTheme,
  GetRandom: GetRandomTheme,
};
