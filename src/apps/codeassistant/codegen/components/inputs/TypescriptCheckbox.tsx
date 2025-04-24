import React, { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const TypescriptCheckbox: React.FC = () => {
  const { useTypescript, setUseTypescript } = useCodegenContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseTypescript(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={useTypescript} onChange={handleChange} color='primary' />}
      label='Typescript'
      sx={{ '& .MuiFormControlLabel-label': { fontSize: { xs: '12px', sm: '12px', md: '16px' } } }}
    />
  );
};

export default TypescriptCheckbox;
