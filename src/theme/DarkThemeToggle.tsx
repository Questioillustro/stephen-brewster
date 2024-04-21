/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeBook, ThemeConstants } from './Theme';

function DarkThemeToggle() {
  const { theme, setTheme, fadeIn, setFadeIn, slideIn, setSlideIn } = useContext(ThemeContext);

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChange = () => {
    setFadeIn(false);
    setSlideIn(false);

    setTimeout(() => {
      if (isDarkTheme) {
        setTheme(ThemeBook.LightMode);
      } else {
        setTheme(ThemeBook.DarkMode);
      }

      setIsDarkTheme(!isDarkTheme);
    }, ThemeConstants.FadeTransitionDuration + 100);
  };

  useEffect(() => {
    if (!fadeIn) setFadeIn(true);
    if (!slideIn) setSlideIn(true);
  }, [theme]);

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked onChange={handleChange} />}
        label={isDarkTheme ? 'Dark Mode' : 'Light Mode'}
        color={'secondary'}
      />
    </FormGroup>
  );
}

export default DarkThemeToggle;
