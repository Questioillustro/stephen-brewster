import nlp from 'compromise';
import compromiseDates from 'compromise-dates';
import { RRule } from 'rrule'; // Import RRule for generating recurrence rules

// Define the FullCalendar event type
export interface FullCalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  rrule?: string;
  duration?: string;
  extendedProps?: {
    description?: string;
    originalEvent?: any;
  };
}

// Internal type for recurrence pattern
type RecurrencePattern = 'daily' | 'weekly' | 'monthly' | 'yearly';

// Internal event type used during parsing
interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  duration?: number;
  description?: string;
  recurrence?: {
    pattern: RecurrencePattern;
    interval: number;
    endDate?: string;
    dayOfWeek?: number;
  };
}

export const parseCommand = (
  command: string,
  setEvents: React.Dispatch<React.SetStateAction<FullCalendarEvent[]>>, // Update to FullCalendarEvent
  events: FullCalendarEvent[],
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const nlpWithDates = nlp.extend(compromiseDates);
  const doc = nlpWithDates(command);
  const lowerCommand = command.toLowerCase();

  // Command type detection
  if (
    lowerCommand.includes('delete') ||
    lowerCommand.includes('remove') ||
    lowerCommand.includes('cancel')
  ) {
    handleDeleteCommand(doc, events, setEvents, setCommand);
    return;
  }

  // Extract date, time, and duration
  const { eventDate, eventTime, duration } = extractDateTime(doc, command);

  // Extract recurrence pattern
  const recurrence = extractRecurrence(doc, command);

  // Extract title (base title without time)
  let baseTitle = extractTitle(doc);

  // Extract description (if any)
  const description = extractDescription(doc);

  // Combine base title with time if available
  let finalTitle = baseTitle || 'Untitled Event';
  if (eventTime) {
    finalTitle = `${finalTitle} at ${formatTimeForTitle(eventTime)}`;
  }

  // Validate and create event
  if (eventDate) {
    // Create internal CalendarEvent
    const internalEvent: CalendarEvent = {
      id: Date.now().toString(),
      title: finalTitle,
      date: eventDate.toISOString().split('T')[0],
      ...(eventTime && { time: eventTime }),
      ...(duration && { duration }),
      ...(description && { description }),
      ...(recurrence && { recurrence }),
    };

    // Convert to FullCalendar event format
    const fullCalendarEvent = convertToFullCalendarEvent(internalEvent);
    setEvents([...events, fullCalendarEvent]);
    setCommand('');
  } else {
    alert('Could not parse date. Please specify a date or use terms like "today" or "tomorrow".');
    setCommand('');
  }
};

// Helper to convert our internal event format to FullCalendar format
const convertToFullCalendarEvent = (event: CalendarEvent): FullCalendarEvent => {
  const startDateTime = event.time ? `${event.date}T${event.time}:00` : `${event.date}T00:00:00`;

  const fullCalendarEvent: FullCalendarEvent = {
    id: event.id,
    title: event.title,
    start: startDateTime,
  };

  // Add end time if duration exists
  if (event.duration) {
    const durationMs = event.duration * 60 * 1000; // Convert minutes to milliseconds
    const startDate = new Date(startDateTime);
    const endDate = new Date(startDate.getTime() + durationMs);
    fullCalendarEvent.end = endDate.toISOString();
    fullCalendarEvent.duration = `${Math.floor(event.duration / 60)}:${(event.duration % 60).toString().padStart(2, '0')}`;
  }

  // Add recurrence if it exists
  if (event.recurrence) {
    const rruleOptions: any = {
      freq: getRRuleFreq(event.recurrence.pattern),
      interval: event.recurrence.interval,
      dtstart: new Date(startDateTime),
    };

    // Add day of week for weekly recurrence
    if (event.recurrence.pattern === 'weekly' && event.recurrence.dayOfWeek !== undefined) {
      rruleOptions.byweekday = [event.recurrence.dayOfWeek];
    }

    // Add end date if specified
    if (event.recurrence.endDate) {
      rruleOptions.until = new Date(`${event.recurrence.endDate}T23:59:59`);
    }

    const rule = new RRule(rruleOptions);
    fullCalendarEvent.rrule = rule.toString();
  }

  // Add extended props for description and original event
  if (event.description || event) {
    fullCalendarEvent.extendedProps = {
      ...(event.description && { description: event.description }),
      originalEvent: event,
    };
  }

  return fullCalendarEvent;
};

