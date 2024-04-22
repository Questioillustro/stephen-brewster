import { createContext, ReactNode } from 'react';
import { IThemeConductor, useThemeConductor } from '../hooks/AnimationConductor.hook';

export const ThemeContext = createContext<IThemeConductor>({} as IThemeConductor);

export const SBThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeContext.Provider value={useThemeConductor()}>{children}</ThemeContext.Provider>;
};
