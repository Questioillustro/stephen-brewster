import React, { useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

interface ColorOption {
  name: string;
  hex: string;
}

const colorOptions: ColorOption[] = [
  { name: 'Pale Rose', hex: '#F8D8D8' },
  { name: 'Golden Tan', hex: '#D4A373' },
  { name: 'Rich Cocoa', hex: '#5C4033' },
  { name: 'Ebony', hex: '#3A2E28' },
  { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Emerald Green', hex: '#50C878' },
  { name: 'Amethyst', hex: '#9966CC' },
  { name: 'Ruby Red', hex: '#E0115F' },
  { name: 'Sunflower', hex: '#FFC107' },
  { name: 'Tangerine', hex: '#FF8C00' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Mint', hex: '#98FF98' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Violet', hex: '#EE82EE' },
];
interface ColorSelectorProps {
  onColorSelect?: (color: string) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);

  const handleColorChange = (event: SelectChangeEvent<string>) => {
    const hex = event.target.value;
    const newColor = colorOptions.find((color) => color.hex === hex) || colorOptions[0];
    setSelectedColor(newColor);
    if (onColorSelect) {
      onColorSelect(newColor.name);
    }
  };

  return (
    <Box sx={{ maxWidth: 300, p: 2 }}>
      <Typography variant='h6' gutterBottom>
        Skin Color
      </Typography>

      <FormControl fullWidth>
        <InputLabel id='color-select-label'>Color</InputLabel>
        <Select
          labelId='color-select-label'
          value={selectedColor.hex}
          label='Color'
          onChange={handleColorChange}
          renderValue={(hex) => {
            const color = colorOptions.find((c) => c.hex === hex);

            return color ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Color swatch for selected value */}
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: color.hex,
                    border: '1px solid #000', // Added border to make it visible even if color fails
                    borderRadius: 1,
                    mr: 1, // Margin right
                  }}
                />
                {color.name}
              </Box>
            ) : null;
          }}
        >
          {colorOptions.map((color) => {
            return (
              <MenuItem key={color.hex} value={color.hex}>
                {/* Color swatch for dropdown menu items */}
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: color.hex,
                    border: '1px solid #000', // Added border
                    borderRadius: 1,
                    mr: 1,
                  }}
                />
                {color.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
