import { Typography } from '@mui/material';
import React from 'react';

export interface IMenuListTextProps {
  text: string;
}

function MenuListText(props: IMenuListTextProps) {
  return <Typography variant={'h5'}>{props.text}</Typography>;
}

export default MenuListText;
