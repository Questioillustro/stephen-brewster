import { ComponentTitle } from '@/apps/codeassistant/codegen/components/ComponentTitle';
import { Stack } from '@mui/material';
import { SpecialRequestAutocomplete } from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequestAutocomplete';
import { SpecialRequestsChipDisplay } from '@/apps/codeassistant/codegen/components/inputs/specialrequests/SpecialRequestsChipDisplay';
import React from 'react';

export const SpecialRequests = () => {
  return (
    <Stack sx={{ width: '100%', gap: 1 }}>
      <ComponentTitle title={'Special Requests'} />

      <SpecialRequestAutocomplete />

      <SpecialRequestsChipDisplay />
    </Stack>
  );
};
