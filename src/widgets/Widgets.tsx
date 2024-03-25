/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Masonry from '@mui/lab/Masonry';
import SBAccordion from '../components/accordion/SBAccordion';

function Widgets() {
  return (
    <Masonry columns={1} spacing={2}>
      <SBAccordion title={'Typing Challenge'} subtitle={''} content={'I will be a widget'} />
    </Masonry>
  );
}

export default Widgets;
