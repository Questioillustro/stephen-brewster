import { Fade, Paper, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AnimationConstants } from '../../constants/AnimationConstants';
import { getImagesForPrompt } from '../../api/ImageService';
import CurrentStepTile from './CurrentStepTile';
import RevisitControls from '@/apps/cyoa/components/storypresentation/RevisitControls';
import { useStoryContext } from '@/apps/cyoa/context/StoryContext';
import { MainViewContext } from '@/apps/cyoa/context/MainViewContext';
import { Building } from '@/apps/cyoa/components/storypresentation/Building';
import { TitleTile } from '@/apps/cyoa/components/storypresentation/TitleTile';
import { IAdventureWrapper } from '@/apps/cyoa/types/adventure';
import { IBavLibrary } from '@/apps/cyoa/types/library';

export interface StoryPresenterProps {
  view: StoryPresenterViews;
}

export type StoryPresenterViews = 'new' | 'existing';

const StoryPresenter = (props: StoryPresenterProps) => {
  const { view } = props;

  const { selectedAdventure, setAdventure, allAdventures } = useStoryContext();

  const { state, dispatch } = useContext(MainViewContext);

  const [currentPage, setCurrentPage] = useState(0);

  const [generatingImage, setGeneratingImage] = useState(false);

  const [versionIndex, setVersionIndex] = useState(0);

  const [showStoryText, setShowStoryText] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async () => {
    if (!selectedAdventure) return;

    setGeneratingImage(true);
    const page = selectedAdventure.adventure.pages[currentPage];
    const imagePrompt = `The art style should be: ${selectedAdventure.artStyle}. ${page.imagePrompt}`;

    getImagesForPrompt(imagePrompt, selectedAdventure._id, '1792x1024', currentPage).then(
      (adventure) => {
        updateLibraryItem(adventure);
        setAdventure(adventure);
        setGeneratingImage(false);
      },
    );
  };

  const updateLibraryItem = (adventure: IAdventureWrapper) => {
    try {
      const library: IBavLibrary = JSON.parse(localStorage.getItem('bavLibrary') ?? '{}');
      const index = library.myStories.findIndex((m) => m._id === adventure._id);
      if (index !== -1) {
        library.myStories[index] = adventure; // Replace the matching story
        localStorage.setItem('bavLibrary', JSON.stringify(library)); // Save updated library
      } else {
        console.log('Story not found in library');
      }
    } catch (error) {
      console.error('Failed to update library item:', error);
    }
  };

  const nextPage = () => {
    setCurrentPage((index) => index + 1);
  };

  const previousPage = () => {
    setCurrentPage((index) => index - 1);
  };

  const goBack = () => {
    dispatch('BUILD');
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
    setVersionIndex(0);
  }, [allAdventures]);

  useEffect(() => {
    if (!state.isRevisit) return;

    setCurrentPage(0);
    setAdventure(allAdventures[versionIndex]);
  }, [versionIndex]);

  return (
    <Fade in={true} timeout={AnimationConstants.QUICK_STORY_NAV_SPEED}>
      <Paper
        elevation={2}
        sx={{ width: { md: '80%' } }}
        style={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}
      >
        {view === 'existing' && (
          <RevisitControls
            currentVersionNumber={versionIndex}
            previousVersion={navPreviousVersion}
            nextVersion={navNextVersion}
            total={allAdventures.length}
            disabled={showStoryText}
          />
        )}

        {selectedAdventure && !isLoading && (
          <Stack sx={{ display: 'flex', alignItems: 'end', width: '100%', gap: 2 }}>
            <Paper elevation={10} sx={{ width: '100%', p: { md: 4, lg: 4, sm: 2, xs: 0 } }}>
              <TitleTile title={selectedAdventure.adventure.title} />
            </Paper>

            <CurrentStepTile
              page={selectedAdventure.adventure.pages[currentPage]}
              currentPage={currentPage + 1}
              totalPages={selectedAdventure.adventure.pages.length}
              generateImage={generateImage}
              generatingImage={generatingImage}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          </Stack>
        )}

        {isLoading && <Building />}
      </Paper>
    </Fade>
  );
};

export default StoryPresenter;
