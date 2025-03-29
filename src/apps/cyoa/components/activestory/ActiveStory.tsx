import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IStory } from '../../api/StoryService';
import {
  IAdventure,
  generateNewAdventure,
  getExistingAdventuresForStory,
} from '../../api/AdventureService';
import TypeSelection from '@/apps/cyoa/layout/TypeSelection';
import { CyaViews } from '@/apps/cyoa/CyaMain';
import BuildNew from '@/apps/cyoa/layout/BuildNew';
import StoryPresenter from '@/apps/cyoa/components/activestory/storypresentation/StoryPresenter';
import LoadingSkeleton from '@/components/loading/LoadingSkeleton';

export interface ActiveStoryProps {
  story: IStory;
  setView: (view: CyaViews) => void;
}

export type ActiveStoryViews = 'typeselect' | 'build' | 'revisit' | 'new';

const ActiveStory = (props: ActiveStoryProps) => {
  const { story, setView } = props;

  const [activeView, setActiveView] = useState<ActiveStoryViews>('typeselect');

  const [isLoading, setIsLoading] = useState(false);

  const [adventures, setAdventures] = useState<IAdventure[]>([]);

  const [currentAdventure, setCurrentAdventure] = useState<IAdventure>();

  useEffect(() => {
    loadAdventures();
  }, [story]);

  const loadAdventures = () => {
    setIsLoading(true);

    getExistingAdventuresForStory(story._id).then((adventures) => {
      setIsLoading(false);

      if (adventures.length === 0) return;

      setAdventures(adventures);
    });
  };

  const buildAVenture = async (prompts: string[]) => {
    setIsLoading(true);

    generateNewAdventure(story._id, prompts, 'grok', 0.9).then((adventure: IAdventure) => {
      setIsLoading(false);
      setAdventures(adventures.concat(adventure));
      setActiveView('new');
    });
  };

  const goBack = () => {
    setView('maingrid');
  };

  if (isLoading) {
    return (
      <Paper variant={'elevation'} sx={{ display: 'flex', width: '100%', height: '15rem' }}>
        <LoadingSkeleton />
      </Paper>
    );
  } else {
    return (
      <Paper elevation={5} sx={{ display: 'flex', width: '100%' }}>
        {activeView === 'typeselect' && (
          <TypeSelection story={story} goBack={goBack} setActiveView={setActiveView} />
        )}

        {activeView === 'build' && (
          <BuildNew story={story} setView={setActiveView} build={buildAVenture} />
        )}

        {activeView === 'revisit' && (
          <StoryPresenter
            adventures={adventures}
            showText={true}
            setView={setActiveView}
            view={'existing'}
            displayedVersion={0}
          />
        )}

        {activeView === 'new' && (
          <StoryPresenter
            adventures={adventures}
            showText={true}
            setView={setActiveView}
            view={'new'}
            displayedVersion={adventures.length - 1}
          />
        )}
      </Paper>
    );
  }
};

export default ActiveStory;
