import { Autocomplete, Button, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface ThemeSelectProps {
  addTheme: (themePrompt: string) => void;
}

interface ThemeOption {
  value: string;
  label: string;
}

const ThemeSelect = (props: ThemeSelectProps) => {
  const { addTheme } = props;
  const [theme, setTheme] = useState<string>('NONE');
  const [inputValue, setInputValue] = useState('');
  const [themeOptions, setThemeOptions] = useState<ThemeOption[]>([]);

  const defaultThemes: ThemeOption[] = [
    { value: 'NONE', label: 'None' },
    {
      value: 'Include a random theme from a philosophy, religion, or any common theme from stories',
      label: 'Random',
    },
    { value: 'Include themes about growing old', label: 'Growing Old' },
    { value: 'Include themes about respect', label: 'Respect' },
    { value: 'Include themes about honesty', label: 'Honesty' },
    { value: 'Include themes about stoicism', label: 'Stoicism' },
    { value: 'Include themes about christianity', label: 'Christianity' },
    { value: 'Include themes about friendship', label: 'Friendship' },
    { value: 'Include themes about courage', label: 'Courage' },
    { value: 'Include themes about kindness', label: 'Kindness' },
    { value: 'Include themes about imagination', label: 'Imagination' },
    { value: 'Include themes about adventure', label: 'Adventure' },
    { value: 'Include themes about family', label: 'Family' },
    { value: 'Include themes about self-discovery', label: 'Self-Discovery' },
    { value: 'Include themes about teamwork', label: 'Teamwork' },
    { value: 'Include themes about perseverance', label: 'Perseverance' },
    { value: 'Include themes about acceptance', label: 'Acceptance' },
    { value: 'Include themes about curiosity', label: 'Curiosity' },
    { value: 'Include themes about love', label: 'Love' },
    { value: 'Include themes about responsibility', label: 'Responsibility' },
    { value: 'Include themes about hope', label: 'Hope' },
    { value: 'Include themes about sharing', label: 'Sharing' },
    { value: 'Include themes about growth', label: 'Growth' },
    { value: 'Include themes about magic', label: 'Magic' },
    { value: 'Include themes about humor', label: 'Humor' },
  ];

  useEffect(() => {
    const storedThemes = localStorage.getItem('themeOptions');
    if (storedThemes) {
      setThemeOptions(JSON.parse(storedThemes));
    } else {
      setThemeOptions(defaultThemes);
      localStorage.setItem('themeOptions', JSON.stringify(defaultThemes));
    }
  }, []);

  const handleAddTheme = () => {
    if (
      inputValue &&
      !themeOptions.some((option) => option.label.toLowerCase() === inputValue.toLowerCase())
    ) {
      const newTheme = {
        value: `Include themes about ${inputValue}`,
        label: inputValue,
      };
      const updatedOptions = [...themeOptions, newTheme];
      setThemeOptions(updatedOptions);
      localStorage.setItem('themeOptions', JSON.stringify(updatedOptions));
      setTheme(newTheme.value);
      setInputValue('');
    }
  };

  const handleThemeChange = (
    event: React.SyntheticEvent,
    newValue: ThemeOption | string | null,
  ) => {
    if (newValue) {
      if (typeof newValue === 'string') {
        // Handle case where user types a custom value
        setTheme(`Include themes about ${newValue}`);
        setInputValue(newValue);
      } else {
        // Handle case where user selects an existing option
        setTheme(newValue.value);
        setInputValue(newValue.label);
      }
    } else {
      setTheme('NONE');
      setInputValue('');
    }
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    if (theme !== 'NONE') {
      addTheme(theme);
    } else {
      addTheme('');
    }
  }, [theme]);

  return (
    <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      <Autocomplete
        options={themeOptions}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        value={themeOptions.find((option) => option.value === theme) || null}
        onChange={handleThemeChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        freeSolo
        renderInput={(params) => <TextField {...params} label='Include a Theme' variant='filled' />}
        sx={{ flexGrow: 1 }}
      />
      <Button
        variant='contained'
        onClick={handleAddTheme}
        disabled={
          !inputValue ||
          themeOptions.some((option) => option.label.toLowerCase() === inputValue.toLowerCase())
        }
      >
        Add
      </Button>
    </FormControl>
  );
};

export default ThemeSelect;
