export default {
  showLabels: true,
  showValues: true,
  bars: [
    {
      label: 'Public Patient',
      showLabel: true,
      segments: [
        {
          label: '19% of Public Patients went to market',
          value: 19,
          showValue: true,
          color: '#CCECEF',
        },
        {
          label: '81% of Public Patients came home',
          value: 81,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
    {
      label: 'Private Patient',
      showLabel: true,
      segments: [
        {
          label: '27% of Private Patients had roast beef',
          value: 27,
          showValue: true,
          color: '#CCECEF',
        },
        {
          label: '30% of Private Patients had none',
          value: 30,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
  ],
}
