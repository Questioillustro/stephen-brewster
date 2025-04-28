import { ComponentTitle } from '@/apps/codeassistant/codegen/components/ComponentTitle';
import { Paper, Stack } from '@mui/material';
import { SpecialRequestAutocomplete } from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequestAutocomplete';
import { SpecialRequestsChipDisplay } from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequestsChipDisplay';
import React from 'react';

export const SpecialRequests = () => {
  return (
    <Paper elevation={2} sx={{ p: 2, width: '100%' }}>
      <Stack sx={{ gap: 1 }}>
        <ComponentTitle title={'Special Requests'} />

        <SpecialRequestAutocomplete />

        <SpecialRequestsChipDisplay />
      </Stack>
    </Paper>
  );
};
