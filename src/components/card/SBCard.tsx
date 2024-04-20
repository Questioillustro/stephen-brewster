import { Fade, Paper } from '@mui/material';
import { ReactNode, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ThemeConstants } from '../../theme/Theme';

export interface ISBCardProps {
  title: string;
  content: ReactNode;
}

function SBCard(props: ISBCardProps) {
  const { fadeIn } = useContext(ThemeContext);

  return (
    <Paper elevation={2} variant={'outlined'}>
      <Fade in={fadeIn} timeout={ThemeConstants.FadeTransitionDuration}>
        <div>
          <Paper elevation={5} sx={{ p: 2 }} square>
            <Typography color={'primary'} variant={'h4'}>
              {props.title}
            </Typography>
          </Paper>

          <Paper elevation={0} sx={{ p: 2 }} square>
            {props.content}
          </Paper>
        </div>
      </Fade>
    </Paper>
  );
}

export default SBCard;
