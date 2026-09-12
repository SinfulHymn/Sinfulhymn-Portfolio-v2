import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')

  return (
    <button
      aria-label="Toggle Dark Mode"
      aria-pressed={isDark}
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-8 w-[56px] flex-shrink-0 items-center rounded-full border-2 border-secondaryAccent/60 bg-mutedLight px-0.5 transition-colors hover:border-secondaryAccent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondaryAccent focus-visible:ring-offset-2 focus-visible:ring-offset-whiteBackground dark:border-secondaryAccentDark/60 dark:bg-purpleBackground dark:hover:border-secondaryAccentDark dark:focus-visible:ring-secondaryAccentDark dark:focus-visible:ring-offset-purpleBackground"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-secondaryAccent text-whiteBackground shadow-md transition-transform duration-200 ease-out dark:bg-secondaryAccentDark dark:text-purpleBackground ${
          isDark ? 'translate-x-[24px]' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
            <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </span>
    </button>
  )
}

export default ThemeSwitch
