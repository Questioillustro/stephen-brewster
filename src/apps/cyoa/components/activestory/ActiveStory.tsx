import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IStory } from '../../api/StoryService';
import StoryControls from './quickstory/StoryControls';
import StoryPresenter from './storypresentation/StoryPresenter';
import LoadingStory from './LoadingStory';
import { AnimationConstants } from '../../constants/AnimationConstants';
import { IAdventure, generateNewAdventure, getQuickAdventures } from '../../api/AdventureService';

export interface ActiveStoryProps {
  story: IStory;
  setStoryIndex: (idx: number | null) => void;
}

const ActiveStory = (props: ActiveStoryProps) => {
  const { story, setStoryIndex } = props;

  const [versionIndex, setVersionIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [showStoryText, setShowStoryText] = useState(false);

  const [adventures, setAdventures] = useState<IAdventure[]>([]);

  const [currentAdventure, setCurrentAdventure] = useState<IAdventure | null>(null);

  useEffect(() => {
    loadAdventures();
  }, [story]);

  useEffect(() => {
    setCurrentAdventure(adventures[versionIndex]);
  }, [versionIndex]);

  useEffect(() => {
    setVersionIndex(adventures.length - 1);
  }, [adventures]);

  const loadAdventures = () => {
    setIsLoading(true);
    setShowStoryText(false);

    getQuickAdventures(story._id).then((adventures) => {
      setIsLoading(false);
      setShowStoryText(true);

      if (adventures.length === 0) return;

      setAdventures(adventures);
      setVersionIndex(adventures.length - 1);
    });
  };

  const getQuickAdventure = async (id: string, prompts: string[]) => {
    setIsLoading(true);
    setShowStoryText(false);

    generateNewAdventure(id, prompts).then((adventure: IAdventure) => {
      loadAdventures();
    });
  };

  const navPreviousVersion = () => {
    setShowStoryText(false);
    setTimeout(decrementVersion, AnimationConstants.QUICK_STORY_NAV_SPEED);
  };

  const decrementVersion = () => {
    setVersionIndex((prev) => prev - 1);
    setShowStoryText(true);
  };

  const navNextVersion = () => {
    setShowStoryText(false);
    setTimeout(incrementVersion, AnimationConstants.QUICK_STORY_NAV_SPEED);
  };

  const incrementVersion = () => {
    setVersionIndex((next) => next + 1);
    setShowStoryText(true);
  };

  return (
    <Paper variant={'elevation'}>
      {story && (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <StoryControls
            story={story}
            adventures={adventures}
            showingText={showStoryText}
            setStoryIndex={setStoryIndex}
            getQuickAdventure={getQuickAdventure}
            currentVersionNumber={versionIndex}
            previousVersion={navPreviousVersion}
            nextVersion={navNextVersion}
          />

          {!isLoading && currentAdventure && (
            <StoryPresenter adventure={currentAdventure} showText={showStoryText} />
          )}

          {isLoading && <LoadingStory />}
        </div>
      )}
    </Paper>
  );
};

export default ActiveStory;
