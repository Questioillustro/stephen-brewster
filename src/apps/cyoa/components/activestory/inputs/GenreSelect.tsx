import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface GenreSelectProps {
  addGenre: (prompt: string) => void;
}

interface GenreOption {
  value: string;
  label: string;
}

const GenreSelect = (props: GenreSelectProps) => {
  const { addGenre } = props;
  const [genre, setGenre] = useState<string>('NONE');
  const [inputValue, setInputValue] = useState('');
  const [genreOptions, setGenreOptions] = useState<GenreOption[]>([]);

  const defaultGenres: GenreOption[] = [
    { value: 'NONE', label: 'None' },
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

  useEffect(() => {
    const storedGenres = localStorage.getItem('genreOptions');
    if (storedGenres) {
      setGenreOptions(JSON.parse(storedGenres));
    } else {
      setGenreOptions(defaultGenres);
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
        const newGenre = {
          value: selectedValue,
          label: selectedLabel,
        };
        const updatedOptions = [...genreOptions, newGenre];
        setGenreOptions(updatedOptions);
        localStorage.setItem('genreOptions', JSON.stringify(updatedOptions));
      }

      setGenre(selectedValue);
      setInputValue(selectedLabel);
    } else {
      setGenre('NONE');
      setInputValue('');
    }
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputValue && inputValue.trim() !== '') {
      handleGenreChange(event, inputValue);
    }
  };

  useEffect(() => {
    if (genre.toLowerCase() !== 'none') {
      const prompt = `The story genre should be: ${genre}`;
      addGenre(prompt);
    } else {
      addGenre('');
    }
  }, [genre]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        options={genreOptions}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        value={genreOptions.find((option) => option.value === genre) || null}
        onChange={handleGenreChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label='Select Story Genre' variant='filled' onBlur={handleBlur} />
        )}
      />
    </FormControl>
  );
};

export default GenreSelect;
