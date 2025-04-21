import { useContext, useEffect, useState } from 'react';
import { IBavLibrary } from '@/apps/cyoa/types/library';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import { useStoryContext } from '@/apps/cyoa/context/StoryContext';

export const BavLibrary = () => {
  const [library, setLibrary] = useState<IBavLibrary>();

  const storyContext = useStoryContext();

  const { state, dispatch } = useContext(MainViewContext);

  useEffect(() => {
    getStoredLibrary();
  }, []);

  useEffect(() => {
    if (library && library.myStories.length > 0) storyContext.setAdventures(library.myStories);
  }, [library]);

  const getStoredLibrary = () => {
    try {
      const myLibrary: IBavLibrary = JSON.parse(localStorage.getItem('bavLibrary') ?? '');
      if (myLibrary) setLibrary(myLibrary);
    } catch {
      console.log('no library found');
    }
  };

  const viewLibrary = () => {
    getStoredLibrary();
    dispatch('VIEW_LIBRARY');
  };

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
        onClick={viewLibrary}
        sx={{
          ...(state.currentView === 'reading' && {
            backgroundColor: '#1976d2',
            color: '#fff',
            borderColor: '#115293',
            '&:hover': {
              backgroundColor: '#115293',
            },
          }),
        }}
      >
        Library
      </Button>
    </Stack>
  );
};
