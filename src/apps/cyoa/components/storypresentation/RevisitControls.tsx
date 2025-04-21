import { Button, Paper } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import React from 'react';

export interface IRevisitControlsProps {
  currentVersionNumber: number;
  previousVersion: () => void;
  nextVersion: () => void;
  total: number;
  disabled: boolean;
}

const RevisitControls: React.FC<IRevisitControlsProps> = (props: IRevisitControlsProps) => {
  const { currentVersionNumber, previousVersion, nextVersion, total, disabled } = props;

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
          Previous Story
        </Button>

        <Button
          endIcon={<ArrowForward />}
          onClick={nextVersion}
          disabled={currentVersionNumber + 1 === total}
          variant={'outlined'}
        >
          Next Story
        </Button>
      </Paper>
    </Paper>
  );
};

export default RevisitControls;
