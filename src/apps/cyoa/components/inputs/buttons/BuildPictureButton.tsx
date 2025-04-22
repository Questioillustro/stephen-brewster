import React from 'react';

export interface BuildPictureButtonProps {
  generateImage: () => void;
}

const BuildPictureButton = (props: BuildPictureButtonProps) => {
  const { generateImage } = props;

  return (
    <div
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
      onClick={() => generateImage()}
    >
      <img src={'/bav/build-a-picture.jpg'} width={'100%'} />
    </div>
  );
};

export default BuildPictureButton;
