import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="hairline mt-16 flex flex-col items-center gap-4 border-t pt-8">
      <div className="flex space-x-3">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
        <SocialIcon kind="github" href={siteMetadata.github} size={5} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
      </div>

      <div className="apparatus flex flex-wrap items-center justify-center gap-2 pb-8 text-secondaryText dark:text-fgMutedDark">
        <span>{siteMetadata.author}</span>
        <span>{`© ${new Date().getFullYear()}`}</span>
        <span>{`•`}</span>
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
