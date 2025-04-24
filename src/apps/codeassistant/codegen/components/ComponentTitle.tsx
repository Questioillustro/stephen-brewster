import Typography from '@mui/material/Typography';

export interface IComponentTitleProps {
  title: string;
}

export const ComponentTitle = (props: IComponentTitleProps) => (
  <Typography variant={'h6'}>{props.title}</Typography>
);
