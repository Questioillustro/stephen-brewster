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

  const defaultThemes: ThemeOption[] = [
    { value: 'RANDOM', label: 'Random' },
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
    const storedThemes = localStorage.getItem('themeOptions');
    if (storedThemes) {
      setThemeOptions(JSON.parse(storedThemes));
    } else {
      localStorage.setItem('themeOptions', JSON.stringify(defaultThemes));
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
        selectedValue = `Include themes about ${newValue}`;
        selectedLabel = newValue;
      } else {
        selectedValue = newValue.value;
        selectedLabel = newValue.label;
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
      setInputValue(randomTheme.label);
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
    const prefix = `The theme of the story should be:`;
    if (theme.toLowerCase() !== 'random') {
      themeChoice = ` ${theme}`;
    } else {
      const randomTheme = getRandomTheme();
      themeChoice = ` ${randomTheme.value}`;
    }
    addTheme(`${prefix}${themeChoice}`);
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
