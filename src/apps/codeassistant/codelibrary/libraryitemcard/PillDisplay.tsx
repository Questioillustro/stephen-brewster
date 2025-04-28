import React from 'react';
import { Chip } from '@mui/material';

interface IPillProps {
  label: string;
  color?: 'primary' | 'secondary';
}

const Pill = (props: IPillProps) => {
  return <Chip label={props.label} variant={'filled'} color={props.color} />;
};

export default Pill;
