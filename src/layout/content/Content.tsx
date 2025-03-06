/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Route, Routes } from 'react-router-dom';
import Landing from '../../landing/Landing';
import Resume from '@/apps/resume/Resume';
import Widgets from '../../widgets/Widgets';

function Content() {
  return (
    <div css={ContentStyle.root}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/widgets' element={<Widgets />} />
      </Routes>
    </div>
  );
}

const ContentStyle = {
  root: css({
    padding: '1.25rem',
    display: 'flex',
    width: '90%',
  }),
};

export default Content;