// Helper to map our recurrence pattern to RRule frequency
const getRRuleFreq = (pattern: RecurrencePattern): number => {
  switch (pattern) {
    case 'daily':
      return RRule.DAILY;
    case 'weekly':
      return RRule.WEEKLY;
    case 'monthly':
      return RRule.MONTHLY;
    case 'yearly':
      return RRule.YEARLY;
    default:
      return RRule.DAILY;
  }
};

const formatTimeForTitle = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
};

const extractTitle = (doc: any): string => {
  const nouns = doc.nouns().out('array');
  if (nouns.length > 0) {
    return nouns.join(' ');
  }

  const cleanedDoc = doc
    .clone()
    .not('(schedule|add|plan|set|at|on|every|daily|weekly|monthly|yearly)')
    .not('#Time')
    .not('#Date')
    .not('(sunday|monday|tuesday|wednesday|thursday|friday|saturday)')
    .normalize();

  return cleanedDoc.text().trim() || '';
};

const extractDateTime = (
  doc: any,
  command: string,
): {
  eventDate: Date | null;
  eventTime: string | null;
  duration: number | null;
} => {
  const dates = doc.dates().json();
  const lowerCommand = command.toLowerCase();

  let eventDate: Date | null = null;
  let eventTime: string | null = null;
  let duration: number | null = null;

  if (dates && dates.length > 0 && dates[0].dates && dates[0].dates.start) {
    eventDate = new Date(dates[0].dates.start);

    const startDate = new Date(dates[0].dates.start);
    if (startDate.getHours() !== 0 || startDate.getMinutes() !== 0) {
      eventTime = startDate.toTimeString().split(' ')[0].slice(0, 5);
    }

    if (dates[0].dates.duration) {
      const { hours, minutes } = dates[0].dates.duration;
      duration = hours * 60 + minutes;
    }
  } else {
    if (lowerCommand.includes('tomorrow')) {
      eventDate = new Date();
      eventDate.setDate(eventDate.getDate() + 1);
    } else if (lowerCommand.includes('today')) {
      eventDate = new Date();
    }
  }

  // If no specific date but has recurrence with day of week (e.g., "every Friday")
  if (!eventDate && lowerCommand.includes('every')) {
    const dayOfWeekMatch = lowerCommand.match(
      /(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/,
    );
    if (dayOfWeekMatch) {
      const targetDay = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ].indexOf(dayOfWeekMatch[0]);

      eventDate = new Date();
      const currentDay = eventDate.getDay();
      const daysUntilTarget = (targetDay - currentDay + 7) % 7 || 7; // Get next occurrence
      eventDate.setDate(eventDate.getDate() + daysUntilTarget);
    }
  }

  if (!eventTime) {
    const times = doc.times().json();
    if (times.length > 0 && times[0].time) {
      eventTime = times[0].time;
    }
  }

  if (!duration) {
    const durations = doc.match('#Duration').json();
    if (durations.length > 0) {
      const hoursMatch = doc.match('#Number hour(s)').json();
      const minutesMatch = doc.match('#Number minute(s)').json();

      let totalMinutes = 0;
      if (hoursMatch.length > 0) {
        totalMinutes += parseInt(hoursMatch[0].text.match(/\d+/)[0]) * 60;
      }
      if (minutesMatch.length > 0) {
        totalMinutes += parseInt(minutesMatch[0].text.match(/\d+/)[0]);
      }
      duration = totalMinutes > 0 ? totalMinutes : null;
    }
  }

  return { eventDate, eventTime, duration };
};

