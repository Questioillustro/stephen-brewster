/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { ReactNode } from 'react';
import { Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ResumeCardStyle } from './ResumeCard.style';

export interface IResumeCardProps {
  title: string;
  content: ReactNode;
  controlPanel?: ReactNode;
}

function ResumeCard(props: IResumeCardProps) {
  return (
    <Paper elevation={5} css={ResumeCardStyle.root} square>
      <Stack
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography color={'primary'} variant={'h4'}>
          {props.title}
        </Typography>
      </Stack>

      <Paper elevation={1} square css={ResumeCardStyle.controlPanel}>
        {props.controlPanel && props.controlPanel}
      </Paper>

      <Paper elevation={1} square sx={{ p: 2 }}>
        {props.content}
      </Paper>
    </Paper>
  );
}

export default ResumeCard;
