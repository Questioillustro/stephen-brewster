import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import nlp from 'compromise';
import compromiseDates from 'compromise-dates';
import { Input, Paper } from '@mui/material';
import Button from '@mui/material/Button';

// Define the type for an event
interface CalendarEvent {
  id: string;
  title: string;
  date: string;
}

interface CompromiseDate {
  text: string;
  terms: Array<{
    text: string;
    pre: string;
    post: string;
    tags: string[];
    normal: string;
    index: [number, number];
    id: string;
    dirty: boolean;
    chunk: string;
  }>;
  dates: {
    start: string;
    end: string | null;
    timezone: string;
    duration: {
      years: number;
      months: number;
      days: number;
      hours: number;
      minutes: number;
    };
  };
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [command, setCommand] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const handleCommand = () => {
    const nlpWithDates = nlp.extend(compromiseDates);
    const doc = nlpWithDates(command);

    const nouns = doc.nouns().out('array');

    let title: string;
    if (nouns.length > 0) {
      title = nouns[0];
    } else {
      const cleanedDoc = doc.clone().not('(schedule|add|plan|set)').normalize();
      const dates = doc.dates();
      if (dates.length > 0) {
        cleanedDoc.not(dates);
      }
      const remainingText = cleanedDoc.text().trim();
      title = remainingText || 'Untitled Event';
    }

    const dates = doc.dates().json();

    let eventDate: Date | null = null;

    if (dates && dates.length > 0 && dates[0].dates && dates[0].dates.start) {
      eventDate = new Date(dates[0].dates.start);
    } else {
      const lowerCommand = command.toLowerCase();
      if (lowerCommand.includes('tomorrow')) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        eventDate = tomorrow;
      } else if (lowerCommand.includes('today')) {
        eventDate = new Date();
      }
    }

    if (eventDate) {
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        title,
        date: eventDate.toISOString().split('T')[0],
      };
      setEvents([...events, newEvent]);
    } else {
      alert('Could not parse date. Please try again.');
    }
    setCommand('');
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const handleEventClick = (arg: { event: { id: string } }) => {
    if (window.confirm('Delete this event?')) {
      handleDeleteEvent(arg.event.id);
    }
  };

  return (
    <Paper
      square
      style={{
        padding: '1.25rem',
      }}
    >
      <h1>Calendar Agent</h1>
      <Paper
        square
        elevation={10}
        sx={{
          padding: '1rem',
          display: 'flex',
          width: '100%',
          marginBottom: '1.25rem',
          columnGap: '1.25rem',
        }}
      >
        <Input
          type='text'
          sx={{ minWidth: '30rem' }}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder='e.g., Schedule a meeting tomorrow at 2 PM'
        />
        <Button onClick={handleCommand}>Add Event</Button>
      </Paper>

      <Paper
        elevation={5}
        sx={{
          width: '100%',
          padding: '1rem',
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          events={events}
          eventClick={handleEventClick}
          editable={true}
          selectable={true}
          contentHeight='auto'
        />
      </Paper>
    </Paper>
  );
};

export default Calendar;
