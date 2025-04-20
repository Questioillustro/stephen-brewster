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
        <Paper
          variant={'outlined'}
          style={{ width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}
        >
          <ImageTile
            generateImage={generateImage}
            generatingImage={generatingImage}
            imageUrl={page.imageUrl ?? ''}
          />
        </Paper>

        <Paper
          variant={'outlined'}
          style={{ width: '100%', flexDirection: 'row', display: 'flex' }}
        >
          <Typography
            variant={'h6'}
            color={'secondary'}
            sx={{ p: 2 }}
            dangerouslySetInnerHTML={{
              __html: page.text,
            }}
          ></Typography>
        </Paper>

        <StoryPagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
      </Stack>
    </Fade>
  );
};

export default CurrentStepTile;
