import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface ThemeSelectProps {
  addTheme: (themePrompt: string) => void;
}

const ThemeSelect = (props: ThemeSelectProps) => {
  const { addTheme } = props;

  const [theme, setTheme] = useState<string>('NONE');

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setTheme(value);
  };

  useEffect(() => {
    if (theme !== 'NONE') {
      const prompt = `${theme}`;
      addTheme(prompt);
    } else {
      addTheme('');
    }
  }, [theme]);

  return (
    <FormControl variant={'filled'} fullWidth>
      <InputLabel id='theme-select-label'>Include a Theme</InputLabel>
      <Select
        labelId='theme-select-label'
        id='theme-select'
        value={theme}
        label='Theme'
        defaultValue={'NONE'}
        onChange={handleChange}
      >
        <MenuItem value={'NONE'}>None</MenuItem>
        <MenuItem
          value={
            'Include a random theme from a philosophy, religion, or any common theme from stories'
          }
        >
          Random
        </MenuItem>
        <MenuItem value={'Include themes about growing older'}>Growing Old</MenuItem>
        <MenuItem value={'Include themes about respecting other people'}>Respect</MenuItem>
        <MenuItem value={'Include themes about honesty'}>Honesty</MenuItem>
        <MenuItem value={'Include themes about stoic philosophy'}>Stoicism</MenuItem>
        <MenuItem value={'Include themes about Christianity'}>Christianity</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSelect;
