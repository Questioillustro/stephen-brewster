﻿import BasicTab, { TabData } from '@/components/tabs/BasicTab';
import { PythonScripts } from '@/apps/pythonscripts/PythonScripts';
import { Agents } from '@/apps/agents/Agents';
import { Paper } from '@mui/material';
import CyaMain from '@/apps/cyoa/CyaMain';
import FinanceNewsPanel from '@/apps/finance/FinanceNewsPanel';

export const AppsPage: React.FC = () => {
  const tabs: TabData[] = [
    {
      label: 'Build-A-Venture',
      content: <CyaMain />,
    },
    {
      label: 'Finance News',
      content: <FinanceNewsPanel />,
    },
    {
      label: 'Python Scripts',
      content: <PythonScripts />,
    },
    {
      label: 'AI Agents',
      content: <Agents />,
    },
  ];

  return (
    <Paper square sx={{ width: '100%', display: 'flex' }}>
      <BasicTab tabs={tabs} />
    </Paper>
  );
};
