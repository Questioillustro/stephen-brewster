/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import SBAccordion from '../components/accordion/SBAccordion';
import Masonry from '@mui/lab/Masonry';
import Skills from './skills/Skills';

function Resume() {
  return (
    <Masonry columns={1} spacing={2}>
      <SBAccordion title={'Contact'} content={'sbrewster4669@gmail.com'} />

      <SBAccordion title={'Skills'} content={<Skills />} />

      <SBAccordion title={'Experience'} content={'Solu Technology Partners, REDCOM.'} />

      <SBAccordion title={'Education'} content={'RIT class of 2015, Magna Cum Laude.'} />
    </Masonry>
  );
}

export default Resume;
