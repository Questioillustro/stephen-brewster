import { FormControl, InputLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface AgeInputProps {
  setAge: (age: number) => void;
}

const AgeInput = (props: AgeInputProps) => {
  const { setAge } = props;

  const [ageValue, setAgeValue] = useState<number>(8);

  return (
    <FormControl variant={'filled'} fullWidth>
      <TextField
        label='Enter Age'
        type='number'
        value={ageValue}
        onChange={(event) => setAge(Number(event.target.value))}
        inputProps={{
          min: 0,
          max: 150,
          step: 1,
        }}
        placeholder='Enter an age'
      />
    </FormControl>
  );
};

export default AgeInput;
