import { css } from '@emotion/react';

export const SummaryStyle = {
  root: css({
    display: 'flex',
    flexDirection: 'row',
  }),
  textHidden: css({
    display: 'flex',
    maxHeight: '.8125rem',
  }),
  textShown: css({}),
  continueButton: css({
    minWidth: '9.375rem',
  }),
};
