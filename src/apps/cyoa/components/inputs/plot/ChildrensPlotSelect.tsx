import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { childrensPlots } from '@/apps/cyoa/components/inputs/plot/childrensPlotList';

export interface ChildrensPlotSelectProps {
  addPlot: (prompt: string) => void;
}

interface PlotOption {
  value: string;
  label: string;
}

const ChildrensPlotSelect = (props: ChildrensPlotSelectProps) => {
  const { addPlot } = props;

  const PLOT_VERSION = '1';

  // Initialize plot and inputValue with a random option (excluding 'RANDOM')
  const getRandomPlot = () => {
    const plotOptions = childrensPlots.filter((option) => option.value !== 'RANDOM');
    const randomIndex = Math.floor(Math.random() * plotOptions.length);
    return plotOptions[randomIndex];
  };

  const initialPlot = getRandomPlot();
  const [plot, setPlot] = useState<string>(initialPlot.label);
  const [inputValue, setInputValue] = useState<string>(initialPlot.label);
  const [plotOptions, setPlotOptions] = useState<PlotOption[]>(childrensPlots); // Initialize synchronously
  const [open, setOpen] = useState<boolean>(false); // State to control options list visibility
  const autocompleteRef = useRef<HTMLInputElement>(null); // Ref to focus input

  useEffect(() => {
    const plotVersion = localStorage.getItem('plotVersion');

    if (plotVersion !== PLOT_VERSION) {
      localStorage.setItem('plotVersion', PLOT_VERSION);
      localStorage.setItem('plotOptions', JSON.stringify(childrensPlots));
    } else {
      const storedPlots = localStorage.getItem('plotOptions');
      if (storedPlots) {
        setPlotOptions(JSON.parse(storedPlots));
      } else {
        localStorage.setItem('plotOptions', JSON.stringify(childrensPlots));
      }
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

      setPlot(selectedLabel);
      setInputValue(selectedLabel);
    } else {
      const randomPlot = getRandomPlot();
      setPlot(randomPlot.value);
      setInputValue(randomPlot.label); // Reset to a random plot when cleared
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
      const randomPlot = getRandomPlot();
      setPlot(randomPlot.value);
      setInputValue(randomPlot.label); // Reset to a random plot on empty blur
    }
  };

  const handleInputClick = () => {
    setPlot('RANDOM'); // Clear the selected plot to 'RANDOM'
    setInputValue(''); // Clear the input field
    setOpen(true); // Open the options list
    if (autocompleteRef.current) {
      autocompleteRef.current.focus(); // Ensure input remains focused
    }
  };

  useEffect(() => {
    let plotChoice;
    const prefix = `The inspiration for the plot should be:`;
    if (plot.toLowerCase() !== 'random') {
      plotChoice = ` ${plot}`;
    } else {
      const randomPlot = getRandomPlot();
      plotChoice = `${randomPlot.label}`;
    }
    addPlot(`${prefix} ${plotChoice}.`);
  }, [plot, addPlot]);

  const defaultValue = plotOptions.find((option) => option.value === plot) || null;

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
            label='Plot'
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

export default ChildrensPlotSelect;
