import { JetBrains_Mono, Share_Tech_Mono } from 'next/font/google'

// Body copy + UI chrome — the workhorse terminal mono.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

// Headings, wordmark, titles — a sharper, more "hacker terminal" display face.
export const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-share-tech-mono',
  display: 'swap',
})
