import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import {
  LlmOptionType,
  useCodegenContext,
} from '@/apps/codeassistant/codegen/context/CodegenContext';

const LlmSelect: React.FC = () => {
  const [value, setValue] = React.useState<LlmOptionType>('grok');
  const codeGenContext = useCodegenContext();

  const handleClick = (option: LlmOptionType) => {
    setValue(option);
    codeGenContext.setLlmOption(option);
  };

  return (
    <ButtonGroup variant='contained' aria-label='LLM selection'>
      <Button onClick={() => handleClick('grok')} color={value === 'grok' ? 'primary' : 'inherit'}>
        Grok
      </Button>
      <Button
        onClick={() => handleClick('chatgpt')}
        color={value === 'chatgpt' ? 'primary' : 'inherit'}
      >
        ChatGPT
      </Button>
    </ButtonGroup>
  );
};

export default LlmSelect;
