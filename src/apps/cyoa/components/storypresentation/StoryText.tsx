import { Typography } from '@mui/material';
import React from 'react';

export interface IStoryTextProps {
  text: string;
}

export const StoryText = (props: IStoryTextProps) => {
  return (
    <Typography
      color='secondary'
      sx={{
        typography: { xs: 'body1', md: 'h6' },
        fontFamily: { md: '"Comic Neue", sans-serif' },
        //backgroundImage: 'url(/bav/papertexture.jpg)',
      }}
      dangerouslySetInnerHTML={{
        __html: props.text,
      }}
    />
  );
};
