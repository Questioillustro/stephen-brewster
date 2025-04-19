import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { shakeSpearePlots } from '@/apps/cyoa/components/inputs/plot/shakespearePlotList';

export interface ShakespearePlotSelectProps {
  addPlot: (prompt: string) => void;
}

export interface PlotOption {
  value: string;
  label: string;
}

const ShakespearePlotSelect = (props: ShakespearePlotSelectProps) => {
  const { addPlot } = props;
  const [plot, setPlot] = useState<string>('RANDOM');
  const [inputValue, setInputValue] = useState<string>('Random'); // Set initial inputValue to 'Random'
  const [plotOptions, setPlotOptions] = useState<PlotOption[]>([]);
  const [open, setOpen] = useState<boolean>(false); // State to control options list visibility
  const autocompleteRef = useRef<HTMLInputElement>(null); // Ref to focus input

  useEffect(() => {
    const storedPlots = localStorage.getItem('plotOptions');
    if (storedPlots) {
      setPlotOptions(JSON.parse(storedPlots));
    } else {
      setPlotOptions(shakeSpearePlots);
      localStorage.setItem('plotOptions', JSON.stringify(shakeSpearePlots));
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
        const newPlot = {
          value: selectedValue,
          label: selectedLabel,
        };
        const updatedOptions = [...plotOptions, newPlot];
        setPlotOptions(updatedOptions);
        localStorage.setItem('plotOptions', JSON.stringify(updatedOptions));
      }

      setPlot(selectedValue);
      setInputValue(selectedLabel);
    } else {
      setPlot('RANDOM');
      setInputValue('Random'); // Reset to 'Random' when cleared
    }
    setOpen(false); // Close the options list after selection
  };

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputValue && inputValue.trim() !== '') {
      handlePlotChange(event, inputValue);
    } else {
      setPlot('RANDOM');
      setInputValue('Random'); // Reset to 'Random' on empty blur
    }
  };

  const handleInputClick = () => {
    setPlot('RANDOM'); // Clear the selected plot
    setInputValue(''); // Clear the input field
    setOpen(true); // Open the options list
    if (autocompleteRef.current) {
      autocompleteRef.current.focus(); // Ensure input remains focused
    }
  };

  useEffect(() => {
    if (plot.toLowerCase() !== 'random') {
      const prompt = `Write a story inspired by Shakespeare's ${plot} plot`;
      addPlot(prompt);
    } else {
      addPlot('');
    }
  }, [plot, addPlot]);

  const defaultValue = plotOptions.find((option) => option.value === 'RANDOM') || null;

  return (
    <FormControl fullWidth>
      <Autocomplete
        options={plotOptions}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        value={plotOptions.find((option) => option.value === plot) || defaultValue}
        onChange={handlePlotChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        freeSolo
        open={open} // Control the open state
        onOpen={() => setOpen(true)} // Handle natural open events
        onClose={() => setOpen(false)} // Handle natural close events
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Shakespeare's Plot"
            variant='filled'
            onBlur={handleBlur}
            onClick={handleInputClick} // Clear and open on click
            inputRef={autocompleteRef} // Attach ref to input
          />
        )}
      />
    </FormControl>
  );
};

export default ShakespearePlotSelect;
