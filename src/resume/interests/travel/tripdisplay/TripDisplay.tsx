/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TripDisplayStyle } from './TripDisplay.style';
import { ITravelItem } from '../traveltile/Travels.hook';
import { ImageList, ImageListItem } from '@mui/material';

export interface ITripDisplayProps {
  item: ITravelItem;
}

function TripDisplay(props: ITripDisplayProps) {
  const { item } = props;

  return (
    <div css={TripDisplayStyle.root}>
      <ImageList cols={2} rowHeight={164} variant={'quilted'}>
        {item.images.map((item) => (
          <ImageListItem key={item}>
            <img srcSet={`${item}`} src={`${item}`} alt={item} loading='lazy' />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default TripDisplay;
