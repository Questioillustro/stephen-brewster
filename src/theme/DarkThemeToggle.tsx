/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function DarkThemeToggle() {
  const themeContext = useContext(ThemeContext);

  const handleChange = () => {
    themeContext.AnimatedToggleDarkTheme();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked onChange={handleChange} />}
        label={themeContext.isDarkTheme ? 'Dark Mode' : 'Light Mode'}
        color={'secondary'}
      />
    </FormGroup>
  );
}

export default DarkThemeToggle;
