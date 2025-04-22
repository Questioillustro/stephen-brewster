import { Paper } from '@mui/material';
import { BuildAVentureCard } from '@/layout/apps/BuldAVentureCard';
import { CodeAssistantCard } from '@/layout/apps/CodeAssistantCard';
import { WordleCard } from '@/layout/apps/WordleCard';

export const AppsPage: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        pt: 2,
        width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: ' center',
      }}
    >
      <BuildAVentureCard />

      <CodeAssistantCard />

      <WordleCard />
    </Paper>
  );
};
