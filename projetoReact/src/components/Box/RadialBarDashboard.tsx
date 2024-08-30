
import Chart from 'react-apexcharts';
import { defaultOptions } from './RadialBarDashboardStyles';

export type RadialBarProps = {
  percentageGraphic: number;
};

export function RadialBarDashboard({ percentageGraphic }: RadialBarProps) {
  return (
    <Chart
      series={[percentageGraphic]}
      width={80}
      height={80}
      options={defaultOptions}
      type="radialBar"
    />
  );
}
