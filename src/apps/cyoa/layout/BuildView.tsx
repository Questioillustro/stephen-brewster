import { useContext } from 'react';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';

export const BuildView = () => {
  const { state, dispatch } = useContext(MainViewContext);

  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        variant={'outlined'}
        onClick={() => dispatch('BUILD')}
        sx={{
          ...(state.currentView === 'building' && {
            backgroundColor: '#1976d2',
            color: '#fff',
            borderColor: '#115293',
            '&:hover': {
              backgroundColor: '#115293',
            },
          }),
        }}
      >
        Build
      </Button>
    </Stack>
  );
};
