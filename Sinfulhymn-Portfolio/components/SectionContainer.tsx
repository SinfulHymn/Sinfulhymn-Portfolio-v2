import type { ReactNode } from 'react'

export default function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-[clamp(1rem,4vw,1.5rem)] font-mono xl:max-w-4xl">
      {children}
    </div>
  )
}
