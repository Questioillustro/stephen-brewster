/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Route, Routes } from 'react-router-dom';
import Landing from '../../landing/Landing';
import Resume from '../../resume/Resume';
import Widgets from '../../widgets/Widgets';
import { ContentStyle } from './Content.style';

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

export default Content;
