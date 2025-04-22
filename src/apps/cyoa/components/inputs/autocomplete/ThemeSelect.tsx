import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';

export interface ThemeSelectProps {
  addTheme: (themePrompt: string) => void;
}

interface ThemeOption {
  value: string;
  label: string;
}

const ThemeSelect = (props: ThemeSelectProps) => {
  const { addTheme } = props;

  const THEME_VERSION = '1';

  const defaultThemes: ThemeOption[] = [
    { value: 'Random', label: 'Random' },
    { value: 'Respect', label: 'Respect' },
    { value: 'Growing Old', label: 'Growing Old' },
    { value: 'Honesty', label: 'Honesty' },
    { value: 'Stoicism', label: 'Stoicism' },
    { value: 'Christianity', label: 'Christianity' },
    { value: 'Friendship', label: 'Friendship' },
    { value: 'Courage', label: 'Courage' },
    { value: 'Kindness', label: 'Kindness' },
    { value: 'Imagination', label: 'Imagination' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Family', label: 'Family' },
    { value: 'Self-Discovery', label: 'Self-Discovery' },
    { value: 'Teamwork', label: 'Teamwork' },
    { value: 'Perseverance', label: 'Perseverance' },
    { value: 'Acceptance', label: 'Acceptance' },
    { value: 'Curiosity', label: 'Curiosity' },
    { value: 'Love', label: 'Love' },
    { value: 'Responsibility', label: 'Responsibility' },
    { value: 'Hope', label: 'Hope' },
    { value: 'Sharing', label: 'Sharing' },
    { value: 'Growth', label: 'Growth' },
    { value: 'Magic', label: 'Magic' },
    { value: 'Humor', label: 'Humor' },
  ];

  // Initialize theme and inputValue with a random option (excluding 'RANDOM')
  const getRandomTheme = () => {
    const themeOptions = defaultThemes.filter((option) => option.value !== 'RANDOM');
    const randomIndex = Math.floor(Math.random() * themeOptions.length);
    return themeOptions[randomIndex];
  };

  const initialTheme = getRandomTheme();
  const [theme, setTheme] = useState<string>(initialTheme.value);
  const [inputValue, setInputValue] = useState<string>(initialTheme.label);
  const [themeOptions, setThemeOptions] = useState<ThemeOption[]>(defaultThemes);
  const [open, setOpen] = useState<boolean>(false);
  const autocompleteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const themeVersion = localStorage.getItem('themeVersion');

    if (themeVersion !== THEME_VERSION) {
      localStorage.setItem('themeOptions', JSON.stringify(defaultThemes));
      localStorage.setItem('themeVersion', THEME_VERSION);
    } else {
      const storedThemes = localStorage.getItem('themeOptions');
      if (storedThemes) {
        setThemeOptions(JSON.parse(storedThemes));
      } else {
        localStorage.setItem('themeOptions', JSON.stringify(defaultThemes));
      }
    }
  }, []);

  const handleThemeChange = (
    event: React.SyntheticEvent,
    newValue: ThemeOption | string | null,
  ) => {
    if (newValue) {
      let selectedValue: string;
      let selectedLabel: string;

      if (typeof newValue === 'string') {
        selectedValue = newValue;
        selectedLabel = newValue;
      } else {
        selectedValue = newValue.value;
        selectedLabel = newValue.value;
      }

      if (
        !themeOptions.some((option) => option.label.toLowerCase() === selectedLabel.toLowerCase())
      ) {
        const newTheme = { value: selectedValue, label: selectedLabel };
        const updatedOptions = [...themeOptions, newTheme];
        setThemeOptions(updatedOptions);
        localStorage.setItem('themeOptions', JSON.stringify(updatedOptions));
      }

      setTheme(selectedValue);
      setInputValue(selectedLabel);
    } else {
      const randomTheme = getRandomTheme();
      setTheme(randomTheme.value);
      setInputValue(randomTheme.value);
    }
    setOpen(false);
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputValue && inputValue.trim() !== '') {
      handleThemeChange(event, inputValue);
    } else {
      const randomTheme = getRandomTheme();
      setTheme(randomTheme.value);
      setInputValue(randomTheme.label);
    }
  };

  const handleInputClick = () => {
    setTheme('RANDOM');
    setInputValue('');
    setOpen(true);
    if (autocompleteRef.current) {
      autocompleteRef.current.focus();
    }
  };

  useEffect(() => {
    let themeChoice;
    const prefix = `Include themes about:`;
    if (theme.toLowerCase() !== 'random') {
      themeChoice = `${theme}`;
    } else {
      const randomTheme = getRandomTheme();
      themeChoice = `${randomTheme.value}`;
    }
    addTheme(`${prefix} ${themeChoice}.`);
  }, [theme, addTheme]);

  const defaultValue = themeOptions.find((option) => option.value === theme) || null;

  return (
    <FormControl fullWidth>
      <Autocomplete
        options={themeOptions}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        value={themeOptions.find((option) => option.value === theme) || defaultValue}
        onChange={handleThemeChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        freeSolo
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Theme'
            variant='filled'
            onBlur={handleBlur}
            onClick={handleInputClick}
            inputRef={autocompleteRef}
          />
        )}
      />
    </FormControl>
  );
};

export default ThemeSelect;
