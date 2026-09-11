import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start gap-6 pt-10 md:flex-row md:items-center">
        <h1 className="hairline border-r-0 pr-0 font-display text-6xl leading-none text-primaryText dark:text-white md:border-r md:pr-6 md:text-8xl">
          404
        </h1>
        <div className="max-w-md space-y-4">
          <p className="font-mono text-xl leading-normal text-primaryText dark:text-white md:text-2xl">
            Sorry, we couldn&apos;t find this page.
          </p>
          <p className="text-secondaryText dark:text-fgMutedDark">
            But don&apos;t worry, you can find plenty of other things on the homepage.
          </p>
          <Link
            href="/"
            className="nav-link apparatus inline-block text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
          >
            &larr; Back to homepage
          </Link>
        </div>
      </div>
    </>
  )
}
