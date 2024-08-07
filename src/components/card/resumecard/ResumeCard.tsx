/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ReactNode } from 'react';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ResumeCardStyle } from './ResumeCard.style';

export interface IResumeCardProps {
  title: string;
  content: ReactNode;
  controlPanel?: ReactNode;
}

function ResumeCard(props: IResumeCardProps) {
  return (
    <Paper elevation={2} variant={'outlined'} css={ResumeCardStyle.root} square>
      <Paper elevation={5} sx={{ p: 2, backgroundColor: 'cardContrastBg' }} square>
        <Typography color={'primary'} variant={'h4'}>
          {props.title}
        </Typography>
      </Paper>

      <Paper elevation={1} square css={ResumeCardStyle.controlPanel}>
        {props.controlPanel && props.controlPanel}
      </Paper>

      <Paper elevation={0} square sx={{ p: 2 }}>
        {props.content}
      </Paper>
    </Paper>
  );
}

export default ResumeCard;
