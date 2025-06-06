﻿/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Input, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import {
  calendarContainerStyles,
  headerStyles,
  inputContainerStyles,
  inputStyles,
  calendarWrapperStyles,
} from './Calendar.style';

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<[]>(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [command, setCommand] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const handleCommand = () => {};

  return (
    <Paper css={calendarContainerStyles} square>
      <h1 css={headerStyles}>Calendar Agent</h1>
      <Paper square elevation={10} css={inputContainerStyles}>
        <Input
          type='text'
          css={inputStyles}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder='e.g., Schedule a meeting tomorrow at 2 PM'
        />
        <Button onClick={handleCommand}>Add Event</Button>
      </Paper>

      <Paper elevation={5} css={calendarWrapperStyles}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          events={events}
          editable={true}
          selectable={true}
          contentHeight='auto'
        />
      </Paper>
    </Paper>
  );
};

export default Calendar;
