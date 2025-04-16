import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';

export interface GenreSelectProps {
  addGenre: (prompt: string) => void;
}

interface GenreOption {
  value: string;
  label: string;
}

const GenreSelect = (props: GenreSelectProps) => {
  const { addGenre } = props;

  const defaultGenres: GenreOption[] = [
    { value: 'RANDOM', label: 'Random' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Science Fiction', label: 'Science Fiction' },
    { value: 'Mystery', label: 'Mystery' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Historical Fiction', label: 'Historical Fiction' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Literary Fiction', label: 'Literary Fiction' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Dystopian', label: 'Dystopian' },
    { value: 'Young Adult', label: 'Young Adult' },
    { value: 'Urban Fantasy', label: 'Urban Fantasy' },
    { value: 'Western', label: 'Western' },
    { value: 'Steampunk', label: 'Steampunk' },
    { value: 'Paranormal', label: 'Paranormal' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Drama', label: 'Drama' },
  ];

  // Initialize genre and inputValue with a random option (excluding 'RANDOM')
  const getRandomGenre = () => {
    const genreOptions = defaultGenres.filter((option) => option.value !== 'RANDOM');
    const randomIndex = Math.floor(Math.random() * genreOptions.length);
    return genreOptions[randomIndex];
  };

  const initialGenre = getRandomGenre();
  const [genre, setGenre] = useState<string>(initialGenre.value);
  const [inputValue, setInputValue] = useState<string>(initialGenre.label);
  const [genreOptions, setGenreOptions] = useState<GenreOption[]>(defaultGenres);
  const [open, setOpen] = useState<boolean>(false);
  const autocompleteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedGenres = localStorage.getItem('genreOptions');
    if (storedGenres) {
      setGenreOptions(JSON.parse(storedGenres));
    } else {
      localStorage.setItem('genreOptions', JSON.stringify(defaultGenres));
    }
  }, []);

  const handleGenreChange = (
    event: React.SyntheticEvent,
    newValue: GenreOption | string | null,
  ) => {
    if (newValue) {
      let selectedValue: string;
      let selectedLabel: string;

      if (typeof newValue === 'string') {
        selectedValue = newValue;
        selectedLabel = newValue;
      } else {
        selectedValue = newValue.value;
        selectedLabel = newValue.label;
      }

      if (
        !genreOptions.some((option) => option.label.toLowerCase() === selectedLabel.toLowerCase())
      ) {
        const newGenre = { value: selectedValue, label: selectedLabel };
        const updatedOptions = [...genreOptions, newGenre];
        setGenreOptions(updatedOptions);
        localStorage.setItem('genreOptions', JSON.stringify(updatedOptions));
      }

      setGenre(selectedValue);
      setInputValue(selectedLabel);
    } else {
      const randomGenre = getRandomGenre();
      setGenre(randomGenre.value);
      setInputValue(randomGenre.label);
    }
    setOpen(false);
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputValue && inputValue.trim() !== '') {
      handleGenreChange(event, inputValue);
    } else {
      const randomGenre = getRandomGenre();
      setGenre(randomGenre.value);
      setInputValue(randomGenre.label);
    }
  };

  const handleInputClick = () => {
    setGenre('RANDOM');
    setInputValue('');
    setOpen(true);
    if (autocompleteRef.current) {
      autocompleteRef.current.focus();
    }
  };

  useEffect(() => {
    let genreChoice;
    const prefix = `The story genre should be:`;
    if (genre.toLowerCase() !== 'random') {
      genreChoice = ` ${genre}`;
    } else {
      const randomGenre = getRandomGenre();
      genreChoice = ` ${randomGenre.value}`;
    }
    addGenre(`${prefix}${genreChoice}`);
  }, [genre, addGenre]);

  const defaultValue = genreOptions.find((option) => option.value === genre) || null;

  return (
    <FormControl fullWidth>
      <Autocomplete
        options={genreOptions}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        value={genreOptions.find((option) => option.value === genre) || defaultValue}
        onChange={handleGenreChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        freeSolo
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Genre'
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

export default GenreSelect;
