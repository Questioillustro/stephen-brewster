import { Button, Grid, Paper, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import React from 'react';
import StoryCarousel from '@/apps/cyoa/components/storygrid/StoryCarousel';

export interface IRevisitControlsProps {
  currentVersionNumber: number;
  previousVersion: () => void;
  nextVersion: () => void;
  total: number;
}

const RevisitControls: React.FC<IRevisitControlsProps> = (props: IRevisitControlsProps) => {
  const { currentVersionNumber, previousVersion, nextVersion, total } = props;

  return (
    <Paper
      variant={'outlined'}
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        textAlign: 'center',
        rowGap: '1.25rem',
      }}
    >
      <StoryCarousel />

      <Paper
        sx={{
          p: 1,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button
          startIcon={<ArrowBack />}
          onClick={previousVersion}
          disabled={currentVersionNumber === 0}
          variant={'outlined'}
        >
          Previous Version
        </Button>
        {currentVersionNumber + 1} / {total}
        <Button
          endIcon={<ArrowForward />}
          onClick={nextVersion}
          disabled={currentVersionNumber + 1 === total}
          variant={'outlined'}
        >
          Next Version
        </Button>
      </Paper>
    </Paper>
  );
};

export default RevisitControls;
