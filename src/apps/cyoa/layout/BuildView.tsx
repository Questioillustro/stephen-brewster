import { useContext } from 'react';
import Button from '@mui/material/Button';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';

export const BuildView = () => {
  const { state, dispatch } = useContext(MainViewContext);

  return (
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
  );
};
