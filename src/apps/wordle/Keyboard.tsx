import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  letterStatuses: { [key: string]: 'correct' | 'present' | 'absent' };
}

const StyledButton = styled(Button)<{ status?: string }>(({ status }) => ({
  width: '100%',
  minWidth: '30px',
  height: '35px',
  fontSize: '14px',
  padding: '0px',
  backgroundColor:
    status === 'correct'
      ? '#4caf50'
      : status === 'present'
        ? '#ffca28'
        : status === 'absent'
          ? '#757575'
          : '#e0e0e0',
  color: status ? 'white' : 'black',
  '&:hover': {
    backgroundColor: status
      ? status === 'correct'
        ? '#388e3c'
        : status === 'present'
          ? '#ffb300'
          : '#616161'
      : '#d5d5d5',
  },
}));

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
  ['ENTER'],
];

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, letterStatuses = {} }) => {
  console.log('letter status', letterStatuses);
  return (
    <Box display='flex' flexDirection='column' gap={1} mt={2}>
      {keys.map((row, index) => (
        <Box key={index} display='flex' gap={0.5} justifyContent='center'>
          {row.map((key) => (
            <StyledButton
              key={key}
              onClick={() => onKeyPress(key)}
              status={letterStatuses[key.toLowerCase()]}
              variant='contained'
            >
              {key === 'BACKSPACE' ? '⌫' : key}
            </StyledButton>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Keyboard;
