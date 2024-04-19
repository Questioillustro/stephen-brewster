/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ReactNode, useEffect, useState } from 'react';
import { CarouselStyle } from './Carousel.style';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import useWindowDimensions from '../../hooks/WindowDimensions.hook';

export interface ICarouselProps {
  title: string;
  items: ReactNode[];
  itemWidth?: number;
}

function Carousel(props: ICarouselProps) {
  const [page, setPage] = useState(0);

  const { title, items, itemWidth } = props;

  const { height, width } = useWindowDimensions();

  const pageSize = Math.round(width / (itemWidth ?? 300));

  const showButtons = pageSize < items.length;

  useEffect(() => {
    setPage(0);
  }, [width]);

  const indexInRange = (index: number) => {
    return index >= pageSize * page && index < pageSize * page + pageSize;
  };

  return (
    <div css={CarouselStyle.root}>
      {showButtons && (
        <IconButton size={'large'} onClick={() => setPage(page - 1)} disabled={page === 0}>
          <ChevronLeft fontSize={'large'} />
        </IconButton>
      )}

      <div css={CarouselStyle.content}>{items.map((i, idx) => (indexInRange(idx) ? i : null))}</div>

      {showButtons && (
        <IconButton size={'large'} disabled={(page + 1) * pageSize >= items.length}>
          <ChevronRight fontSize={'large'} onClick={() => setPage(page + 1)} />
        </IconButton>
      )}
    </div>
  );
}

export default Carousel;
