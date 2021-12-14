import { LegendProps } from '../../ChartWithChildren/Legend'

export const legendData: LegendProps['data'] = {
  youPay: { label: 'You pay', color: '#dedede' },
  feePaidByMedicare: { label: 'Paid by Medicare', color: '#E6F5F7' },
  feePaidByHBF: { label: 'Paid by HBF', color: '#009FAE' },
  gapPaidByHBF: { label: 'Paid by HBF', color: '#003959' },
}

export default {
  showLabels: true,
  showValues: false,
  headings: [
    {
      label: 'Medicare Benefits Schedule (MBS) fee',
      value: 100,
    },
    {
      label: 'Medical Gap',
      value: 25,
      showBenchmark: true,
    },
  ],
  bars: [
    {
      label: 'Total medical cost',
      segments: [
        {
          label: 'Total medical cost',
          value: 125,
          color: '#dedede',
        },
      ],
    },
    {
      label: 'Fully covered',
      segments: [
        {
          label: '75% of MBS fee paid by Medicare',
          value: 75,
          color: '#E6F5F7',
        },
        {
          label: '25% of MBS fee paid by HBF',
          value: 25,
          color: '#009FAE',
        },
        {
          label: '100% of Medical Gap paid by HBF',
          value: 25,
          color: '#003959',
        },
      ],
    },
    {
      label: 'Known gap',
      segments: [
        {
          label: '75% of MBS fee paid by Medicare',
          value: 75,
          color: '#E6F5F7',
        },
        {
          label: '25% of MBS fee paid by HBF',
          value: 25,
          color: '#009FAE',
        },
        {
          label: '50% of Medical Gap paid by HBF',
          value: 12.5,
          color: '#003959',
        },
        {
          label: 'You pay 50% of Medical Gap',
          value: 12.5,
          color: '#dedede',
        },
      ],
    },
    {
      label: 'No agreement / Opt out',
      segments: [
        {
          label: '75% of MBS fee paid by Medicare',
          value: 75,
          color: '#E6F5F7',
        },
        {
          label: '25% of MBS fee paid by HBF',
          value: 25,
          color: '#009FAE',
        },
        {
          label: 'You pay 100% of Medical Gap',
          value: 25,
          color: '#dedede',
        },
      ],
    },
  ],
}
