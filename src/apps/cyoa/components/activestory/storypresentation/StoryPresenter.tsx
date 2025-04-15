import { Fade, Paper } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AnimationConstants } from '../../../constants/AnimationConstants';
import { getImagesForPrompt } from '../../../api/ImageService';
import CurrentStepTile from './CurrentStepTile';
import BackButton from '@/apps/cyoa/components/activestory/inputs/BackButton';
import RevisitControls from '@/apps/cyoa/components/activestory/storypresentation/RevisitControls';
import { useStoryContext } from '@/apps/cyoa/context/StoryContext';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import { getExistingAdventuresForStory, IAdventure } from '@/apps/cyoa/api/AdventureService';
import LoadingSkeleton from '@/components/loading/LoadingSkeleton';

export interface StoryPresenterProps {
  view: StoryPresenterViews;
}

export type StoryPresenterViews = 'new' | 'existing';

const StoryPresenter = (props: StoryPresenterProps) => {
  const { view } = props;

  const { selectedStory, selectedAdventure, setAdventure } = useStoryContext();

  const { dispatch } = useContext(MainViewContext);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [generatingImage, setGeneratingImage] = useState(false);

  const [versionIndex, setVersionIndex] = useState(0);

  const [showStoryText, setShowStoryText] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [adventures, setAdventures] = useState<IAdventure[]>([]);

  const generateImage = async () => {
    if (!selectedAdventure) return;

    setGeneratingImage(true);
    const step = selectedAdventure.steps[currentStepIndex];

    getImagesForPrompt(step.imagePrompt, selectedAdventure._id, currentStepIndex).then(
      (adventure) => {
        setAdventure(adventure);
        setGeneratingImage(false);
      },
    );
  };

  const nextPage = () => {
    setCurrentStepIndex((index) => index + 1);
  };

  const previousPage = () => {
    setCurrentStepIndex((index) => index - 1);
  };

  const goBack = () => {
    dispatch('LANDING');
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

  useEffect(() => {
    loadAdventures();
  }, [selectedStory]);

  useEffect(() => {
    setVersionIndex(0);
  }, [adventures]);

  useEffect(() => {
    setAdventure(adventures[versionIndex]);
  }, [versionIndex]);

  const loadAdventures = () => {
    if (!selectedStory) return;

    setIsLoading(true);

    getExistingAdventuresForStory(selectedStory._id).then((adventures) => {
      setIsLoading(false);

      if (adventures.length === 0) return;

      setAdventures(adventures);

      setAdventure(adventures[0]);
    });
  };

  return (
    <Fade in={true} timeout={AnimationConstants.QUICK_STORY_NAV_SPEED}>
      <Paper
        variant={'outlined'}
        sx={{ p: 2 }}
        style={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}
      >
        <BackButton onclick={goBack} />

        {view === 'existing' && (
          <RevisitControls
            currentVersionNumber={versionIndex}
            previousVersion={navPreviousVersion}
            nextVersion={navNextVersion}
            total={adventures.length}
          />
        )}

        {selectedAdventure && !isLoading && (
          <CurrentStepTile
            step={selectedAdventure.steps[currentStepIndex]}
            currentPage={currentStepIndex + 1}
            totalPages={selectedAdventure.steps.length}
            generateImage={generateImage}
            generatingImage={generatingImage}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        )}

        {isLoading && <LoadingSkeleton />}
      </Paper>
    </Fade>
  );
};

export default StoryPresenter;
