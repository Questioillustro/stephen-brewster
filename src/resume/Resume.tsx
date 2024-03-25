/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ResumeStyle } from './Resume.style';
import ResumeSection from './section/ResumeSection';

function Resume() {
  return (
    <div css={ResumeStyle.root}>
      <ResumeSection title={'Contact'} subtitle={''} content={'sbrewster4669@gmail.com'} />

      <ResumeSection
        title={'Skills'}
        subtitle={''}
        content={
          'Javascript, CSS, HTML, Typescript, Angular, React, C#, Java, Spring, MongoDB, MySQL, Maven, AWS, Azure'
        }
      />

      <ResumeSection
        title={'Experience'}
        subtitle={''}
        content={'Solu Technology Partners, REDCOM.'}
      />

      <ResumeSection
        title={'Education'}
        subtitle={''}
        content={'RIT class of 2015, Magna Cum Laude.'}
      />
    </div>
  );
}

export default Resume;
