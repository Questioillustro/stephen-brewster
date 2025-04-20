import { Box } from '@mui/material';
import Tile from './Tile';
import { Guess } from '@/apps/wordle/Types';

interface BoardProps {
  guesses: Guess[];
  currentGuess: string;
  guessIdx: number;
}

const Board: React.FC<BoardProps> = ({ guesses, currentGuess, guessIdx }) => {
  const rows = Array(6).fill(null);

  return (
    <Box display='flex' flexDirection='column' gap={1}>
      {rows.map((_, rowIndex) => {
        const guess = guesses[rowIndex] || { word: currentGuess.padEnd(5, ' '), status: [] };
        return (
          <Box key={rowIndex} display='flex' gap={1}>
            {rowIndex < guessIdx &&
              guesses[rowIndex].word
                .split('')
                .map((letter: string, colIndex: number) => (
                  <Tile key={colIndex} letter={letter} status={guess.status[colIndex]} />
                ))}

            {rowIndex === guessIdx &&
              guess.word
                .split('')
                .map((letter: string, colIndex: number) => (
                  <Tile key={colIndex} letter={letter} status={guess.status[colIndex]} />
                ))}

            {rowIndex > guessIdx &&
              guess.word
                .split('')
                .map((letter: string, colIndex: number) => <Tile key={colIndex} letter={''} />)}
          </Box>
        );
      })}
    </Box>
  );
};

export default Board;
