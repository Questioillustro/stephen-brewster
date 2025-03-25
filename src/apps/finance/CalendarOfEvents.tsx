import { Box, Card, CardContent, Chip, Divider, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { openPromptService } from '@/service/OpenPromptService';
import parse from 'html-react-parser';
import LoadingStory from '@/apps/cyoa/components/activestory/LoadingStory';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

export interface ICalendarData {
  dataPoint: string;
  releaseDate: string;
  description: string;
  previousValue: string;
  expectedValue: string;
  marketImpact: string;
}

const CalendarOfEvents: React.FC = () => {
  const [calendarData, setCalendarData] = useState<ICalendarData[]>();

  const [isLoading, setIsLoading] = useState(false);

  const getDateRange = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 1); // Start tomorrow

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6); // Add 6 days to get 7 days total

    const formatDate = (date) => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    return `${formatDate(startDate)}-${formatDate(endDate)}`;
  };

  const CALENDAR_PROMPTS = [
    `Provide a calendar of key U.S. financial data releases for the date range ${getDateRange()}, formatted as JSON.`,
    'Include a description of what the data point is and which period of time this data point is measuring.',
    'Include previous value.',
    'Include expected values where available.',
    'Estimate the impact that the data point will have on the stock market.',
    'Only response with the data formatted as JSON',
    'Do not include ```json wrapping.',
    `JSON structured should be [{ dataPoint, releaseDate, description, previousValue, expectedValue, actualValue, marketImpact }]`,
    `Do not include any backslashes or '\\n' characters`,
  ];

  useEffect(() => {
    const fetchPromptResponse = async () => {
      try {
        const prompt = CALENDAR_PROMPTS.join('|');
        setIsLoading(true);
        const prompts: string[] = [prompt];
        const result: ICalendarData[] = await openPromptService(prompts);
        setCalendarData(result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPromptResponse();
  }, []);

  // Styled components for custom styling
  const ImpactChip = styled(Chip)(({ theme }) => ({
    marginLeft: '1rem',
  }));

  const DataCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }));

  const getImpactColor = (impact: string) => {
    switch (impact.split(' -')[0].toLowerCase()) {
      case 'high':
        return 'error';
      case 'moderate':
        return 'warning';
      default:
        return 'info';
    }
  };

  if (isLoading) {
    return <LoadingStory />;
  } else if (calendarData) {
    return (
      <Paper square elevation={2} sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
        <Typography variant={'h5'}>Upcoming Data Releases</Typography>
        <Grid container spacing={1}>
          {calendarData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DataCard>
                <CardContent>
                  <Box display='flex' alignItems='center' mb={1}>
                    <Typography variant='h6' component='h2'>
                      {item.dataPoint}
                    </Typography>
                    <ImpactChip
                      label={item.marketImpact.split(' -')[0]}
                      color={getImpactColor(item.marketImpact)}
                      size='small'
                    />
                  </Box>

                  <Typography color='text.secondary' gutterBottom>
                    Release Date: {new Date(item.releaseDate).toLocaleDateString()}
                  </Typography>

                  <Typography variant='body2' paragraph>
                    {item.description}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  <Box display='flex' justifyContent='space-between' mb={1}>
                    <Typography variant='body2'>
                      Previous: <strong>{item.previousValue}</strong>
                    </Typography>
                    <Typography variant='body2'>
                      Expected: <strong>{item.expectedValue}</strong>
                    </Typography>
                  </Box>

                  <Typography variant='caption' color='text.secondary'>
                    {item.marketImpact.split(' - ')[1]}
                  </Typography>
                </CardContent>
              </DataCard>
            </Grid>
          ))}
        </Grid>
      </Paper>
    );
  } else {
    return <div>No data</div>;
  }
};

export default CalendarOfEvents;
