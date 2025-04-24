import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import CodeBlock from '@/components/codedisplay/CodeBlock';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';

const CodeTabs: React.FC = () => {
  const [value, setValue] = useState(0);

  const context = useCodegenContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label='Code' />

        {context.codeDisplay?.styles && <Tab label='Styles' />}
      </Tabs>

      {value === 0 && context.codeDisplay?.code && (
        <Box style={{ padding: '20px' }}>
          <CodeBlock
            code={context.codeDisplay.code}
            language={context.framework?.syntaxHighlighter ?? 'js'}
          />
        </Box>
      )}
    </Box>
  );
};

export default CodeTabs;
