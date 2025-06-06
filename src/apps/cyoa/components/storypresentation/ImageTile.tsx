﻿import BuildPictureButton from '../inputs/buttons/BuildPictureButton';
import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
import { StoryArtTile } from '@/apps/cyoa/components/storypresentation/StoryArtTile';
import { Painting } from '@/apps/cyoa/components/storypresentation/Painting';

export interface ImageTileProps {
  generateImage: () => void;
  generatingImage: boolean;
  imageUrl: string;
}

const ImageTile = (props: ImageTileProps) => {
  useEffect(() => {
    if (!props.imageUrl) props.generateImage();
  }, [props.imageUrl]);

  return (
    <Stack sx={{ width: '100%', display: 'flex' }}>
      {!props.imageUrl && (
        <div>
          {!props.generatingImage && <BuildPictureButton generateImage={props.generateImage} />}

          {props.generatingImage && <Painting />}
        </div>
      )}

      {props.imageUrl && <StoryArtTile url={props.imageUrl} />}
    </Stack>
  );
};

export default ImageTile;
