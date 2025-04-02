import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { grey } from '@mui/material/colors';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: grey[900],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  overflow: 'auto',
  margin: theme.spacing(1, 0),
}));

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  showLineNumbers = true,
  className,
}) => {
  // Normalize the code string
  const normalizedCode = code
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\n');

  return (
    <CodeContainer className={className}>
      <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mb: 1 }}>
        {language.toUpperCase()}
      </Typography>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1rem',
          borderRadius: '4px',
          background: 'transparent',
        }}
        codeTagProps={{
          style: {
            fontFamily: '"Fira Code", "Consolas", monospace',
          },
        }}
      >
        {normalizedCode}
      </SyntaxHighlighter>
    </CodeContainer>
  );
};

export default CodeBlock;
