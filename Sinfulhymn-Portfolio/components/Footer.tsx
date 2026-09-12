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
  {
    where: 'Instagram',
    href: siteMetadata.instagram,
    note: 'Behind the scenes and work in progress.',
  },
  {
    where: 'GitHub',
    href: siteMetadata.github,
    note: 'Code, experiments, and open-source work.',
  },
  {
    where: 'LinkedIn',
    href: siteMetadata.linkedin,
    note: 'Professional background and updates.',
  },
].filter((item) => item.href)

const [emailUser, emailDomain] = (siteMetadata.email as string).split('@')

export default function Footer() {
  return (
    <footer className="hairline mt-16 grid grid-cols-1 gap-[clamp(1.5rem,5vw,4rem)] border-t px-[clamp(1.25rem,5vw,3.25rem)] py-[clamp(2rem,5vw,3.5rem)] sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] sm:items-start">
      <Link
        href="/"
        aria-label={siteMetadata.headerTitle}
        className="self-start font-display leading-none text-secondaryText opacity-90 [font-size:clamp(1.25rem,1rem+1.5vw,2rem)] dark:text-fgMutedDark"
      >
        <span className="mr-0.5 text-secondaryAccent dark:text-secondaryAccentDark">$</span>
        {siteMetadata.headerTitle}
      </Link>

      <div>
        <h2 className="apparatus mb-[1.1rem] text-[10px] font-medium tracking-[0.22em] text-secondaryText dark:text-fgMutedDark">
          Elsewhere
        </h2>
        <ul className="grid gap-[0.55rem]">
          {elsewhere.map((item) => (
            <li key={item.where}>
              <Link
                href={item.href as string}
                className="hairline group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 border-b pb-2 no-underline transition-colors hover:border-secondaryAccent dark:hover:border-secondaryAccentDark"
              >
                <span className="font-mono text-[13px] text-primaryText transition-colors group-hover:text-secondaryAccent dark:text-fgTextDark dark:group-hover:text-secondaryAccentDark">
                  {handleFromUrl(item.href as string)}
                </span>
                <span className="apparatus text-[10px] text-secondaryText dark:text-fgMutedDark">
                  {item.where}
                </span>
                <span className="col-span-2 mt-0.5 text-[0.95rem] leading-snug text-secondaryText dark:text-fgMutedDark">
                  {item.note}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="apparatus mb-[1.1rem] text-[10px] font-medium tracking-[0.22em] text-secondaryText dark:text-fgMutedDark">
          Contact
        </h2>
        <p className="max-w-[34ch] text-[1rem] leading-relaxed text-secondaryText dark:text-fgMutedDark">
          <ObfuscatedEmail
            user={emailUser}
            domain={emailDomain}
            className="hairline border-b pb-1 text-primaryText transition-colors hover:border-secondaryAccent hover:text-secondaryAccent dark:text-fgTextDark dark:hover:border-secondaryAccentDark dark:hover:text-secondaryAccentDark"
          />
        </p>
      </div>

      <div className="apparatus hairline col-span-full mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-4 text-[10.5px] tracking-[0.1em] text-secondaryText dark:text-fgMutedDark">
        <span>{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</span>
        <span>Built with Next.js, no trackers</span>
      </div>
    </footer>
  )
}
