/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { ReactNode } from 'react';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ResumeCardStyle } from './ResumeCard.style';
import ResumeLink from '@/apps/resume/resumelink/ResumeLink';
import SBPopoverTextField from '@/components/popover/textfield/SBPopoverTextField';
import SBLink from '@/components/link/SBLink';

export interface IResumeCardProps {
  title: string;
  content: ReactNode;
  controlPanel?: ReactNode;
}

function ResumeCard(props: IResumeCardProps) {
  return (
    <Paper elevation={2} variant={'outlined'} css={ResumeCardStyle.root} square>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          backgroundColor: 'cardContrastBg',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        square
      >
        <Typography color={'primary'} variant={'h4'}>
          {props.title}
        </Typography>

        <SBLink
          ariaLabel={'Download resume'}
          href={'/StephenBrewster_Resume.pdf'}
          linkContent={<ResumeLink />}
          popoverContent={<SBPopoverTextField text={'Download Resume (pdf)'} />}
        />
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
