// ScriptList.tsx
import React from 'react';
import { Box } from '@mui/material';

interface ScriptListProps {
  scripts: React.ReactNode[];
}

export const ScriptList: React.FC<ScriptListProps> = ({ scripts }) => {
  return (
    <Box sx={{ mt: 2 }}>
      {scripts.map((script, index) => (
        <Box key={index}>{script}</Box>
      ))}
    </Box>
  );
};
