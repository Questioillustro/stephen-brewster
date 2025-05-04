import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { FrontEndFrameworkOptionsLabels } from '@/apps/codeassistant/codegen/data/AllOptions';
import { Autocomplete, TextField } from '@mui/material';

import React from 'react';

export const FeFrameworkAutocomplete = () => {
  const context = useCodegenContext();

  const handleFrameworkChange = (event: React.SyntheticEvent, value: string | null) => {
    context.updateCodeGen({
      request: { ...context.codeGen.request, framework: value ?? '' },
    });
  };

  return (
    <Autocomplete
      options={Object.values(FrontEndFrameworkOptionsLabels)}
      value={context.codeGen.request.framework ?? ''}
      onChange={handleFrameworkChange}
      renderInput={(params) => <TextField {...params} label='FE Framework' variant='outlined' />}
      sx={{ width: '100%' }}
    />
  );
};
