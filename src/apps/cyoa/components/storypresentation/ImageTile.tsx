import BuildPictureButton from '../inputs/BuildPictureButton';
import React from 'react';
import { Stack } from '@mui/material';
import { Building } from '@/apps/cyoa/components/storypresentation/Building';
import { StoryArtTile } from '@/apps/cyoa/components/storypresentation/StoryArtTile';

export interface ImageTileProps {
  generateImage: () => void;
  generatingImage: boolean;
  imageUrl: string;
}

const ImageTile = (props: ImageTileProps) => {
  return (
    <Stack sx={{ width: '100%', display: 'flex' }}>
      {!props.imageUrl && (
        <div>
          {!props.generatingImage && <BuildPictureButton generateImage={props.generateImage} />}

          {props.generatingImage && <Building />}
        </div>
      )}

      {props.imageUrl && <StoryArtTile url={props.imageUrl} />}
    </Stack>
  );
};

export default ImageTile;
