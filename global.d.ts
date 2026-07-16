declare module '*.svg' {
  import type { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGSVGElement>>
  export default content
}

interface Window {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
  plausible?: ((eventName: string, ...rest: unknown[]) => unknown) & { q?: unknown[] }
  sa_event?: ((eventName: string, callback?: () => void) => unknown) & { q?: unknown[] }
  disqus_config?: (this: { page: { url: string; identifier: unknown } }) => void
  DISQUS?: {
    reset: (options: { reload: boolean }) => void
  }
}
