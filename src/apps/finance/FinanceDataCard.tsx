import { Box, Card, CardContent, Chip, Divider, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { ICalendarData } from './FinanceDataGrid'; // Assuming both files are in same directory

const ImpactChip = styled(Chip)(({ theme }) => ({
  marginLeft: '1rem',
}));

interface DataCardProps {
  item: ICalendarData;
}

const FinanceDataCard: React.FC<DataCardProps> = ({ item }) => {
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

  return (
    <Card elevation={1}>
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
    </Card>
  );
};

export default FinanceDataCard;
