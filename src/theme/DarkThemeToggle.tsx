import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useContext, useState } from 'react';
import { DarkTheme, LightTheme } from './Theme';
import { ThemeContext } from '../contexts/ThemeContext';

function DarkThemeToggle() {
  const { setTheme } = useContext(ThemeContext);

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChange = () => {
    if (isDarkTheme) {
      setTheme(LightTheme);
    } else {
      setTheme(DarkTheme);
    }

    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked onChange={handleChange} />}
        label={isDarkTheme ? 'Dark Mode' : 'Light Mode'}
      />
    </FormGroup>
  );
}

export default DarkThemeToggle;
