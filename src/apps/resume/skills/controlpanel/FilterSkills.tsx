/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FormControl from '@mui/material/FormControl';
import { FormHelperText, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';
import { SkillsContext } from '../context/SkillsContext';
import { FilterSkillsStyle } from './FilterSkills.style';

function FilterSkills() {
  const { activeFilterId, setFilter } = useContext(SkillsContext);

  return (
    <div css={FilterSkillsStyle.root}>
      <FormControl variant={'standard'} fullWidth>
        <Select
          labelId='skill-filter'
          value={activeFilterId}
          onChange={(value) => setFilter(value.target.value)}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'code'}>Code</MenuItem>
          <MenuItem value={'frontend'}>Front End</MenuItem>
          <MenuItem value={'backend'}>Back End</MenuItem>
          <MenuItem value={'database'}>Database</MenuItem>
          <MenuItem value={'tools'}>Tools</MenuItem>
          <MenuItem value={'process'}>Process</MenuItem>
        </Select>
        <FormHelperText>Filter Skills</FormHelperText>
      </FormControl>
    </div>
  );
}

export default FilterSkills;
