import { TextField } from '@mui/material';

export interface MainCharacterNameProps {
  setCharacterName: (name: string) => void;
}

const MainCharacterName = (props: MainCharacterNameProps) => {
  const { setCharacterName } = props;

  return (
    <TextField
      defaultValue={'Random'}
      label={'Main Character Name'}
      onChange={(e) =>
        setCharacterName(`Make the main character's name ${e.target.value}`)
      }
    />
  );
};

export default MainCharacterName;
