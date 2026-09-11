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
      className="inline-flex items-center gap-1.5 rounded-full border border-mutedLight px-1.5 py-1 transition-colors hover:border-secondaryAccent dark:border-borderDark dark:hover:border-secondaryAccentDark"
    >
      <span
        className={`text-[10px] leading-none ${isDark ? 'opacity-30' : 'opacity-100'}`}
        aria-hidden
      >
        ☀
      </span>
      <span className="relative h-[11px] w-[22px] flex-shrink-0 rounded-full border border-mutedLight dark:border-borderDark">
        <span
          className={`absolute top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-secondaryAccent transition-all dark:bg-secondaryAccentDark ${
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
    </button>
  )
}

export default ThemeSwitch
