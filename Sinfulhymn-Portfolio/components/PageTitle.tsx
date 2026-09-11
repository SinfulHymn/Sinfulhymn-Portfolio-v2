import type { ReactNode } from 'react'

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-3xl leading-tight tracking-tight text-primaryText dark:text-white sm:text-4xl md:text-5xl">
      {children}
    </h1>
  )
}
