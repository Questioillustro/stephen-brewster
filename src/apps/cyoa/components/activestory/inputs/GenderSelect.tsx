import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export interface QuoteSelectProps {
  addGender: (prompt: string) => void;
}

export type IGender = 'Random' | 'Male' | 'Female';

const GenderSelect = (props: QuoteSelectProps) => {
  const { addGender } = props;

  const [gender, setGender] = useState<string>('Random');

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setGender(value);
  };

  useEffect(() => {
    if (gender !== 'Random') {
      const prompt = `Main character's gender is ${gender}`;
      addGender(prompt);
    } else {
      addGender('');
    }
  }, [gender]);

  return (
    <FormControl variant={'filled'} fullWidth>
      <InputLabel id='gender-select-label'>Main Character Gender</InputLabel>
      <Select
        labelId='gender-select-label'
        id='gender-select'
        value={gender}
        label='Gender'
        defaultValue={'Random'}
        onChange={handleChange}
      >
        <MenuItem value={'Random'}>Random</MenuItem>
        <MenuItem value={'Male'}>Male</MenuItem>
        <MenuItem value={'Female'}>Female</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GenderSelect;
