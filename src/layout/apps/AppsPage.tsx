import { Paper } from '@mui/material';
import { BuildAVentureCard } from '@/layout/apps/BuldAVentureCard';
import { CodeAssistantCard } from '@/layout/apps/CodeAssistantCard';

export const AppsPage: React.FC = () => {
  return (
    <Paper square sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <BuildAVentureCard />

      <CodeAssistantCard />
    </Paper>
  );
};
