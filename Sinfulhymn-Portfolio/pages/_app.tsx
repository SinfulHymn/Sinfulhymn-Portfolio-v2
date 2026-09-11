import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import type { FC, PropsWithChildren } from 'react'
import type { ThemeProviderProps } from 'next-themes'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import Transition from '@/components/animations/Transition'
import PageLoad from '@/components/animations/PageLoad'
import { jetbrainsMono, shareTechMono } from '@/lib/fonts'

// next-themes@0.0.14's ThemeProviderProps type doesn't declare `children`
// (a gap in this pre-1.0 version's types under React 18's stricter FC typing).
// Re-typed locally rather than upgrading the dependency.
const ThemeProviderWithChildren = ThemeProvider as FC<PropsWithChildren<ThemeProviderProps>>

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderWithChildren attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <div className={`${jetbrainsMono.variable} ${shareTechMono.variable}`}>
        <LayoutWrapper>
          <Transition>
            <PageLoad>
              <Component {...pageProps} />
            </PageLoad>
          </Transition>
        </LayoutWrapper>
      </div>
    </ThemeProviderWithChildren>
  )
}
