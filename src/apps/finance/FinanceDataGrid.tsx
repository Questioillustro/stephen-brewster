import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LLMIdentifier, openPromptService } from '@/service/OpenPromptService';
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

export const FinanceDataLlmModel: LLMIdentifier = 'grok';

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
    `JSON structured should be [{ dataPoint, releaseDate, description, previousValue, expectedValue, actualValue, marketImpact }].`,
    'Include a description of what the data point is and which period of time this data point is measuring.',
    'Include previous value.',
    'Include expected values where available.',
    'Estimate the impact that the data point will have on the stock market.',
    'Only respond with the JSON data, do not include ```json wrapping.',
    'Sort by date ascending.',
  ];

  useEffect(() => {
    const fetchPromptResponse = async () => {
      try {
        const prompt = CALENDAR_PROMPTS.join(' ');
        setIsLoading(true);

        openPromptService(prompt, FinanceDataLlmModel, 0.2).then((data: string) => {
          setCalendarData(JSON.parse(data));
          setIsLoading(false);
        });
      } catch (err) {
        console.log(err);
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
          <Paper sx={{ display: 'flex', width: '100%', minHeight: '15rem' }}>
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
