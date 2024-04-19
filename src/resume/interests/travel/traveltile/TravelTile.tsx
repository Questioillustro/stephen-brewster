/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TravelTileStyle } from './TravelTile.style';
import Typography from '@mui/material/Typography';
import { ITravelItem } from './Travels.hook';
import { Box, Modal, Paper } from '@mui/material';
import { useState } from 'react';
import TripDisplay from '../tripdisplay/TripDisplay';

export interface ITravelTileProps {
  item: ITravelItem;
}

function TravelTile(props: ITravelTileProps) {
  const { item } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div css={TravelTileStyle.root}>
      <div css={TravelTileStyle.tile} onClick={handleOpen}>
        <img alt={item.name} src={item.displayImage} height={100} />
        <Typography variant={'body2'}>{item.name}</Typography>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Paper elevation={0} css={TravelTileStyle.modalContent}>
          <Typography color={'primary'} variant='h6' component='h2'>
            {item.name} - {item.year}
          </Typography>
          <TripDisplay item={item} />
        </Paper>
      </Modal>
    </div>
  );
}

export default TravelTile;
