import { FC, ReactComponentElement } from 'react'
import { useChart } from '.'
import { SegmentProps } from './Segment'

export interface BarProps {
  label: string
  showLabel?: boolean
  children: ReactComponentElement<FC<SegmentProps>> | ReactComponentElement<FC<SegmentProps>>[]
}

export const Bar = ({ label, showLabel, children }: BarProps) => {
  const { showLabels } = useChart()
  const shouldShowLabel = typeof showLabel === 'boolean' ? showLabel : showLabels
  return (
    <div className="flex flex-col items-start space-y-1">
      {shouldShowLabel && <h4 className="text-sm leading-6">{label}</h4>}
      <div className="flex w-full">{children}</div>
    </div>
  )
}
