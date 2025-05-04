import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { UiLibraryMap } from '@/apps/codeassistant/codegen/data/AllOptions';
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

export const UiLibraryAutoComplete = () => {
  const context = useCodegenContext();

  const handleLibraryChange = (event: React.SyntheticEvent, value: string | null) => {
    context.updateCodeGen({
      request: { ...context.codeGen.request, uiLibrary: value ?? '' },
    });
  };

  return (
    <Autocomplete
      options={UiLibraryMap[context.codeGen.request.framework ?? ''] || []}
      value={context.codeGen.request.uiLibrary ?? ''}
      onChange={handleLibraryChange}
      renderInput={(params) => <TextField {...params} label='UI Library' variant='outlined' />}
      sx={{ width: '100%' }}
    />
  );
};
