import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center text-primaryText dark:text-fgTextDark"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 z-30 transform bg-whiteBackground duration-300 ease-in-out dark:bg-purpleBackground ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="hairline flex items-center justify-between border-b px-6 py-5">
          <span className="apparatus text-secondaryText dark:text-fgMutedDark">Menu</span>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center text-primaryText dark:text-fgTextDark"
            aria-label="Close Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-6">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hairline border-b py-5 font-display text-2xl text-primaryText dark:text-fgTextDark"
              onClick={onToggleNav}
            >
              <span className="mr-2 text-secondaryAccent dark:text-secondaryAccentDark">$</span>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
