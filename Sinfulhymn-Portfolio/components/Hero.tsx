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
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-10 pt-24 sm:px-6 xl:max-w-4xl xl:px-0">
        <h1 className="font-display text-4xl leading-none text-primaryText dark:text-fgTextDark sm:text-5xl md:text-6xl">
          <span className="mr-1 text-secondaryAccent dark:text-secondaryAccentDark">$</span>
          {siteMetadata.headerTitle}
          <span className="cursor" aria-hidden />
        </h1>
        <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-secondaryText dark:text-fgMutedDark sm:text-base">
          <span className="text-secondaryAccent dark:text-secondaryAccentDark">{'// '}</span>
          {tagline}
        </p>
        <div className="hairline mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-4">
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
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
        </div>
      </div>
    </section>
  )
}

export default Hero
