export interface Guess {
  word: string;
  status: ('correct' | 'present' | 'absent')[];
}

export interface GameState {
  guesses: Guess[];
  currentGuess: string;
  guessIdx: number;
  date: string;
  letterStatuses: {
    [key: string]: 'correct' | 'present' | 'absent';
  };
  targetWord: string;
  gameOver: boolean;
  won: boolean;
}
