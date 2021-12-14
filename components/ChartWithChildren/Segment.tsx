import clsx from 'clsx'
import { useChart } from '.'

export interface SegmentProps {
  label: string
  value: number
  color: string
  showValue?: boolean
}

export const Segment: React.FC<SegmentProps> = ({ label, value, showValue, color }) => {
  const { showValues, limit } = useChart()
  const shouldShowValue = typeof showValue === 'boolean' ? showValue : showValues

  return (
    <div
      className="flex justify-center h-8 first:rounded-l-full last:rounded-r-full first:justify-start last:justify-end"
      title={label}
      style={{ width: `${(value / limit) * 100}%`, backgroundColor: color }}
    >
      {shouldShowValue && (
        <span
          aria-hidden
          className="shadow flex items-center justify-center px-0.5 min-w-[1.5rem] h-6 m-1 text-xs font-bold bg-white rounded-full text-[#009FAE]"
        >
          {value}
        </span>
      )}
    </div>
  )
}
