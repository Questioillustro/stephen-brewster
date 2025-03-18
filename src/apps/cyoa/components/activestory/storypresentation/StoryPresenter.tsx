import { Fade, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AnimationConstants } from '../../../constants/AnimationConstants';
import { getImagesForPrompt } from '../../../api/ImageService';
import { IAdventure } from '../../../api/AdventureService';
import CurrentStepTile from './CurrentStepTile';

export interface StoryPresenterProps {
  adventure: IAdventure;
  showText: boolean;
}

const StoryPresenter = (props: StoryPresenterProps) => {
  const { adventure, showText } = props;

  const [presentedAdventure, setPresentedAdventure] =
    useState<IAdventure>(adventure);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [generatingImage, setGeneratingImage] = useState(false);

  useEffect(() => {
    setCurrentStepIndex(0);
    setPresentedAdventure(adventure);
  }, [adventure]);

  const generateImage = async () => {
    setGeneratingImage(true);
    const step = presentedAdventure.steps[currentStepIndex];
    getImagesForPrompt(
      step.imagePrompt,
      presentedAdventure._id,
      currentStepIndex,
    ).then((adventure) => {
      setPresentedAdventure(adventure);
      setGeneratingImage(false);
    });
  };

  const nextPage = () => {
    setCurrentStepIndex((index) => index + 1);
  };

  const previousPage = () => {
    setCurrentStepIndex((index) => index - 1);
  };

  return (
    <Fade in={showText} timeout={AnimationConstants.QUICK_STORY_NAV_SPEED}>
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
        <CurrentStepTile
          step={presentedAdventure.steps[currentStepIndex]}
          currentPage={currentStepIndex + 1}
          totalPages={adventure.steps.length}
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
