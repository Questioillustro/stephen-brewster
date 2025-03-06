import { css } from '@emotion/react';

export const TravelTileStyle = {
  root: css({}),
  tile: css({
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  }),
  modalContent: css({
    overflowY: 'auto',
    textAlign: 'center',
    position: 'absolute',
    maxHeight: '75%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    border: '.125rem solid #000',
    padding: '.625rem',
  }),
};
