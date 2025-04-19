import { TextField } from '@mui/material';
import { useEffect } from 'react';

export interface MainCharacterNameProps {
  setCharacterName: (name: string) => void;
}

const MainCharacterName = (props: MainCharacterNameProps) => {
  const { setCharacterName } = props;

  useEffect(() => {
    setName('Choose a random gender appropriate name');
  }, [setCharacterName]);

  const setName = (name: string) => {
    setCharacterName(`The main character's name is: ${name}.`);
  };

  return (
    <TextField
      defaultValue={'Random'}
      label={'Character Name'}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default MainCharacterName;
