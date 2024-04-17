import { css } from '@emotion/react';

export const SummaryStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'row',
  }),
  textHidden: css({
    display: 'flex',
    maxHeight: '13px',
  }),
  textShown: css({}),
  continueButton: css({
    minWidth: '150px',
  }),
};
