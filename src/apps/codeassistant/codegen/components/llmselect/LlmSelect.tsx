import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import { llmOptions } from '@/apps/codeassistant/codegen/components/llmselect/LlmSelect.types';
import { LlmOptionType } from '@/apps/codeassistant/codegen/CodeGen.types';

const LlmSelect: React.FC = () => {
  const context = useCodegenContext();

  const handleClick = (option: LlmOptionType) => {
    context.updateCodeGen({ request: { ...context.codeGen.request, llmOption: option } });
  };

  return (
    <ButtonGroup variant='contained' aria-label='LLM selection' sx={{ maxHeight: '40px' }}>
      {llmOptions.map((option) => {
        return (
          <Button
            onClick={() => handleClick(option.value)}
            color={context.codeGen.request.llmOption === option.value ? 'primary' : 'inherit'}
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
