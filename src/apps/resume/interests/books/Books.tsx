/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useBooksHook } from './Books.hook';
import { BooksStyle } from './Books.style';
import Carousel from '@/components/carousel/Carousel';
import SBLink from '@/components/link/SBLink';

function Books() {
  const books = useBooksHook();

  const bookItems = books.map((b) => <img alt={b.name} src={b.image} height={130} key={b.name} />);

  return (
    <div css={BooksStyle.root}>
      <div css={BooksStyle.goodReadsLink}>
        <SBLink
          href={'https://www.goodreads.com/user/show/23215826-stephen-brewster'}
          variant={'body1'}
          linkContent={'GoodReads.com Profile'}
        />
      </div>

      <Carousel title={''} items={bookItems} itemWidth={170} />
    </div>
  );
}

export default Books;
