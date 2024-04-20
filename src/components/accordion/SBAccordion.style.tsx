﻿import { css } from '@emotion/react';

export const SBAccordionStyle = {
  root: css({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  }),
  title: css({
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    marginLeft: '23px',
  }),
  details: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }),
};
