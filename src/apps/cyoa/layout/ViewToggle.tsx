import { Stack } from '@mui/material';
import { BuildView } from '@/apps/cyoa/layout/BuildView';
import { BavLibrary } from '@/apps/cyoa/layout/BavLibrary';

export const ViewToggle = () => {
  return (
    <Stack direction={'row'} sx={{ gap: 2 }}>
      <BuildView />
      <BavLibrary />
    </Stack>
  );
};
