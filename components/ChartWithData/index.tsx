import clsx from 'clsx'
import { ReactNode } from 'react'
import { Bar, BarProps } from './Bar'
import { Heading, HeadingProps } from './Heading'
import { Legend, LegendProps } from './Legend'
import { Segment, SegmentProps } from './Segment'
import { createContext } from '../../utils/createContext'
import { Details } from '../Details'

export interface MultidimensionalChartProps {
  className?: string
  showLabels?: boolean
  showValues?: boolean
  headings?: HeadingProps[]
  bars: BarProps[]
  caption?: ReactNode
  legend?: LegendProps['data']
}

type Bars = MultidimensionalChartProps['bars']
type Segments = SegmentProps[]

const getSumOfSegmentValues = (segments: Segments) => segments.reduce((acc, { value }) => acc + value, 0)
const getLongestBar = (bars: Bars) =>
  bars.reduce((acc, { segments }) => Math.max(acc, getSumOfSegmentValues(segments)), 0)

export const [useChart, ChartContext] = createContext<{ showLabels: boolean; showValues: boolean; limit: number }>()

export function MultidimensionalChart({
  className,
  headings,
  caption,
  legend,
  bars,
  showLabels = false,
  showValues = false,
}: MultidimensionalChartProps) {
  return (
    <ChartContext value={{ showLabels, showValues, limit: getLongestBar(bars) ?? 100 }}>
      <figure className={clsx(className, 'w-full')}>
        <section aria-hidden={Boolean(caption)} className="w-full">
          <div className="relative">
            {headings && (
              <header className="flex items-end">
                {headings.map(heading => (
                  <Heading key={heading.label} {...heading} />
                ))}
              </header>
            )}
            <div className="relative z-10 mt-8 space-y-5 flex-flex-col sm:mt-5">
              {bars && bars.map(bar => <Bar key={bar.label} {...bar} />)}
            </div>
          </div>
          {legend && <Legend className="mt-10" data={legend} />}
        </section>
        {caption && <figcaption className="sr-only">{caption}</figcaption>}
        <Details
          type="language-json"
          className="mt-6"
          title="View chart data"
          data={{
            headings,
            bars,
            showLabels,
            showValues,
          }}
        />
      </figure>
    </ChartContext>
  )
}
