import { Paper } from '@mui/material';
import FinanceDataGrid from '@/apps/finance/FinanceDataGrid';
import MacroNews from '@/apps/finance/MacroNews';

export interface IFinanceNewsPanelProps {}

const FinanceNewsPanel: React.FC<IFinanceNewsPanelProps> = () => {
  return (
    <Paper square elevation={10}>
      <MacroNews />
      <FinanceDataGrid />
    </Paper>
  );
};

export default FinanceNewsPanel;
