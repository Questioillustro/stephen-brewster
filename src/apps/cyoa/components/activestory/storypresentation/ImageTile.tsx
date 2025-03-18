import BuildPictureButton from '../inputs/BuildPictureButton';
import GeneratingImageSkeleton from './GeneratingImageSkeleton';
import React from 'react';

export interface ImageTileProps {
  generateImage: () => void;
  generatingImage: boolean;
  imageUrl: string;
}

const ImageTile = (props: ImageTileProps) => {
  const { generateImage, generatingImage, imageUrl } = props;

  return (
    <>
      {!imageUrl && (
        <div style={{ display: 'flex', minWidth: '450px', minHeight: '450px' }}>
          {!generatingImage && (
            <BuildPictureButton generateImage={generateImage} />
          )}

          {generatingImage && <GeneratingImageSkeleton />}
        </div>
      )}

      {imageUrl && <img src={imageUrl} width={450} height={450} />}
    </>
  );
};

export default ImageTile;
