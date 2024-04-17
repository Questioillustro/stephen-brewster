/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { DocumentScanner, SportsMartialArts, Widgets } from '@mui/icons-material';
import { NavbarButtonGroupStyle } from './NavbarButtonGroup.style';

function NavbarButtonGroup() {
  const buttons = [
    <Button
      startIcon={<DocumentScanner fontSize='large' />}
      key='resume'
      href={'/resume'}
      css={NavbarButtonGroupStyle.button}
    >
      Resume
    </Button>,
    <Button
      startIcon={<Widgets fontSize='large' />}
      key='widgets'
      href={'/widgets'}
      css={NavbarButtonGroupStyle.button}
    >
      Widgets
    </Button>,
    <Button
      startIcon={<SportsMartialArts fontSize='large' />}
      key='katas'
      href={'/katas'}
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
