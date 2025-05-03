import { useContext, useState } from 'react';
import { IBavLibrary } from '@/apps/cyoa/types/library';
import Button from '@mui/material/Button';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import { useStoryContext } from '@/apps/cyoa/context/StoryContext';

export const BavLibrary = () => {
  const [library, setLibrary] = useState<IBavLibrary>();

  const storyContext = useStoryContext();

  const { state, dispatch } = useContext(MainViewContext);

  const getStoredLibrary = (): IBavLibrary => {
    let library: IBavLibrary = { myStories: [] };

    try {
      const myLibrary: IBavLibrary = JSON.parse(localStorage.getItem('bavLibrary') ?? '');
      if (myLibrary) {
        setLibrary(myLibrary);
        return myLibrary;
      } else return library;
    } catch {
      localStorage.setItem('bavLibrary', JSON.stringify(library));
      return library;
    } finally {
    }
  };

  const viewLibrary = () => {
    const library = getStoredLibrary();

    if (library && library.myStories.length > 0) {
      storyContext.setAdventures(library.myStories);
      storyContext.setAdventure(library.myStories[0]);
    }

    dispatch('VIEW_LIBRARY');
  };

  return (
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
  );
};
