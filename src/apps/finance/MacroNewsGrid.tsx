import React from 'react';
import { Card, CardContent, Typography, Grid, Chip, Link, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMacroNewsData } from '@/apps/finance/MacroNews';

interface NewsCardGridProps {
  newsData: IMacroNewsData[];
}

interface NewsCardProps {
  item: IMacroNewsData;
}

const SentimentChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const getSentimentColor = (score: number) => {
    if (score > 0) return 'success';
    if (score < 0) return 'error';
    return 'default';
  };

  const formatDate = (date: string | Date) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card elevation={1}>
      <CardContent>
        <Typography variant='h6' component='h2' gutterBottom>
          {item.title}
        </Typography>

        <Typography variant='subtitle2' color='text.secondary' gutterBottom>
          {formatDate(item.date)}
        </Typography>

        <Typography variant='body2' color='text.secondary' paragraph>
          {item.synopsis}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <SentimentChip
            label={`Sentiment: ${item.sentimentScore}`}
            color={getSentimentColor(item.sentimentScore)}
            size='small'
          />
          <Typography variant='caption' display='block' sx={{ mt: 1 }}>
            {item.sentimentRationale}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {item.sources.map((url) => {
            return (
              <Link href={url} target='_blank' rel='noopener noreferrer' variant='body2'>
                {url}
              </Link>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

const MacroNewsGrid: React.FC<NewsCardGridProps> = ({ newsData }) => {
  return (
    <Grid container spacing={1} sx={{ padding: 1 }}>
      {newsData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <NewsCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MacroNewsGrid;
