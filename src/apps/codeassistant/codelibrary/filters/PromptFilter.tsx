import { TextField } from '@mui/material';

export interface IPromptFilterProps {
  onChange: (text: string) => void;
}

export const PromptFilter = (props: IPromptFilterProps) => {
  return (
    <TextField
      id='outlined-basic'
      label='Search'
      placeholder={'Search... '}
      variant='outlined'
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
      }}
      sx={{ width: '100%' }}
    />
  );
};
