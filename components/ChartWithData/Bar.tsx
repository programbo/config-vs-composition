import { FC } from 'react'
import { useChart } from '.'
import { Segment, SegmentProps } from './Segment'

export interface BarProps {
  label: string
  showLabel?: boolean
  segments: SegmentProps[]
}

export const Bar: FC<BarProps> = ({ label, showLabel, segments }) => {
  const { showLabels } = useChart()
  const shouldShowLabel = typeof showLabel === 'boolean' ? showLabel : showLabels
  return (
    <div className="flex flex-col items-start space-y-1">
      {shouldShowLabel && <h4 className="text-sm leading-6">{label}</h4>}
      <div className="flex w-full">
        {segments && segments.map(segment => <Segment key={segment.label} {...segment} />)}
      </div>
    </div>
  )
}
