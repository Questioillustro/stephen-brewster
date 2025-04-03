import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface ChildrensPlotSelectProps {
  addPlot: (prompt: string) => void;
}

interface PlotOption {
  value: string;
  label: string;
}

const ChildrensPlotSelect = (props: ChildrensPlotSelectProps) => {
  const { addPlot } = props;

  const defaultPlots: PlotOption[] = [
    { value: 'RANDOM', label: 'Random' },
    { value: 'Self_Discovery', label: 'A journey of self-discovery' },
    { value: 'New_Friend', label: 'Meeting a new friend' },
    { value: 'Lost_And_Found', label: 'Losing and finding something precious' },
    { value: 'Magical_Discovery', label: 'Discovering a magical world or object' },
    { value: 'Overcoming_Monster', label: 'Overcoming a big, scary challenge' },
    { value: 'Mischief_Maker', label: 'A mischievous character causing trouble' },
    { value: 'Family_Fixer', label: 'Fixing a family problem' },
    { value: 'Animal_Hero', label: 'An animal hero saving the day' },
    { value: 'Big_Move', label: 'Adapting to a big change' },
    { value: 'Imagination_Unleashed', label: 'Imagination coming to life' },
    { value: 'Secret_Hideout', label: 'Finding a secret hideout' },
    { value: 'Brave_Helper', label: 'A brave little helper stepping up' },
    { value: 'Time_Mix_Up', label: 'A mix-up in time' },
    { value: 'Lost_Voice', label: 'Finding a new way to be heard' },
    { value: 'Unexpected_Gift', label: 'Receiving an unexpected gift' },
    { value: 'Rival_Ally', label: 'Turning a rival into an ally' },
    { value: 'Weather_Whisperer', label: 'Controlling the weather' },
    { value: 'Tiny_World', label: 'Exploring a tiny world' },
    { value: 'Festival_Fiasco', label: 'Saving a festival from disaster' },
    { value: 'Dream_Weaver', label: 'Dreams shaping reality' },
  ];

  // Initialize plot and inputValue with a random option (excluding 'RANDOM')
  const getRandomPlot = () => {
    const plotOptions = defaultPlots.filter((option) => option.value !== 'RANDOM');
    const randomIndex = Math.floor(Math.random() * plotOptions.length);
    return plotOptions[randomIndex];
  };

  const initialPlot = getRandomPlot();
  const [plot, setPlot] = useState<string>(initialPlot.value);
  const [inputValue, setInputValue] = useState<string>(initialPlot.label);
  const [plotOptions, setPlotOptions] = useState<PlotOption[]>(defaultPlots); // Initialize synchronously

  useEffect(() => {
    const storedPlots = localStorage.getItem('plotOptions');
    if (storedPlots) {
      setPlotOptions(JSON.parse(storedPlots));
    } else {
      localStorage.setItem('plotOptions', JSON.stringify(defaultPlots));
    }
  }, []);

  const handlePlotChange = (event: React.SyntheticEvent, newValue: PlotOption | string | null) => {
    if (newValue) {
      let selectedValue: string;
      let selectedLabel: string;

      if (typeof newValue === 'string') {
        selectedValue = newValue;
        selectedLabel = newValue;
      } else {
        selectedValue = newValue.value;
        selectedLabel = newValue.label;
      }

      if (
        !plotOptions.some((option) => option.label.toLowerCase() === selectedLabel.toLowerCase())
      ) {
        const newPlot = { value: selectedValue, label: selectedLabel };
        const updatedOptions = [...plotOptions, newPlot];
        setPlotOptions(updatedOptions);
        localStorage.setItem('plotOptions', JSON.stringify(updatedOptions));
      }

      setPlot(selectedValue);
      setInputValue(selectedLabel);
    } else {
      const randomPlot = getRandomPlot();
      setPlot(randomPlot.value);
      setInputValue(randomPlot.label);
    }
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputValue && inputValue.trim() !== '') {
      handlePlotChange(event, inputValue);
    }
  };

  useEffect(() => {
    if (plot.toLowerCase() !== 'random') {
      const prompt = `Write a children's story inspired by the theme of ${plot}`;
      addPlot(prompt);
    } else {
      const randomPlot = getRandomPlot();
      const prompt = `Write a children's story inspired by the theme of ${randomPlot.value}`;
      addPlot(prompt);
    }
  }, [plot, addPlot]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        options={plotOptions}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        value={plotOptions.find((option) => option.value === plot) || null}
        onChange={handlePlotChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Children's Book Plot"
            variant='filled'
            onBlur={handleBlur}
          />
        )}
      />
    </FormControl>
  );
};

export default ChildrensPlotSelect;
