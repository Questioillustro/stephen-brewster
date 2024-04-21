import { Paper } from '@mui/material';
import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Sliding from '../animation/sliding/Sliding';

export interface ISBCardProps {
  title: string;
  content: ReactNode;
}

function SBCard(props: ISBCardProps) {
  return (
    <Sliding
      child={
        <Paper elevation={2} variant={'outlined'}>
          <Paper elevation={5} sx={{ p: 2 }} square>
            <Typography color={'primary'} variant={'h4'}>
              {props.title}
            </Typography>
          </Paper>

          <Paper elevation={0} sx={{ p: 2 }} square>
            {props.content}
          </Paper>
        </Paper>
      }
    />
  );
}

export default SBCard;
