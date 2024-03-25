/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import SBAccordion from '../components/accordion/SBAccordion';
import Masonry from '@mui/lab/Masonry';

function Resume() {
  return (
    <Masonry columns={1} spacing={2}>
      <SBAccordion title={'Contact'} subtitle={''} content={'sbrewster4669@gmail.com'} />

      <SBAccordion
        title={'Skills'}
        subtitle={''}
        content={
          'Javascript, CSS, HTML, Typescript, Angular, React, C#, Java, Spring, MongoDB, MySQL, Maven, AWS, Azure'
        }
      />

      <SBAccordion
        title={'Experience'}
        subtitle={''}
        content={'Solu Technology Partners, REDCOM.'}
      />

      <SBAccordion
        title={'Education'}
        subtitle={''}
        content={'RIT class of 2015, Magna Cum Laude.'}
      />
    </Masonry>
  );
}

export default Resume;
