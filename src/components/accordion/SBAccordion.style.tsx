import { css } from '@emotion/react';

export const SBAccordionStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  }),
  summary: css({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  }),
  title: css({
    display: 'flex',
    width: '100%',
  }),
  details: css({
    padding: '10px',
  }),
};
