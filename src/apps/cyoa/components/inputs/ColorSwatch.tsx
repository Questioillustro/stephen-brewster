import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

interface ColorOption {
  name: string;
  hex: string;
}

const colorOptions: ColorOption[] = [
  { name: 'Ruby Red', hex: '#E0115F' }, // Strong red
  { name: 'Coral', hex: '#FF7F50' }, // Red-orange
  { name: 'Tangerine', hex: '#FF8C00' }, // Orange
  { name: 'Sunflower', hex: '#FFC107' }, // Yellow
  { name: 'Golden Tan', hex: '#D4A373' }, // Yellow-brown
  { name: 'Mint', hex: '#98FF98' }, // Light green
  { name: 'Emerald Green', hex: '#50C878' }, // Green
  { name: 'Turquoise', hex: '#40E0D0' }, // Cyan
  { name: 'Sky Blue', hex: '#87CEEB' }, // Light blue
  { name: 'Lavender', hex: '#E6E6FA' }, // Very light purple
  { name: 'Amethyst', hex: '#9966CC' }, // Purple
  { name: 'Violet', hex: '#EE82EE' }, // Light magenta-purple
  { name: 'Magenta', hex: '#FF00FF' }, // Magenta
  { name: 'Pale Rose', hex: '#F8D8D8' }, // Light pink (transition to neutrals)
  { name: 'Rich Cocoa', hex: '#5C4033' }, // Brown
  { name: 'Ebony', hex: '#3A2E28' }, // Dark neutral
];

interface ColorSelectorProps {
  onColorSelect?: (color: string) => void;
  title?: string;
}

export const ColorSwatch: React.FC<ColorSelectorProps> = ({ onColorSelect, title }) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);

  const handleColorClick = (color: ColorOption) => {
    setSelectedColor(color);
    if (onColorSelect) {
      onColorSelect(color.name);
    }
  };

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        {colorOptions.map((color) => (
          <Box
            key={color.hex}
            sx={{
              width: 30,
              height: 30,
              backgroundColor: color.hex,
              border:
                selectedColor.hex === color.hex
                  ? '2px solid #2196F3' // Blue border for selected
                  : '1px solid #000', // Default border
              cursor: 'pointer',
              borderRadius: 1,
              '&:hover': {
                opacity: 0.8,
              },
            }}
            onClick={() => handleColorClick(color)}
            title={color.name} // Shows name on hover
          />
        ))}
      </Box>
    </Box>
  );
};
