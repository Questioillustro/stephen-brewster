/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useAnimationConductor } from '../hooks/AnimationConductor.hook';

function DarkThemeToggle() {
  const themeContext = useContext(ThemeContext);

  const { isDarkTheme, AnimatedToggleDarkTheme } = useAnimationConductor();

  const handleChange = () => {
    AnimatedToggleDarkTheme(themeContext);
  };

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
