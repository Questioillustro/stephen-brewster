import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { UiLibraryMap } from '@/apps/codeassistant/codegen/data/AllOptions';
import { Autocomplete, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface UiLibraryAutoCompleteProps {
  framework?: string;
}

export const UiLibraryAutoComplete: React.FC<UiLibraryAutoCompleteProps> = ({ framework }) => {
  const context = useCodegenContext();
  const [inputValue, setInputValue] = useState(context.codeGen.request.uiLibrary ?? '');

  useEffect(() => {
    setInputValue(context.codeGen.request.uiLibrary ?? '');
  }, [context.codeGen.request.uiLibrary]);

  const handleLibraryChange = (event: React.SyntheticEvent, value: string | null) => {
    const newValue = value ?? '';
    setInputValue(newValue);
    context.updateCodeGen({
      request: { ...context.codeGen.request, uiLibrary: newValue },
    });
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
    context.updateCodeGen({
      request: { ...context.codeGen.request, uiLibrary: newInputValue },
    });
  };

  return (
    <Autocomplete
      freeSolo
      options={UiLibraryMap[context.codeGen.request.framework ?? framework ?? ''] || []}
      value={context.codeGen.request.uiLibrary ?? ''}
      inputValue={inputValue}
      onChange={handleLibraryChange}
      onInputChange={handleInputChange}
      renderInput={(params) => <TextField {...params} label='UI Library' variant='outlined' />}
      sx={{ width: '100%' }}
    />
  );
};
