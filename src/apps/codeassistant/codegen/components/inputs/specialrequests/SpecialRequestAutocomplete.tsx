import { Button, Stack, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import {
  ISpecialRequest,
  SpecialRequestOptions,
} from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequests.types';
import { v4 as uuidv4 } from 'uuid';

export const SpecialRequestAutocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<ISpecialRequest[]>(SpecialRequestOptions);
  const [promptValue, setPromptValue] = useState('');

  const context = useCodegenContext();

  const handleAddOption = () => {
    if (inputValue && !context.specialRequests.some((opt) => opt.label === inputValue)) {
      const newOption: ISpecialRequest = {
        id: uuidv4(),
        label: inputValue,
        prompt: promptValue || `Prompt for ${inputValue}`,
      };
      context.addSpecialRequest(newOption);
      setOptions((prev) => [...prev, newOption]);
      setInputValue('');
      setPromptValue('');
    }
  };

  const filterOptions = () => {
    const defaults = SpecialRequestOptions;
    const selectedIds = context.specialRequests.map((sr) => sr.id);
    setOptions(defaults.filter((o) => !selectedIds.includes(o.id)));
  };

  useEffect(() => {
    filterOptions();
  }, [options]);

  return (
    <Stack sx={{ gap: 2 }}>
      <Autocomplete
        freeSolo
        options={options}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        value={null}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
        onChange={(_, newValue) => {
          if (typeof newValue !== 'string' && newValue) {
            context.addSpecialRequest(newValue);
            setInputValue('');
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label='Add Option' variant='outlined' sx={{ width: '100%' }} />
        )}
        sx={{ width: '100%' }}
      />

      {inputValue && !options.some((opt) => opt.label === inputValue) && (
        <TextField
          label='Prompt'
          value={promptValue}
          onChange={(e) => setPromptValue(e.target.value)}
          variant='outlined'
          sx={{ width: '100%' }}
        />
      )}

      {inputValue && !options.some((opt) => opt.label === inputValue) && (
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
