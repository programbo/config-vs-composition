import clsx from 'clsx'
import { FC } from 'react'
import Highlight from 'react-highlight'

interface DetailsProps {
  className?: string
  type: string
  title: string
  classes?: Partial<Record<'root' | 'summary', string>>
  data: any
}

const variants = {
  normal: {},
  expanded: {},
}

export const Details: FC<DetailsProps> = ({ title, data, className, type, classes }) => (
  <details
    className={clsx(
      'group -mx-3 rounded-lg border-bg-slate-800 text-slate-800 divide-y divide-gray-600 space-y-2 transition-all duration-200 open:bg-slate-800 open:text-gray-50 focus-within:ring focus-within:ring-slate-800 focus-within:shadow',
      className,
      classes?.root
    )}
  >
    <summary className="px-4 py-2 text-xl font-extrabold tracking-wide cursor-pointer focus:outline-none">
      <span className={classes?.summary}>{title}</span>
    </summary>

    <Highlight className={clsx(type, 'relative !p-4 !pt-6  overflow-auto text-xs !bg-transparent')}>
      {typeof data === 'object' ? JSON.stringify(data, null, 2) : data}
    </Highlight>
  </details>
)
