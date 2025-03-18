import React from 'react';

export interface BuildPictureButtonProps {
  generateImage: () => void;
}

/**
 * Ideas
 * 1. Add controls for extra prompts - edit current prompt
 *
 */

const BuildPictureButton = (props: BuildPictureButtonProps) => {
  const { generateImage } = props;

  return (
    <div
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
      onClick={() => generateImage()}
    >
      <img
        src={
          'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/buildapicture2.png'
        }
        width={'100%'}
      />
    </div>
  );
};

export default BuildPictureButton;
