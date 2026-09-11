import type { ReactNode } from 'react'

export default function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 font-mono sm:px-6 xl:max-w-4xl xl:px-0">{children}</div>
  )
}
