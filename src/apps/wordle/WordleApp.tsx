import React, { useState, useEffect } from 'react';
import { Snackbar, Stack, Paper } from '@mui/material';
import Board from './Board';
import Keyboard from './Keyboard';
import { WORDS } from './words';
import { GameState, Guess } from '@/apps/wordle/Types';
import { getDailyWord, getDateString } from '@/apps/wordle/DailyWord';
import AppHeader from '@/layout/apps/AppHeader';
import { AboutNotWordle } from '@/apps/wordle/AboutNotWordle';

const WordleApp: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [date, setDate] = useState<Date>(new Date());

  const getInitialState = () => {
    let storedState: GameState;
    const dailyWord = getDailyWord();

    try {
      storedState = JSON.parse(localStorage.getItem('wordleGameState') ?? '');
      if (storedState && dailyWord === storedState.targetWord) {
        return storedState;
      } else {
        return defaultGameState;
      }
    } catch (error) {
      return defaultGameState;
    }
  };

  const defaultGameState = {
    guesses: [],
    currentGuess: '',
    letterStatuses: {},
    guessIdx: 0,
    date: getDateString(date),
    targetWord: getDailyWord(),
    gameOver: false,
    won: false,
  };

  const [gameState, setGameState] = useState<GameState>(getInitialState());

  const updateLocalStorage = () => {
    localStorage.setItem('wordleGameState', JSON.stringify(gameState));
  };

  const evaluateGuess = (guess: string): Guess => {
    const status = Array(5).fill('absent');
    const target = gameState.targetWord.split('');
    const guessLetters = guess.split('');

    // Check for correct letters
    guessLetters.forEach((letter, i) => {
      if (letter === target[i]) {
        status[i] = 'correct';
        target[i] = ''; // Mark as used
      }
    });

    // Check for present letters
    guessLetters.forEach((letter, i) => {
      if (status[i] !== 'correct' && target.includes(letter)) {
        status[i] = 'present';
        target[target.indexOf(letter)] = ''; // Mark as used
      }
    });

    return { word: guess, status };
  };

  const getLetterStatuses = (guess: Guess) => {
    const newStatuses = { ...gameState.letterStatuses };
    guess.word.split('').forEach((letter, i) => {
      const currentStatus = newStatuses[letter.toLowerCase()];
      const newStatus = guess.status[i];
      if (
        !currentStatus ||
        newStatus === 'correct' ||
        (newStatus === 'present' && currentStatus !== 'correct')
      ) {
        newStatuses[letter.toLowerCase()] = newStatus;
      }
    });
    return newStatuses;
  };

  const handleKeyPress = (key: string) => {
    if (gameState.gameOver) return;

    if (key === 'ENTER') {
      if (gameState.currentGuess.length !== 5) {
        setSnackbarMessage('Guess must be 5 letters!');
        setSnackbarOpen(true);
        return;
      }
      if (!WORDS.includes(gameState.currentGuess.toLowerCase())) {
        setSnackbarMessage('Not a valid word!');
        setSnackbarOpen(true);
        return;
      }

      const newGuess = evaluateGuess(gameState.currentGuess);
      const letterStatuses = getLetterStatuses(newGuess);
      const newGuesses = [...gameState.guesses, newGuess];
      const won = gameState.currentGuess === gameState.targetWord;
      const gameOver = newGuesses.length >= 6 || won;

      setGameState({
        ...gameState,
        guesses: newGuesses,
        currentGuess: '',
        letterStatuses: letterStatuses,
        guessIdx: gameState.guessIdx + 1,
        gameOver,
        won,
      });

      if (gameOver) {
        setSnackbarMessage(won ? 'You won!' : `Game over! The word was ${gameState.targetWord}.`);
        setSnackbarOpen(true);
      }
      return;
    }

    if (key === 'BACKSPACE') {
      setGameState({ ...gameState, currentGuess: gameState.currentGuess.slice(0, -1) });
      return;
    }

    if (/^[A-Z]$/.test(key) && gameState.currentGuess.length < 5) {
      setGameState({ ...gameState, currentGuess: gameState.currentGuess + key });
    }
  };

  useEffect(() => {
    getInitialState();
  }, []);

  useEffect(() => {
    updateLocalStorage();
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (key === 'ENTER' || key === 'BACKSPACE' || /^[A-Z]$/.test(key)) {
        handleKeyPress(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  return (
    <Stack sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <AppHeader about={<AboutNotWordle />} />

      <Paper elevation={2} sx={{ display: 'flex', width: '100%' }}>
        <Stack sx={{ width: '100%', m: 4, alignItems: 'center' }}>
          <Board
            guesses={gameState.guesses}
            currentGuess={gameState.currentGuess}
            guessIdx={gameState.guessIdx}
          />

          <Keyboard onKeyPress={handleKeyPress} letterStatuses={gameState.letterStatuses} />

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
          />
        </Stack>
      </Paper>
    </Stack>
  );
};

export default WordleApp;
