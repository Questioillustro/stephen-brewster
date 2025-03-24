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
        rowGap: '20px',
      }}
      sx={{ p: 2 }}
    >
      <Paper square elevation={1} sx={{ p: 2 }}>
        <Typography variant={'h6'} color={'primary'}>
          Revisit-A-Story
        </Typography>

        <Typography variant={'body1'} color={'secondary'}>
          Revisit a previously generated story
        </Typography>

        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item>
            <Button
              startIcon={<ArrowBack />}
              onClick={previousVersion}
              disabled={currentVersionNumber === 0}
              variant={'outlined'}
            >
              Previous Version
            </Button>
          </Grid>

          <Grid item>
            <Button
              endIcon={<ArrowForward />}
              onClick={nextVersion}
              disabled={currentVersionNumber + 1 === total}
              variant={'outlined'}
            >
              Next Version
            </Button>
          </Grid>
        </Grid>

        <Typography variant={'body2'} color={'secondary'}>
          Currently displaying version: {currentVersionNumber + 1} / {total}
        </Typography>
      </Paper>
    </Paper>
  );
};

export default RevisitControls;
