import Calendar from '@/apps/agents/calendar/Calendar';
import React from 'react';
import { Paper } from '@mui/material';

export const Agents: React.FC = () => {
  return (
    <Paper square sx={{ width: '100%', display: 'flex' }}>
      <Calendar />
    </Paper>
  );
};
