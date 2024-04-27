import { createTheme, PaletteOptions, Theme } from '@mui/material';

export const GetRandomTheme = (isDarkMode: boolean): Theme => {
  return createTheme({
    palette: GetRandomPalette(isDarkMode),
    typography: GetRandomTypography(),
  });
};

const GetRandomPalette = (isDarkMode: boolean): PaletteOptions => {
  return {
    mode: isDarkMode ? 'dark' : 'light',
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
