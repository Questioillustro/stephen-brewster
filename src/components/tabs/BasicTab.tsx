import React, { useState } from 'react';
import { Tabs, Tab, Box, Paper } from '@mui/material';

export interface TabData {
  label: string;
  content: React.ReactNode;
}

interface TabbedContentProps {
  tabs: TabData[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const TabbedContent: React.FC<TabbedContentProps> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label='tabs'>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Paper>
  );
};

export default TabbedContent;
