import React from 'react';
import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  dir?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  dir = 'ltr',
  ...other
}) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`code-tabpanel-${index}`}
      aria-labelledby={`code-tab-${index}`}
      {...other}
      style={{ transition: 'opacity 0.3s ease' }}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};
