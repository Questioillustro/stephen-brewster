import React, { useContext, useState } from 'react';
import { Stack } from '@mui/material';
import BuildOptions from '@/apps/cyoa/components/inputs/BuildOptions';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import { BuildAVenture } from '@/apps/cyoa/api/AdventureService';
import { defaultLlm, useStoryContext } from '@/apps/cyoa/context/StoryContext';
import { Building } from '@/apps/cyoa/components/storypresentation/Building';
import { IAdventureWrapper } from '@/apps/cyoa/types/adventure';
import { IBavLibrary } from '@/apps/cyoa/types/library';

const BuildingView: React.FC = () => {
  const { state, dispatch } = useContext(MainViewContext);
  const { setAdventure } = useStoryContext();
  const [isLoading, setIsLoading] = useState(false);

  const build = async (prompts: string, characterPrompts: string, artStyle: string) => {
    setIsLoading(true);
    BuildAVenture(prompts, characterPrompts, artStyle, defaultLlm, 0.9).then(
      (adventure: IAdventureWrapper) => {
        addToLibrary(adventure);
        setAdventure(adventure);
        dispatch('VIEW_NEW');
        setIsLoading(false);
      },
    );
  };

  const addToLibrary = (adventure: IAdventureWrapper) => {
    try {
      const storedLibrary: IBavLibrary = JSON.parse(localStorage.getItem('bavLibrary') ?? '');
      storedLibrary.myStories.push(adventure);
      localStorage.setItem('bavLibrary', JSON.stringify(storedLibrary));
    } catch {
      console.log('failed to add story to library');
    }
  };

  const setPrompts = (prompts: string, characterPrompts: string, artStyle: string) => {
    build(prompts, characterPrompts, artStyle);
  };

  return (
    <Stack sx={{ width: '100%' }}>
      {isLoading && <Building />}

      {!isLoading && <BuildOptions setPrompts={setPrompts} />}
    </Stack>
  );
};

export default BuildingView;
