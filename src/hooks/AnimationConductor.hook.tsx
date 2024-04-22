import { ThemeBook } from '../theme/Theme';
import { useState } from 'react';
import { GetRandomTheme } from '../util/RandomGenerator.util';
import { Theme } from '@mui/material';

export interface IThemeConductor {
  theme: Theme;
  setTheme: (them: Theme) => void;
  isDarkTheme: boolean;
  AnimatedToggleDarkTheme: () => void;
  AnimatedRandomTheme: () => void;
  fadeIn: boolean;
  setFadeIn: (fadeIn: boolean) => void;
  slideIn: boolean;
  setSlideIn: (slideIn: boolean) => void;
  growIn: boolean;
  setGrowIn: (growIn: boolean) => void;
}

export const useThemeConductor = () => {
  const [theme, setTheme] = useState<Theme>(ThemeBook.DarkMode);

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const [fadeIn, setFadeIn] = useState<boolean>(true);

  const [slideIn, setSlideIn] = useState<boolean>(true);

  const [growIn, setGrowIn] = useState<boolean>(true);

  const fadeOutAll = () => {
    setFadeIn(false);
    setSlideIn(false);
    setGrowIn(false);
  };

  const AnimatedToggleDarkTheme = () => {
    fadeOutAll();

    setTimeout(() => {
      toggleDarkTheme();

      setFadeIn(true);
      setSlideIn(true);

      setTimeout(() => {
        setGrowIn(true);
      }, AnimationConstants.FadeTransitionDuration);
    }, 500);
  };

  const toggleDarkTheme = () => {
    if (isDarkTheme) {
      setTheme(ThemeBook.LightMode);
    } else {
      setTheme(ThemeBook.DarkMode);
    }

    setIsDarkTheme(!isDarkTheme);
  };

  const AnimatedRandomTheme = () => {
    fadeOutAll();

    setTimeout(() => {
      setTheme(GetRandomTheme());

      setFadeIn(true);
      setSlideIn(true);

      setTimeout(() => {
        setGrowIn(true);
      }, AnimationConstants.FadeTransitionDuration);
    }, 500);
  };

  return {
    theme,
    setTheme,
    isDarkTheme,
    AnimatedToggleDarkTheme,
    AnimatedRandomTheme,
    fadeIn,
    setFadeIn,
    slideIn,
    setSlideIn,
    growIn,
    setGrowIn,
  };
};

export const AnimationConstants = {
  FadeTransitionDuration: 300,
  SlideTransitionDuration: 600,
  GrowTransitionDuration: 800,
};
