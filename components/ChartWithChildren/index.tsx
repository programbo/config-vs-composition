import clsx from 'clsx'
import { FC, ReactComponentElement, ReactNode } from 'react'
import { Bar, BarProps } from './Bar'
import { Heading, HeadingProps } from './Heading'
import { Legend, LegendProps } from './Legend'
import { Segment, SegmentProps } from './Segment'
import { createContext } from '../../utils/createContext'
export interface MultidimensionalChartProps {
  className?: string
  showLabels?: boolean
  showValues?: boolean
  headings?: ReactComponentElement<FC<HeadingProps>> | ReactComponentElement<FC<HeadingProps>>[]
  children: ReactComponentElement<FC<BarProps>> | ReactComponentElement<FC<BarProps>>[]
  caption?: ReactNode
  legend?: LegendProps['data']
}

const arrayOf = <T extends JSX.Element>(children: T | T[]) => (Array.isArray(children) ? children : [children])

type Bars = MultidimensionalChartProps['children']
type Segments = ReactComponentElement<FC<SegmentProps>> | ReactComponentElement<FC<SegmentProps>>[]

const getSumOfSegmentValues = (segments: Segments) =>
  arrayOf(segments).reduce((acc, { props: { value } }) => acc + value, 0)
const getLongestBar = (bars: Bars) =>
  arrayOf(bars).reduce((acc, { props: { children } }) => Math.max(acc, getSumOfSegmentValues(children)), 0)

export const [useChart, ChartContext] = createContext<{ showLabels: boolean; showValues: boolean; limit: number }>()

export function MultidimensionalChart({
  className,
  headings,
  caption,
  legend,
  children,
  showLabels = false,
  showValues = false,
}: MultidimensionalChartProps) {
  return (
    <ChartContext value={{ showLabels, showValues, limit: getLongestBar(children) ?? 100 }}>
      <figure className={clsx(className, 'w-full')}>
        <section aria-hidden={Boolean(caption)} className="w-full">
          <div className="relative">
            {headings && <header className="flex items-end">{headings}</header>}
            <div className="relative z-10 mt-8 space-y-5 flex-flex-col sm:mt-5">{children}</div>
          </div>
          {legend && <Legend className="mt-10" data={legend} />}
        </section>
        {caption && <figcaption className="sr-only">{caption}</figcaption>}
      </figure>
    </ChartContext>
  )
}

MultidimensionalChart.Heading = Heading
MultidimensionalChart.Bar = Bar
MultidimensionalChart.BarSegment = Segment
