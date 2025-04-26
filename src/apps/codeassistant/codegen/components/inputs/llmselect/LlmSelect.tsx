import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { llmOptions } from '@/apps/codeassistant/codegen/components/inputs/llmselect/LlmSelect.types';
import { LlmOptionType } from '@/apps/codeassistant/codegen/CodeGen.types';

const LlmSelect: React.FC = () => {
  const [value, setValue] = React.useState<LlmOptionType>('grok');
  const codeGenContext = useCodegenContext();

  const handleClick = (option: LlmOptionType) => {
    setValue(option);
    codeGenContext.setLlmOption(option);
  };

  return (
    <ButtonGroup variant='contained' aria-label='LLM selection'>
      {llmOptions.map((option) => {
        return (
          <Button
            onClick={() => handleClick(option.value)}
            color={value === option.value ? 'primary' : 'inherit'}
            disabled={!option.available}
          >
            {option.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default LlmSelect;
