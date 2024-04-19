import { css } from '@emotion/react';

export const TravelTileStyle = {
  root: css({}),
  tile: css({
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  }),
  modalContent: css({
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    border: '2px solid #000',
    padding: '10px',
  }),
};
