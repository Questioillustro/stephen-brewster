import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import {
  LlmOptionType,
  useCodegenContext,
} from '@/apps/codeassistant/codegen/context/CodegenContext';

const LlmSelect: React.FC = () => {
  const [value, setValue] = React.useState<LlmOptionType>('grok');

  const codeGenContext = useCodegenContext();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const option: LlmOptionType = event.target.value as LlmOptionType;
    setValue(option);
    codeGenContext.setLlmOption(option);
  };

  return (
    <FormControl style={{ minWidth: 120 }}>
      <InputLabel id='select-label'>LLM</InputLabel>
      <Select labelId='select-label' value={value} label='Choose' onChange={handleChange}>
        <MenuItem value='grok'>Grok</MenuItem>
        <MenuItem value='chatgpt'>ChatGPT</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LlmSelect;
