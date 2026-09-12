import Link from './Link'
import ObfuscatedEmail from './ObfuscatedEmail'
import siteMetadata from '@/data/siteMetadata'

const handleFromUrl = (url: string) =>
  url
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '')
    .split('/')
    .pop() as string

const elsewhere = [
  { where: 'Instagram', href: siteMetadata.instagram },
  { where: 'GitHub', href: siteMetadata.github },
  { where: 'LinkedIn', href: siteMetadata.linkedin },
].filter((item) => item.href)

const [emailUser, emailDomain] = (siteMetadata.email as string).split('@')

export default function Footer() {
  return (
    <footer className="hairline mt-16 border-t pb-[clamp(2rem,5vw,3rem)] pt-[clamp(2rem,5vw,3.5rem)]">
      <div className="grid grid-cols-1 gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-10 sm:grid-cols-2">
        <div>
          <h2 className="apparatus mb-5 text-secondaryText dark:text-fgMutedDark">Elsewhere</h2>
          <ul className="grid gap-3">
            {elsewhere.map((item) => (
              <li key={item.where}>
                <Link
                  href={item.href as string}
                  className="hairline group flex flex-col gap-1 border-b pb-2 text-primaryText transition-colors hover:border-secondaryAccent dark:text-fgTextDark dark:hover:border-secondaryAccentDark sm:flex-row sm:items-baseline sm:justify-between sm:gap-3"
                >
                  <span className="font-mono text-sm transition-colors group-hover:text-secondaryAccent dark:group-hover:text-secondaryAccentDark">
                    {handleFromUrl(item.href as string)}
                  </span>
                  <span className="apparatus text-secondaryText dark:text-fgMutedDark">
                    {item.where}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="apparatus mb-5 text-secondaryText dark:text-fgMutedDark">Contact</h2>
          <ObfuscatedEmail
            user={emailUser}
            domain={emailDomain}
            className="hairline inline-block border-b pb-1 font-mono text-sm text-primaryText transition-colors hover:border-secondaryAccent dark:text-fgTextDark dark:hover:border-secondaryAccentDark"
          />
        </div>
      </div>

      <div className="apparatus hairline mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-6 text-secondaryText dark:text-fgMutedDark">
        <span>{siteMetadata.author}</span>
        <span>{`© ${new Date().getFullYear()}`}</span>
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="nav-link text-secondaryText dark:text-fgMutedDark"
        >
          {siteMetadata.headerTitle}
        </Link>
      </div>
    </footer>
  )
}
