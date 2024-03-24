import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { DocumentScanner, SportsMartialArts, Widgets } from '@mui/icons-material';
import React from 'react';
import { NavbarButtonGroupStyle } from './NavbarButtonGroup.style';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function NavbarButtonGroup() {
  const buttons = [
    <Button
      startIcon={<DocumentScanner fontSize='large' />}
      key='resume'
      css={NavbarButtonGroupStyle.button}
    >
      Resume
    </Button>,
    <Button
      startIcon={<Widgets fontSize='large' />}
      key='widgets'
      css={NavbarButtonGroupStyle.button}
    >
      Widgets
    </Button>,
    <Button
      startIcon={<SportsMartialArts fontSize='large' />}
      key='katas'
      css={NavbarButtonGroupStyle.button}
    >
      Katas
    </Button>,
  ];

  return (
    <ButtonGroup
      color={'primary'}
      size='large'
      aria-label='Large button group'
      css={NavbarButtonGroupStyle.root}
    >
      {buttons}
    </ButtonGroup>
  );
}

export default NavbarButtonGroup;
