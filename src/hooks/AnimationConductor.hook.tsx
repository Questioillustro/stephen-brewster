import { ThemeBook } from '../theme/Theme';
import { useEffect, useState } from 'react';
import { GetRandomTheme } from '../util/RandomGenerator.util';

export const ThemeConstants = {
  FadeTransitionDuration: 300,
  SlideTransitionDuration: 600,
  GrowTransitionDuration: 800,
};

export const useAnimationConductor = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const fadeOutAll = (themeContext: any) => {
    themeContext.setFadeIn(false);
    themeContext.setSlideIn(false);
    themeContext.setGrowIn(false);
  };

  const AnimatedToggleDarkTheme = (themeContext: any) => {
    fadeOutAll(themeContext);

    setTimeout(() => {
      toggleDarkTheme(themeContext);

      themeContext.setFadeIn(true);
      themeContext.setSlideIn(true);

      setTimeout(() => {
        themeContext.setGrowIn(true);
      }, ThemeConstants.FadeTransitionDuration);
    }, 500);
  };

  const toggleDarkTheme = (themeContext: any) => {
    if (isDarkTheme) {
      themeContext.setTheme(ThemeBook.LightMode);
    } else {
      themeContext.setTheme(ThemeBook.DarkMode);
    }

    setIsDarkTheme(!isDarkTheme);
  };

  const AnimatedRandomTheme = (themeContext: any) => {
    fadeOutAll(themeContext);

    setTimeout(() => {
      themeContext.setTheme(GetRandomTheme());

      themeContext.setFadeIn(true);
      themeContext.setSlideIn(true);

      setTimeout(() => {
        themeContext.setGrowIn(true);
      }, ThemeConstants.FadeTransitionDuration);
    }, 500);
  };

  return { isDarkTheme, AnimatedToggleDarkTheme, AnimatedRandomTheme };
};
