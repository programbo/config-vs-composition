# Multidimensional Charts

Chart component prototyped with TailwindCSS 3.0 on Next.js 12.

[A deployed demo can be found here 🚀](https://config-vs-composition.vercel.app)

## Config vs Composition

The component has been implemented two different ways:

1. [Chart with data](https://github.com/programbo/config-vs-composition/tree/main/components/ChartWithData) requires [chart data](https://github.com/programbo/config-vs-composition/tree/main/components/ChartWithData/data) to be supplied via the `bars` prop
   ```
   <Chart ... bars={chartData} />
   ```
2. [Chart with children](https://github.com/programbo/config-vs-composition/tree/main/components/ChartWithChildren) requires charts to be composed by nesting child components.
   ```
   <Chart ...>
     <Chart.Bar ...>
       <Chart.BarSegment ... />
       <Chart.BarSegment ... />
     <Chart.Bar ...>
   </Chart>
   ```

![screenshot of charts](https://user-images.githubusercontent.com/1026196/146324699-dcc0f1f2-3719-4c8a-bc70-e2047b966ec7.png)
