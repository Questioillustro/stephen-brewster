﻿import { Button, Paper, Typography } from '@mui/material';
import React from 'react';

export interface StoryPaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (direction: 'next' | 'previous') => void;
}

const StoryPagination = (props: StoryPaginationProps) => {
  const { currentPage, totalPages, paginate } = props;

  return (
    <Paper
      variant={'outlined'}
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
      sx={{ p: 2, mt: 2 }}
    >
      <Button
        variant={'outlined'}
        onClick={() => paginate('previous')}
        disabled={currentPage === 1}
      >
        Previous Page
      </Button>

      <Typography variant={'body2'} sx={{ pt: 1 }}>
        Page: {currentPage} / {totalPages}
      </Typography>

      <Button
        variant={'contained'}
        onClick={() => paginate('next')}
        disabled={currentPage === totalPages}
      >
        Next Page
      </Button>
    </Paper>
  );
};

export default StoryPagination;
