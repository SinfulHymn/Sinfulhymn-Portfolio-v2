import Link from './Link'
import ThemeSwitch from './ThemeSwitch'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

const tagline = siteMetadata.description.split('\n\n')[0]

const Hero = () => {
  return (
    <section className="grain vignette relative flex min-h-[85vh] flex-col justify-end overflow-hidden bg-whiteBackground dark:bg-purpleBackground">
      <div className="back-light dark:back-dark absolute inset-0 z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/3 bg-gradient-to-t from-whiteBackground to-transparent dark:from-purpleBackground" />
      <div className="relative z-10 px-[clamp(1.5rem,8vw,5rem)] pb-[clamp(2rem,7vw,3.5rem)] pt-[clamp(3.5rem,12vw,6.5rem)]">
        <h1 className="font-display leading-none text-primaryText [font-size:clamp(2.25rem,1.5rem+4vw,4.5rem)] dark:text-fgTextDark">
          <span className="mr-1 text-secondaryAccent dark:text-secondaryAccentDark">$</span>
          {siteMetadata.headerTitle}
          <span className="cursor" aria-hidden />
        </h1>
        <p className="mt-6 max-w-3xl font-mono leading-relaxed text-secondaryText [font-size:clamp(0.6875rem,0.5rem+1vw,1.125rem)] dark:text-fgMutedDark">
          <span className="text-secondaryAccent dark:text-secondaryAccentDark">{'// '}</span>
          {tagline}
        </p>
        <div className="hairline mt-8 flex flex-wrap items-center justify-between gap-x-12 gap-y-3 border-t pt-4">
          <nav className="flex flex-wrap gap-x-10 gap-y-2">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="nav-link nav-primary text-primaryText dark:text-fgTextDark"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </section>
  )
}

export default Hero
