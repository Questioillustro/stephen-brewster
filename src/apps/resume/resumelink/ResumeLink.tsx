/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import {Download} from "@mui/icons-material";
import React from "react";

const ResumeLink: React.FC = () => {
  return( 
  <div css={ResumeLinkStyle.root}>
    <div css={ResumeLinkStyle.resumeText}>Resume</div>
    <Download/>
  </div>);
}

const ResumeLinkStyle = {
  root: css({ flexDirection: 'row', display: 'flex'}),
  resumeText: css({marginBottom: '.625rem'})
}

export default ResumeLink;
