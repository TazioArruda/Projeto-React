import { ApexOptions } from 'apexcharts';

export const defaultOptions: ApexOptions = {
  fill: { colors: ['#796CE0'] }, // Substitua '#1E90FF' pela cor desejada
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '45%' },
      track: { background: '#87CEFA' }, // Substitua '#87CEFA' pela cor desejada
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: '12px',
          color: '#FFFFFF', // Substitua '#FFFFFF' pela cor desejada
          fontWeight: 'bold',
        },
      },
    },
  },
};
