import { Autocomplete, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface ShakespearePlotSelectProps {
  addPlot: (prompt: string) => void;
}

interface PlotOption {
  value: string;
  label: string;
}

const ShakespearePlotSelect = (props: ShakespearePlotSelectProps) => {
  const { addPlot } = props;
  const [plot, setPlot] = useState<string>('NONE');
  const [inputValue, setInputValue] = useState('');
  const [plotOptions, setPlotOptions] = useState<PlotOption[]>([]);

  const defaultPlots: PlotOption[] = [
    { value: 'NONE', label: 'None' },
    {
      value: 'Romeo_and_Juliet',
      label: 'Star-crossed lovers (Romeo and Juliet)',
    },
    {
      value: 'Hamlet',
      label: 'Revenge and madness (Hamlet)',
    },
    {
      value: 'Macbeth',
      label: 'Ambition and downfall (Macbeth)',
    },
    {
      value: 'Othello',
      label: 'Jealousy and betrayal (Othello)',
    },
    {
      value: 'King_Lear',
      label: 'Family division and madness (King Lear)',
    },
    {
      value: 'Midsummer',
      label: "Love and magical confusion (A Midsummer Night's Dream)",
    },
    {
      value: 'Tempest',
      label: 'Shipwreck and magic (The Tempest)',
    },
    {
      value: 'Merchant',
      label: 'Debt and mercy (The Merchant of Venice)',
    },
    {
      value: 'Twelfth_Night',
      label: 'Mistaken identities (Twelfth Night)',
    },
    {
      value: 'Taming',
      label: 'Taming a wild spirit (The Taming of the Shrew)',
    },
    {
      value: 'Richard_III',
      label: 'Ruthless ambition (Richard III)',
    },
    {
      value: 'Much_Ado',
      label: 'Love and deception (Much Ado About Nothing)',
    },
    {
      value: 'Julius_Caesar',
      label: 'Conspiracy and assassination (Julius Caesar)',
    },
    {
      value: 'As_You_Like_It',
      label: 'Love in exile (As You Like It)',
    },
    {
      value: 'Henry_V',
      label: 'War and leadership (Henry V)',
    },
  ];

  useEffect(() => {
    const storedPlots = localStorage.getItem('plotOptions');
    if (storedPlots) {
      setPlotOptions(JSON.parse(storedPlots));
    } else {
      setPlotOptions(defaultPlots);
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
      setPlot('NONE');
      setInputValue('');
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
    if (plot.toLowerCase() !== 'none') {
      const prompt = `Write a story inspired by Shakespeare's ${plot} plot`;
      addPlot(prompt);
    } else {
      addPlot('');
    }
  }, [plot]);

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
            label="Select Shakespeare's Plot"
            variant='filled'
            onBlur={handleBlur}
          />
        )}
      />
    </FormControl>
  );
};

export default ShakespearePlotSelect;
