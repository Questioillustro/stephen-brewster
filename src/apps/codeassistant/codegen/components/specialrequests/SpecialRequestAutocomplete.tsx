import { Button, Stack, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { SpecialRequestOptions } from './SpecialRequests.types';

export const SpecialRequestAutocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<string[]>(SpecialRequestOptions);

  const context = useCodegenContext();

  const handleAddOption = () => {
    if (
      inputValue &&
      !(context.codeGen.request.specialRequests ?? []).some((opt) => opt === inputValue)
    ) {
      context.addSpecialRequest(inputValue);
      setOptions((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };

  const filterOptions = () => {
    const defaults = SpecialRequestOptions;
    setOptions(
      defaults.filter((o) => !(context.codeGen.request.specialRequests ?? []).includes(o)),
    );
  };

  useEffect(() => {
    filterOptions();
  }, [options]);

  return (
    <Stack sx={{ gap: 2 }}>
      <Autocomplete
        freeSolo
        options={options}
        value={null}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
        onChange={(_, newValue) => {
          if (newValue) {
            context.addSpecialRequest(newValue);
            setInputValue('');
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Add Option'
            placeholder={'Enter a new special request...'}
            variant='outlined'
            sx={{ width: '100%' }}
          />
        )}
        sx={{ width: '100%' }}
      />

      {inputValue && !options.some((opt) => opt === inputValue) && (
        <Button
          variant='contained'
          onClick={handleAddOption}
          sx={{ alignSelf: 'flex-start', backgroundColor: '#1976d2' }}
        >
          Save
        </Button>
      )}
    </Stack>
  );
};
