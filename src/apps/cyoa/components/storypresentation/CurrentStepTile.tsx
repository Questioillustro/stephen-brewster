import { Fade, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IAdventurePage } from '../../api/AdventureService';
import { AnimationConstants } from '../../constants/AnimationConstants';
import StoryPagination from './StoryPagination';
import ImageTile from './ImageTile';

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

        <Paper elevation={0} sx={{ p: { md: 4 } }}>
          <Typography
            variant='h6'
            color='secondary'
            sx={{
              p: 2,
              typography: { xs: 'body1', sm: 'h6', md: 'h6' },
            }}
            dangerouslySetInnerHTML={{
              __html: page.text,
            }}
          />

          <Paper elevation={7}>
            <StoryPagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </Paper>
        </Paper>
      </Stack>
    </Fade>
  );
};

export default CurrentStepTile;
