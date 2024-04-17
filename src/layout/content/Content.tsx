/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Route, Routes } from 'react-router-dom';
import Landing from '../../landing/Landing';
import Resume from '../../resume/Resume';
import Widgets from '../../widgets/Widgets';
import Katas from '../../katas/Katas';
import { ContentStyle } from './Content.style';

function Content() {
  return (
    <div css={ContentStyle.root}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/widgets' element={<Widgets />} />
        <Route path='/katas' element={<Katas />} />
      </Routes>
    </div>
  );
}

export default Content;
