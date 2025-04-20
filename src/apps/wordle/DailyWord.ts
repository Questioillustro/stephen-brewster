import seedrandom from 'seedrandom';
import { WORDS } from '@/apps/wordle/words';

export const getDateString = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const getDailyWord = (date?: Date) => {
  const theDay = date ?? new Date();
  let dailyWord = localStorage.getItem('dailyWord');
  const storedDate = localStorage.getItem('dailyWordDate');

  const dateString = getDateString(theDay);

  if (storedDate !== dateString || !dailyWord) {
    const rng = seedrandom(dateString);
    const index = Math.floor(rng() * WORDS.length);

    dailyWord = WORDS[index].toUpperCase();

    localStorage.setItem('dailyWord', dailyWord);
    localStorage.setItem('dailyWordDate', dateString);
  }

  return dailyWord;
};
