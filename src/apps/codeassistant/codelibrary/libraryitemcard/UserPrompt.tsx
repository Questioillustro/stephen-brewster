import Typography from '@mui/material/Typography';

export interface IUserPromptProps {
  prompt?: string;
}

export const UserPrompt = (props: IUserPromptProps) => {
  return <Typography variant={'body1'}>{props.prompt}</Typography>;
};