const extractRecurrence = (doc: any, command: string): CalendarEvent['recurrence'] | undefined => {
  console.log('doc', doc);
  console.log('command', command);
  const lowerCommand = command.toLowerCase();

  // Check for any recurrence indicators
  const hasRecurrence =
    lowerCommand.includes('every') ||
    lowerCommand.includes('daily') ||
    lowerCommand.includes('weekly') ||
    lowerCommand.includes('monthly') ||
    lowerCommand.includes('yearly') ||
    (lowerCommand.includes('every') &&
      lowerCommand.match(/(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/));

  if (!hasRecurrence) {
    return undefined;
  }

  let pattern: RecurrencePattern = 'daily';
  let interval = 1;
  let endDate: string | undefined;
  let dayOfWeek: number | undefined;

  // Detect pattern
  if (lowerCommand.includes('daily')) {
    pattern = 'daily';
  } else if (lowerCommand.includes('weekly')) {
    pattern = 'weekly';
  } else if (lowerCommand.includes('monthly')) {
    pattern = 'monthly';
  } else if (lowerCommand.includes('yearly')) {
    pattern = 'yearly';
  }

  // Detect interval (e.g., "every 2 weeks")
  const intervalMatch = doc.match('every #Number (day|week|month|year)').json();
  if (intervalMatch.length > 0) {
    const number = parseInt(intervalMatch[0].text.match(/\d+/)[0]);
    interval = number;

    const unit = intervalMatch[0].text.match(/(day|week|month|year)/)?.[0];
    if (unit) {
      switch (unit) {
        case 'day':
          pattern = 'daily';
          break;
        case 'week':
          pattern = 'weekly';
          break;
        case 'month':
          pattern = 'monthly';
          break;
        case 'year':
          pattern = 'yearly';
          break;
      }
    }
  }

  // Detect specific day of week for weekly recurrence (e.g., "every Friday")
  const dayOfWeekMatch = lowerCommand.match(
    /(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/,
  );
  if (dayOfWeekMatch && lowerCommand.includes('every')) {
    pattern = 'weekly'; // Explicitly set to weekly when a day of week is mentioned with "every"
    dayOfWeek = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ].indexOf(dayOfWeekMatch[0]);
  }

  // Detect end date (e.g., "until December 31")
  const untilMatch = doc.match('(until|till|through) #Date').json();
  if (untilMatch.length > 0) {
    const endDates = doc.match('#Date').last().dates().json();
    if (endDates.length > 0 && endDates[0].dates && endDates[0].dates.start) {
      endDate = new Date(endDates[0].dates.start).toISOString().split('T')[0];
    }
  }

  return {
    pattern,
    interval,
    ...(endDate && { endDate }),
    ...(dayOfWeek !== undefined && { dayOfWeek }),
  };
};

const extractDescription = (doc: any): string | undefined => {
  const descriptionMatch = doc.match('(about|for|to) .+').text();
  return descriptionMatch ? descriptionMatch : undefined;
};

const handleDeleteCommand = (
  doc: any,
  events: FullCalendarEvent[],
  setEvents: React.Dispatch<React.SetStateAction<FullCalendarEvent[]>>,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const titleMatch = doc.nouns().out('array');
  if (titleMatch.length === 0) {
    alert('Please specify an event to delete');
    setCommand('');
    return;
  }

  const titleToDelete = titleMatch.join(' ').toLowerCase();
  const dates = doc.dates().json();
  let dateToDelete: string | null = null;

  if (dates && dates.length > 0 && dates[0].dates && dates[0].dates.start) {
    dateToDelete = new Date(dates[0].dates.start).toISOString().split('T')[0];
  }

  const filteredEvents = events.filter((event) => {
    const matchesTitle = event.title.toLowerCase().includes(titleToDelete);
    const matchesDate = dateToDelete ? event.start.includes(dateToDelete) : true;
    return !(matchesTitle && matchesDate);
  });

  setEvents(filteredEvents);
  setCommand('');
};
