import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Hero from './Hero'
import type { ReactNode } from 'react'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {isHome && <Hero />}
      {!isHome && (
        <header
          className={`hairline sticky top-0 z-20 border-b transition-colors ${
            scrolled
              ? 'bg-whiteBackground/90 backdrop-blur dark:bg-purpleBackground/90'
              : 'bg-whiteBackground dark:bg-purpleBackground'
          }`}
        >
          <SectionContainer>
            <div className="flex items-center justify-between py-4">
              <Link
                href="/"
                aria-label={siteMetadata.headerTitle}
                className="apparatus flex items-center text-secondaryAccent dark:text-secondaryAccentDark"
              >
                <span className="mr-1 text-primaryAccent">$</span>
                {siteMetadata.headerTitle}
              </Link>
              <div className="flex items-center gap-5">
                <nav className="hidden gap-5 sm:flex">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="nav-link apparatus text-primaryText dark:text-fgTextDark"
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
                <ThemeSwitch />
                <MobileNav />
              </div>
            </div>
          </SectionContainer>
        </header>
      )}
      <SectionContainer>
        <main className={isHome ? 'pb-10 pt-6' : 'py-10'}>{children}</main>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
