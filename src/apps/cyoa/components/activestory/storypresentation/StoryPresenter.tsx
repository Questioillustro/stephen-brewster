import { Fade, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AnimationConstants } from '../../../constants/AnimationConstants';
import { getImagesForPrompt } from '../../../api/ImageService';
import { getQuickAdventures, IAdventure } from '../../../api/AdventureService';
import CurrentStepTile from './CurrentStepTile';
import BackButton from '@/apps/cyoa/components/activestory/inputs/BackButton';
import { ActiveStoryViews } from '@/apps/cyoa/components/activestory/ActiveStory';
import RevisitControls from '@/apps/cyoa/components/activestory/storypresentation/RevisitControls';

export interface StoryPresenterProps {
  adventures: IAdventure[];
  showText: boolean;
  setView: (view: ActiveStoryViews) => void;
  view: StoryPresenterViews;
  displayedVersion: number;
}

export type StoryPresenterViews = 'new' | 'existing';

const StoryPresenter = (props: StoryPresenterProps) => {
  const { adventures, showText, setView, view, displayedVersion } = props;

  const [presentedAdventure, setPresentedAdventure] = useState<IAdventure>(
    adventures[displayedVersion],
  );

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [generatingImage, setGeneratingImage] = useState(false);

  const [versionIndex, setVersionIndex] = useState(displayedVersion);

  const [showStoryText, setShowStoryText] = useState(false);

  useEffect(() => {
    setPresentedAdventure(adventures[versionIndex]);
  }, [versionIndex]);

  useEffect(() => {
    setVersionIndex(adventures.length - 1);
  }, [adventures]);

  const generateImage = async () => {
    setGeneratingImage(true);
    const step = presentedAdventure.steps[currentStepIndex];

    getImagesForPrompt(step.imagePrompt, presentedAdventure._id, currentStepIndex).then(
      (adventure) => {
        setPresentedAdventure(adventure);
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
    setView('typeselect');
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
        <CurrentStepTile
          step={presentedAdventure.steps[currentStepIndex]}
          currentPage={currentStepIndex + 1}
          totalPages={presentedAdventure.steps.length}
          generateImage={generateImage}
          generatingImage={generatingImage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </Paper>
    </Fade>
  );
};

export default StoryPresenter;
