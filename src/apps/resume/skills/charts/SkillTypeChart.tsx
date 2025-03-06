import { PieChart } from '@mui/x-charts';
import { useContext, useMemo } from 'react';
import { SkillsContext } from '../context/SkillsContext';
import useWindowDimensions from '@/hooks/WindowDimensions.hook';
import { LegendRendererProps } from '@mui/x-charts/ChartsLegend/DefaultChartsLegend';
import { CardinalDirections } from '@mui/x-charts/models/layout';

interface IPieData {
  id: number;
  value: number;
  label: string;
}

function SkillTypeChart() {
  const { activeFilterId, getActiveSkills, getActiveFilterArray } = useContext(SkillsContext);

  const { width } = useWindowDimensions();

  const data: IPieData[] = useMemo(() => {
    const displayData: IPieData[] = [];
    const filterArray = getActiveFilterArray();
    const activeSkills = getActiveSkills();

    if (filterArray.length > 1) {
      for (var x = 0; x < filterArray.length; x++) {
        const total = activeSkills
          .filter((s) => s.skillType === filterArray[x])
          .map((s) => s.years)
          .reduce((partialSum, a) => partialSum + a, 0);
        displayData.push({ id: x, value: total, label: filterArray[x] });
      }
    } else {
      activeSkills
        .filter((a) => a.skillType === filterArray[0])
        .forEach((a, idx) => displayData.push({ id: idx, value: a.years, label: a.name }));
    }

    return displayData.sort((a, b) => {
      if (a.value > b.value) return -1;
      if (a.value < b.value) return 1;
      return 0;
    });
  }, [activeFilterId]);

  const legendAttributes: Partial<LegendRendererProps> = useMemo(() => {
    if (width < 1000) {
      return {
        direction: 'row',
        position: { horizontal: 'middle', vertical: 'bottom' },
      };
    }

    return {
      direction: 'column',
      position: { horizontal: 'right', vertical: 'middle' },
    };
  }, [width]);

  const chartWidth = useMemo(() => {
    return Math.min(Math.round(width * 0.8), 640);
  }, [width]);

  const chartPadding: Partial<CardinalDirections<number>> = useMemo(() => {
    if (width < 1000) {
      return { top: 10, bottom: 100 };
    } else if (width < 500) {
      return { top: 20, bottom: 120 };
    } else {
      return { top: 60, bottom: 0 };
    }
  }, [width]);

  return (
    <PieChart
      margin={chartPadding}
      series={[
        {
          data: data,
          cx: chartWidth / 2,
          cy: 130,
        },
      ]}
      slotProps={{
        legend: legendAttributes,
      }}
      width={chartWidth}
      height={350}
    />
  );
}

export default SkillTypeChart;
