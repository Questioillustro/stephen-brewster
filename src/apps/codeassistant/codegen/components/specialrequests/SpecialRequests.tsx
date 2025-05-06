import { ComponentTitle } from '@/apps/codeassistant/codegen/components/ComponentTitle';
import { Paper, Stack } from '@mui/material';
import { SpecialRequestAutocomplete } from './SpecialRequestAutocomplete';
import { SpecialRequestsChipDisplay } from './SpecialRequestsChipDisplay';
import React from 'react';
import { CAPaperPanel } from '@/apps/codeassistant/components/CAPaperPanel';

export const SpecialRequests = () => {
  return (
    <CAPaperPanel sx={{ p: 2, width: '100%' }}>
      <Stack sx={{ gap: 1 }}>
        <ComponentTitle title={'Special Requests'} />

        <SpecialRequestAutocomplete />

        <SpecialRequestsChipDisplay />
      </Stack>
    </CAPaperPanel>
  );
};
