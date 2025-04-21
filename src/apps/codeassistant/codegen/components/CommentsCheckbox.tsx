import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const CommentsCheckbox: React.FC = () => {
  const { inclComments, setInclComments } = useCodegenContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInclComments(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={inclComments} onChange={handleChange} color='primary' />}
      label='Include Comments'
      sx={{ '& .MuiFormControlLabel-label': { fontSize: { xs: '12px', sm: '12px', md: '16px' } } }}
    />
  );
};

export default CommentsCheckbox;
