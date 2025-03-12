import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import CodeBlock from '@/components/codedisplay/CodeBlock';

interface PythonScriptsProps {
  scripts: string[];
}

interface ScriptContent {
  name: string;
  content: string;
  error?: string;
}

export const PythonScripts: React.FC<PythonScriptsProps> = ({ scripts }) => {
  const [scriptContents, setScriptContents] = useState<ScriptContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadScripts = async () => {
      setLoading(true);
      const contents: ScriptContent[] = await Promise.all(
        scripts.map(async (scriptName) => {
          try {
            // Import the .py file to get its URL
            const scriptModule = await import(`./scripts/${scriptName}`);
            const scriptUrl = scriptModule.default; // This will be the URL (e.g., /static/media/...)
            console.log(`Imported URL for ${scriptName}:`, scriptUrl);

            // Fetch the raw content using the URL
            const response = await fetch(scriptUrl);
            if (!response.ok) {
              throw new Error(`Failed to fetch ${scriptName}: ${response.statusText}`);
            }
            const scriptContent = await response.text();
            return { name: scriptName, content: scriptContent };
          } catch (error) {
            console.error(`Error loading ${scriptName}:`, error);
            return {
              name: scriptName,
              content: '',
              error: `Error loading script: ${
                error instanceof Error ? error.message : 'Unknown error'
              }`,
            };
          }
        }),
      );
      console.log('Loaded script contents:', contents);
      setScriptContents(contents);
      setLoading(false);
    };

    loadScripts();
  }, [scripts]);

  const scriptComponents = scriptContents.map((script, index) => (
    <div key={index}>
      <Typography variant='h6' gutterBottom>
        {script.name}
      </Typography>
      {script.error ? (
        <Typography color='error'>{script.error}</Typography>
      ) : (
        <CodeBlock code={script.content} language='python' showLineNumbers />
      )}
    </div>
  ));

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Python Scripts
      </Typography>
      {loading ? (
        <Typography>Loading scripts...</Typography>
      ) : scriptComponents.length > 0 ? (
        <div>{scriptComponents}</div>
      ) : (
        <Typography>No scripts available</Typography>
      )}
    </Container>
  );
};
