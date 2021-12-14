import clsx from 'clsx'
import { FC } from 'react'

export interface HeadingProps {
  className?: string
  value: number
  label: string
  showBenchmark?: boolean
}

export const Heading: FC<HeadingProps> = ({ className, value, label, showBenchmark }) => (
  <div className={clsx('z-0 flex h-full', className)} style={{ width: `${value}%` }}>
    {showBenchmark && <div className="absolute top-0 bottom-0 border-l border-l-[#a8a8a8] border-dashed"></div>}
    <h3 className={clsx('text-sm font-bold leading-6 pr-2 text-center first:text-left', showBenchmark && 'pl-2')}>
      {label}
    </h3>
  </div>
)
