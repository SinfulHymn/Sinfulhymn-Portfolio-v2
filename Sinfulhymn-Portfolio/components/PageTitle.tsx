import type { ReactNode } from 'react'

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display leading-tight tracking-tight text-primaryText [font-size:clamp(1.875rem,1.4rem+2vw,3rem)] dark:text-fgTextDark">
      {children}
    </h1>
  )
}
