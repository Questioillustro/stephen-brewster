﻿import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';

export interface QuoteSelectProps {
  addGender: (prompt: string) => void;
}
const GenderSelect = (props: QuoteSelectProps) => {
  const { addGender } = props;
  const [gender, setGender] = useState<string>('Male');
  const handleGenderSelect = (selectedGender: 'Male' | 'Female') => {
    setGender(selectedGender);
  };
  useEffect(() => {
    if (gender) {
      const prompt = `Main character's gender is ${gender}.`;
      addGender(prompt);
    }
  }, [gender]);
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
      <Button
        onClick={() => handleGenderSelect('Male')}
        sx={{
          padding: 0,
          border: gender === 'Male' ? '0.25rem solid blue' : 'none',
          borderRadius: '0.25rem',
          '&:hover': { opacity: 0.8 },
        }}
      >
        <img
          src='https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/boy.jpg'
          alt='Select Male'
          style={{ width: '6.25rem', height: '6.25rem' }}
        />
      </Button>
      <Button
        onClick={() => handleGenderSelect('Female')}
        sx={{
          padding: 0,
          border: gender === 'Female' ? '0.25rem solid pink' : 'none',
          borderRadius: '0.25rem',
          '&:hover': { opacity: 0.8 },
        }}
      >
        <img
          src='https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/girl.jpg'
          alt='Select Female'
          style={{ width: '6.25rem', height: '6.25rem' }}
        />
      </Button>
    </Box>
  );
};
export default GenderSelect;
