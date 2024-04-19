/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useBooksHook } from './Books.hook';
import { BooksStyle } from './Books.style';
import Carousel from '../../../components/carousel/Carousel';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function Books() {
  const books = useBooksHook();

  const bookItems = books.map((b) => <img alt={b.name} src={b.image} height={130} />);

  return (
    <div css={BooksStyle.root}>
      <Link
        href={'https://www.goodreads.com/user/show/23215826-stephen-brewster'}
        underline={'none'}
        target={'_blank'}
      >
        <Typography variant={'body1'}>GoodReads.com Profile</Typography>
      </Link>

      <Carousel title={''} items={bookItems} itemWidth={150} />
    </div>
  );
}

export default Books;
