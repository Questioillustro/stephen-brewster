import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface TileProps {
  letter: string;
  status?: 'correct' | 'present' | 'absent';
}

const StyledTile = styled(Box)<{ status?: string }>(({ status }) => ({
  width: 50,
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #ccc',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  backgroundColor:
    status === 'correct'
      ? '#4caf50'
      : status === 'present'
        ? '#ffca28'
        : status === 'absent'
          ? '#757575'
          : 'white',
  color: status ? 'white' : 'black',
}));

const Tile: React.FC<TileProps> = ({ letter, status }) => {
  return <StyledTile status={status}>{letter}</StyledTile>;
};

export default Tile;
