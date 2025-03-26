import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { openPromptService } from '@/service/OpenPromptService';
import FinanceDataCard from '@/apps/finance/FinanceDataCard';
import LoadingSkeleton from '@/components/loading/LoadingSkeleton';

export interface ICalendarData {
  dataPoint: string;
  releaseDate: string;
  description: string;
  previousValue: string;
  expectedValue: string;
  marketImpact: string;
}

const FinanceDataGrid: React.FC = () => {
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
    'Only respond with the data formatted as JSON',
    'Do not include ```json wrapping.',
    `JSON structured should be [{ dataPoint, releaseDate, description, previousValue, expectedValue, actualValue, marketImpact }]`,
  ];

  useEffect(() => {
    const fetchPromptResponse = async () => {
      try {
        const prompt = CALENDAR_PROMPTS.join('|');
        setIsLoading(true);
        const prompts: string[] = [prompt];

        openPromptService(prompts).then((data: string) => {
          setCalendarData(JSON.parse(data));
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPromptResponse();
  }, []);

  return (
    <Paper square elevation={5} sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
      <Typography variant={'h5'} sx={{ mb: 2 }}>
        Upcoming Data Releases
      </Typography>

      <Grid container spacing={1}>
        {isLoading && (
          <Paper sx={{ display: 'flex', width: '100%', height: '100%' }}>
            <LoadingSkeleton />
          </Paper>
        )}

        {!isLoading &&
          calendarData &&
          calendarData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FinanceDataCard item={item} />
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default FinanceDataGrid;
