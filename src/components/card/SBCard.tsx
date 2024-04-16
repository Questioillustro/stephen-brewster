import { Box, Card, Divider } from '@mui/material';
import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';

export interface ISBCardProps {
  title: string;
  content: ReactNode;
}

function SBCard(props: ISBCardProps) {
  return (
    <Card variant={'outlined'}>
      <Box sx={{ p: 2 }}>
        <Typography variant={'h4'}>{props.title}</Typography>
      </Box>

      <Divider />

      {props.content}
    </Card>
  );
}

export default SBCard;
