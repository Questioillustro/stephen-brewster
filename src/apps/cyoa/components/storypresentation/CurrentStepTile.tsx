import { Fade, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AnimationConstants } from '../../constants/AnimationConstants';
import StoryPagination from './StoryPagination';
import ImageTile from './ImageTile';
import { IAdventurePage } from '@/apps/cyoa/types/adventure';
import { StoryText } from '@/apps/cyoa/components/storypresentation/StoryText';

export interface CurrentPageTileProps {
  page: IAdventurePage;
  currentPage: number;
  totalPages: number;
  generateImage: () => void;
  generatingImage: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

const CurrentStepTile = (props: CurrentPageTileProps) => {
  const { page, currentPage, totalPages, generateImage, generatingImage, previousPage, nextPage } =
    props;

  const [showContent, setShowContent] = useState(true);

  const paginate = (action: 'next' | 'previous') => {
    hidePage();

    if (action === 'next') {
      setTimeout(nextPage, AnimationConstants.QUICK_STORY_NAV_SPEED);
    }

    if (action === 'previous') {
      setTimeout(previousPage, AnimationConstants.QUICK_STORY_NAV_SPEED);
    }

    setTimeout(showPage, AnimationConstants.QUICK_STORY_NAV_SPEED);
  };

  const showPage = () => {
    setShowContent(true);
  };

  const hidePage = () => {
    setShowContent(false);
  };

  return (
    <Fade in={showContent} timeout={AnimationConstants.QUICK_STORY_NAV_SPEED}>
      <Stack direction={'column'} sx={{ display: 'flex', width: '100%' }}>
        <ImageTile
          generateImage={generateImage}
          generatingImage={generatingImage}
          imageUrl={page.imageUrl ?? ''}
        />

        <Paper elevation={1} sx={{ p: { md: 2 } }}>
          <Paper elevation={1} sx={{ p: { xs: 2, sm: 3 } }}>
            <StoryText text={page.text} />

            <Paper elevation={10}>
              <StoryPagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
              />
            </Paper>
          </Paper>
        </Paper>
      </Stack>
    </Fade>
  );
};

export default CurrentStepTile;
