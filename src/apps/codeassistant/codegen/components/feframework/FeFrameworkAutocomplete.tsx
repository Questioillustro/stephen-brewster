import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { FrontEndFrameworkOptionsLabels } from '@/apps/codeassistant/codegen/data/AllOptions';
import { Autocomplete, TextField } from '@mui/material';

import React, { useEffect, useState } from 'react';

export const FeFrameworkAutocomplete = () => {
  const context = useCodegenContext();
  const [inputValue, setInputValue] = useState(context.codeGen.request.framework ?? '');

  useEffect(() => {
    setInputValue(context.codeGen.request.framework ?? '');
  }, [context.codeGen.request.framework]);

  const handleFrameworkChange = (event: React.SyntheticEvent, value: string | null) => {
    const newValue = value ?? '';
    setInputValue(newValue);
    context.updateCodeGen({
      request: { ...context.codeGen.request, framework: value ?? '' },
    });
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
    context.updateCodeGen({
      request: { ...context.codeGen.request, framework: newInputValue },
    });
  };

  return (
    <Autocomplete
      options={Object.values(FrontEndFrameworkOptionsLabels)}
      value={context.codeGen.request.framework ?? ''}
      onChange={handleFrameworkChange}
      onInputChange={handleInputChange}
      renderInput={(params) => <TextField {...params} label='FE Framework' variant='outlined' />}
      sx={{ width: '100%' }}
    />
  );
};
