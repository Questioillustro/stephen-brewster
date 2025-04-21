import { Paper } from '@mui/material';
import { BuildAVentureCard } from '@/layout/apps/BuldAVentureCard';
import { CodeAssistantCard } from '@/layout/apps/CodeAssistantCard';
import { WordleCard } from '@/layout/apps/WordleCard';

export const AppsPage: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{ pt: 2, width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <BuildAVentureCard />

      <CodeAssistantCard />

      <WordleCard />
    </Paper>
  );
};
