﻿import React from 'react';
import { Typography, IconButton, Tooltip } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { grey } from '@mui/material/colors';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CodeContainer, CopyButtonContainer } from '@/components/codedisplay/CodeBlock.styles';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'jsx',
  showLineNumbers = true,
  className,
}) => {
  const normalizedCode = code
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(normalizedCode);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <CodeContainer className={className}>
      <CopyButtonContainer>
        <Tooltip title='Copy to clipboard'>
          <IconButton onClick={handleCopy} size='small' sx={{ color: grey[400] }}>
            <ContentCopyIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      </CopyButtonContainer>

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
