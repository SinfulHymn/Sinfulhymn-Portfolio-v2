import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')

  return (
    <button
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondaryAccent focus-visible:ring-offset-2 dark:focus-visible:ring-secondaryAccentDark dark:focus-visible:ring-offset-black"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-mutedLight px-1.5 py-1 transition-colors hover:border-secondaryAccent dark:border-borderDark dark:hover:border-secondaryAccentDark">
        <span
          className={`text-[10px] leading-none ${isDark ? 'opacity-30' : 'opacity-100'}`}
          aria-hidden
        >
          ☀
        </span>
        <span className="relative h-[11px] w-[22px] flex-shrink-0 rounded-full border border-mutedLight dark:border-borderDark">
          <span
            className={`absolute top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-secondaryAccent transition-all motion-reduce:transition-none dark:bg-secondaryAccentDark ${
              isDark ? 'left-[12px]' : 'left-[2px]'
            }`}
          />
        </span>
        <span
          className={`text-[10px] leading-none ${isDark ? 'opacity-100' : 'opacity-30'}`}
          aria-hidden
        >
          ☽
        </span>
      </span>
    </button>
  )
}

export default ThemeSwitch
