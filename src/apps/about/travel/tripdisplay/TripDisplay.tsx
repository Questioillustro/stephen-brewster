/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TripDisplayStyle } from './TripDisplay.style';
import { ITravelItem } from '../traveltile/Travels.hook';
import { ImageList, ImageListItem } from '@mui/material';
import useWindowDimensions from '@/hooks/WindowDimensions.hook';

export interface ITripDisplayProps {
  item: ITravelItem;
}

function TripDisplay(props: ITripDisplayProps) {
  const { item } = props;

  const { width, height } = useWindowDimensions();

  const columns = Math.min(Math.round(width / 300), 3);

  return (
    <div css={TripDisplayStyle.root}>
      <ImageList cols={columns} rowHeight={300} variant={'quilted'}>
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
