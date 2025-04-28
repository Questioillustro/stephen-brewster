import Typography from '@mui/material/Typography';

export interface IUserPromptProps {
  prompt?: string;
}

export const UserPrompt = (props: IUserPromptProps) => {
  return <Typography variant={'h6'}>{props.prompt}</Typography>;
};
