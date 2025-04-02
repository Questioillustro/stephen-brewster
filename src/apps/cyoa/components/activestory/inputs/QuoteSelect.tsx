﻿import { Autocomplete, Button, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface QuoteSelectProps {
  addQuote: (prompt: string) => void;
}

interface QuoteOption {
  value: string;
  label: string;
}

const QuoteSelect = (props: QuoteSelectProps) => {
  const { addQuote } = props;
  const [quote, setQuote] = useState<string>('NONE');
  const [inputValue, setInputValue] = useState('');
  const [quoteOptions, setQuoteOptions] = useState<QuoteOption[]>([]);

  const defaultQuotes: QuoteOption[] = [
    { value: 'NONE', label: 'None' },
    { value: 'A random famous person', label: 'Random' },
    { value: 'Albert Einstein', label: 'Albert Einstein' },
    { value: 'Abraham Lincoln', label: 'Abraham Lincoln' },
    { value: 'Friedrich Nietzsche', label: 'Friedrich Nietzsche' },
    { value: 'Sir Isaac Newton', label: 'Sir Isaac Newton' },
    { value: 'Cleopatra', label: 'Cleopatra' },
    { value: 'Leonardo da Vinci', label: 'Leonardo da Vinci' },
    { value: 'William Shakespeare', label: 'William Shakespeare' },
    { value: 'Marie Curie', label: 'Marie Curie' },
    { value: 'Mahatma Gandhi', label: 'Mahatma Gandhi' },
    { value: 'Joan of Arc', label: 'Joan of Arc' },
    { value: 'Socrates', label: 'Socrates' },
    { value: 'Queen Elizabeth I', label: 'Queen Elizabeth I' },
    { value: 'Martin Luther King Jr.', label: 'Martin Luther King Jr.' },
    { value: 'Charles Darwin', label: 'Charles Darwin' },
    { value: 'Amelia Earhart', label: 'Amelia Earhart' },
    { value: 'Wolfgang Amadeus Mozart', label: 'Wolfgang Amadeus Mozart' },
    { value: 'Nelson Mandela', label: 'Nelson Mandela' },
    { value: 'Hypatia', label: 'Hypatia' },
  ];

  useEffect(() => {
    const storedQuotes = localStorage.getItem('quoteOptions');
    if (storedQuotes) {
      setQuoteOptions(JSON.parse(storedQuotes));
    } else {
      setQuoteOptions(defaultQuotes);
      localStorage.setItem('quoteOptions', JSON.stringify(defaultQuotes));
    }
  }, []);

  const handleAddQuote = () => {
    if (
      inputValue &&
      !quoteOptions.some((option) => option.label.toLowerCase() === inputValue.toLowerCase())
    ) {
      const newQuote = {
        value: inputValue,
        label: inputValue,
      };
      const updatedOptions = [...quoteOptions, newQuote];
      setQuoteOptions(updatedOptions);
      localStorage.setItem('quoteOptions', JSON.stringify(updatedOptions));
      setQuote(newQuote.value);
      setInputValue('');
    }
  };

  const handleQuoteChange = (
    event: React.SyntheticEvent,
    newValue: QuoteOption | string | null,
  ) => {
    if (newValue) {
      if (typeof newValue === 'string') {
        setQuote(newValue);
        setInputValue(newValue);
      } else {
        setQuote(newValue.value);
        setInputValue(newValue.label);
      }
    } else {
      setQuote('NONE');
      setInputValue('');
    }
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    if (quote !== 'NONE') {
      const prompt = `Include a quote by ${quote}`;
      addQuote(prompt);
    } else {
      addQuote('');
    }
  }, [quote]);

  return (
    <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      <Autocomplete
        options={quoteOptions}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        value={quoteOptions.find((option) => option.value === quote) || null}
        onChange={handleQuoteChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label='Include a Quote by' variant='filled' />
        )}
        sx={{ flexGrow: 1 }}
      />
      <Button
        variant='contained'
        onClick={handleAddQuote}
        disabled={
          !inputValue ||
          quoteOptions.some((option) => option.label.toLowerCase() === inputValue.toLowerCase())
        }
      >
        Add
      </Button>
    </FormControl>
  );
};

export default QuoteSelect;
