import { createTheme, Theme } from '@mui/material';

export const GetRandomTheme = (): Theme => {
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
