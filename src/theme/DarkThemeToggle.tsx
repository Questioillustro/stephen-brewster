/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeBook } from './Theme';

function DarkThemeToggle() {
  const { setTheme } = useContext(ThemeContext);

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChange = () => {
    if (isDarkTheme) {
      setTheme(ThemeBook.LightMode);
    } else {
      setTheme(ThemeBook.DarkMode);
    }

    setIsDarkTheme(!isDarkTheme);
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
