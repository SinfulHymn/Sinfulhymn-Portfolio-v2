import Image from './Image'
import Link from './Link'
import Tag from './Tag'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  repo?: string
  date?: string
  tags: string[]
}

const Card = ({ title, description, imgSrc, href, repo, date, tags }: CardProps) => (
  <div className="w-full">
    {imgSrc &&
      (href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="w-full object-cover object-center transition-opacity hover:opacity-80 md:h-[220px]"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="w-full object-cover object-center md:h-[220px]"
          width={544}
          height={306}
        />
      ))}
    <div className="hairline mt-3 border-t pt-3">
      <h2 className="font-display text-xl leading-tight text-primaryText dark:text-fgTextDark">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
        {date && <span className="apparatus text-secondaryText dark:text-fgMutedDark">{date}</span>}
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <p className="prose mt-2 max-w-none text-primaryText dark:text-fgTextDark">{description}</p>
      {href && (
        <div className="mt-3 flex flex-row gap-4">
          <Link
            href={href}
            className="nav-link apparatus text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
          >
            Live Site &rarr;
          </Link>
          {repo && (
            <Link
              href={repo}
              className="nav-link apparatus text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
            >
              Code Repo &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  </div>
)

export default Card
