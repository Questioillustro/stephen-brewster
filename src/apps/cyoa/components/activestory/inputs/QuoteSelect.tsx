import React, { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export interface QuoteSelectProps {
  addQuote: (prompt: string) => void;
}

const QuoteSelect = (props: QuoteSelectProps) => {
  const { addQuote } = props;

  const [quote, setQuote] = useState<string>('NONE');

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setQuote(value);
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
    <FormControl variant={'filled'} fullWidth>
      <InputLabel id="quote-select-label">Include a Quote by</InputLabel>
      <Select
        labelId="quote-select-label"
        id="quote-select"
        value={quote}
        label="Quote"
        defaultValue={'NONE'}
        onChange={handleChange}
      >
        <MenuItem value={'NONE'}>None</MenuItem>
        <MenuItem value={'A random famous person'}>Random</MenuItem>
        <MenuItem value={'Albert Einstein'}>Albert Einstein</MenuItem>
        <MenuItem value={'Abraham Lincoln'}>Abraham Lincoln</MenuItem>
        <MenuItem value={'Friedrich Nietzsche'}>Friedrich Nietzsche</MenuItem>
        <MenuItem value={'Sir Isaac Newton'}>Sir Isaac Newton</MenuItem>
      </Select>
    </FormControl>
  );
};

export default QuoteSelect;
