import { Button, Grid, Paper, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import React from 'react';

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
      <Typography variant={'h6'} color={'secondary'} sx={{ pt: 1 }}>
        Revisit previously generated stories
      </Typography>

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

        <Button
          endIcon={<ArrowForward />}
          onClick={nextVersion}
          disabled={currentVersionNumber + 1 === total}
          variant={'outlined'}
        >
          Next Version
        </Button>
      </Paper>

      {/*<Typography variant={'body2'} color={'secondary'}>*/}
      {/*  Currently displaying version: {currentVersionNumber + 1} / {total}*/}
      {/*</Typography>*/}
    </Paper>
  );
};

export default RevisitControls;
