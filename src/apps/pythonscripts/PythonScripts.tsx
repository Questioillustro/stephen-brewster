// PythonScripts.tsx
import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper } from '@mui/material';
import CodeBlock from '@/components/codedisplay/CodeBlock';
import SBAccordion from '@/components/accordion/SBAccordion';
import { scriptService } from '@/service/ScriptService';

interface ScriptContent {
  name: string;
  content: string;
  error?: string;
}

const scripts = ['calculator.py', 'quotes.py'];

export const PythonScripts: React.FC = () => {
  const [scriptContents, setScriptContents] = useState<ScriptContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScripts = async () => {
      setLoading(true);
      try {
        const contents = await scriptService.loadScripts(scripts);
        console.log('Loaded script contents:', contents);
        setScriptContents(contents);
      } catch (error) {
        console.error('Error fetching scripts:', error);
        setScriptContents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchScripts();
  }, []); // Remove scripts from dependency array since we're not using it directly

  const scriptComponents = scriptContents.map((script, index) => (
    <div key={index}>
      {script.error ? (
        <Typography color='error'>{script.error}</Typography>
      ) : (
        <SBAccordion
          title={script.name}
          content={<CodeBlock code={script.content} language='python' showLineNumbers />}
        />
      )}
    </div>
  ));

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      {loading ? (
        <Typography>Loading scripts...</Typography>
      ) : scriptComponents.length > 0 ? (
        <Paper square sx={{ rowGap: '1.25rem', display: 'flex', flexDirection: 'column' }}>
          {scriptComponents}
        </Paper>
      ) : (
        <Typography>No scripts available</Typography>
      )}
    </Container>
  );
};
