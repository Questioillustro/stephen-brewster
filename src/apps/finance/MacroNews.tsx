import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { openPromptService } from '@/service/OpenPromptService';
import LoadingSkeleton from '@/components/loading/LoadingSkeleton';
import MacroNewsGrid from '@/apps/finance/MacroNewsGrid';

export interface IMacroNewsData {
  title: string;
  date: string;
  synopsis: string;
  sentimentScore: number;
  sentimentRationale: string;
  searchUrl: string;
}

const MacroNews: React.FC = () => {
  const [macroNewsData, setMacroNewsData] = useState<IMacroNewsData[]>();
  const [isLoading, setIsLoading] = useState(false);

  const MACRO_NEWS_PROMPTS = [
    `Provide a list of important macro finance related news for ${new Date()}, formatted as JSON.`,
    'Only include United States related news.',
    `Provide at least 5 items of note.`,
    'Include a title for the news item.',
    'Include the date that the news first broke.',
    'Include a brief synopsis of the news item.',
    'Include a sentiment score to rate the sentiment on a scale from -100 to +100 with rationale.',
    'Only respond with the data formatted as JSON',
    `Replace the string 'TITLE' in 'https://x.com/search?q=TITLE&src=typed_query' and provide it back as the searchUrl`,
    'Do not include ```json wrapping.',
    `JSON structured should be [{ title, date, synopsis, sentimentScore, sentimentRationale, searchUrl }]`,
  ];

  useEffect(() => {
    const fetchPromptResponse = async () => {
      try {
        const prompt = MACRO_NEWS_PROMPTS.join('|');
        setIsLoading(true);
        const prompts: string[] = [prompt];

        openPromptService(prompts).then((data: string) => {
          setMacroNewsData(JSON.parse(data));
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
        Macro News
      </Typography>

      <Grid container spacing={1}>
        {isLoading && (
          <Paper sx={{ display: 'flex', width: '100%', height: '100%' }}>
            <LoadingSkeleton />
          </Paper>
        )}

        {!isLoading && macroNewsData && <MacroNewsGrid newsData={macroNewsData} />}
      </Grid>
    </Paper>
  );
};

export default MacroNews;
