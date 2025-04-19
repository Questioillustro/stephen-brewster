import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const SeparateStylesFile = () => {
  const { separateStyles, setSeparateStyles } = useCodegenContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeparateStyles(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={separateStyles} onChange={handleChange} color='primary' />}
      label='Styles File'
    />
  );
};

export default SeparateStylesFile;
