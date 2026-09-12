import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2">
        <Link
          href="/projects"
          className="hairline group block space-y-2 rounded-md border p-8 transition hover:border-primaryAccent dark:hover:border-neonblush"
        >
          <h2 className="font-display text-2xl tracking-tight text-primaryText dark:text-fgTextDark">
            Projects
          </h2>
          <p className="apparatus text-secondaryText dark:text-fgMutedDark">
            Browse and explore what I've built.
          </p>
          <span className="nav-link apparatus inline-block text-secondaryAccent group-hover:text-primaryAccent dark:text-secondaryAccentDark dark:group-hover:text-neonblush">
            View Projects &rarr;
          </span>
        </Link>

        <Link
          href="/blog"
          className="hairline group block space-y-2 rounded-md border p-8 transition hover:border-primaryAccent dark:hover:border-neonblush"
        >
          <h2 className="font-display text-2xl tracking-tight text-primaryText dark:text-fgTextDark">
            Blog
          </h2>
          <p className="apparatus text-secondaryText dark:text-fgMutedDark">
            Read through past posts and writing.
          </p>
          <span className="nav-link apparatus inline-block text-secondaryAccent group-hover:text-primaryAccent dark:text-secondaryAccentDark dark:group-hover:text-neonblush">
            View Blog &rarr;
          </span>
        </Link>
      </div>
    </>
  )
}
