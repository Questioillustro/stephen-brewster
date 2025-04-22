import React, { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { ResumeDarkTheme, ResumeLightTheme } from '@/apps/resume/ResumeThemes';
import { BavDarkTheme, BavLightTheme } from '@/apps/cyoa/theme/BavThemes';

interface SBThemeContextType {
  theme: Theme;
}

const SBThemeContext = createContext<SBThemeContextType>({
  theme: ResumeDarkTheme,
});

interface SBThemeProviderProps {
  children: ReactNode;
  theme?: 'dark' | 'light' | 'resumeDark' | 'resumeLight' | 'bavdark' | 'bavlight';
}

export const SBThemeProvider = ({ children, theme = 'dark' }: SBThemeProviderProps) => {
  const themes = {
    resumeDark: ResumeDarkTheme,
    resumeLight: ResumeLightTheme,
    bavdark: BavDarkTheme,
    bavlight: BavLightTheme,
    dark: ResumeDarkTheme,
    light: BavLightTheme,
  };

  const selectedTheme = themes[theme];

  return (
    <ThemeProvider theme={selectedTheme}>
      <SBThemeContext.Provider value={{ theme: selectedTheme }}>{children}</SBThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useTheme = () => useContext(SBThemeContext);
