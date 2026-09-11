import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import type { Frontmatter } from '@/lib/mdx'
import type { AuthorFrontmatter } from './AuthorLayout'
import type { ReactNode } from 'react'

const editUrl = (fileName: string) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug: string) =>
  `https://mobile.X.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/blog/${slug}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface PostLayoutProps {
  frontMatter: Frontmatter
  authorDetails: AuthorFrontmatter[]
  next?: Frontmatter | null
  prev?: Frontmatter | null
  children: ReactNode
}

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}: PostLayoutProps) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <header className="hairline space-y-4 border-b pb-8 pt-6">
          <div className="apparatus text-secondaryText dark:text-fgMutedDark">
            <time dateTime={date as string}>
              {new Date(date as string).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </div>
          <PageTitle>{title as string}</PageTitle>
          <ul className="flex flex-wrap items-center gap-6">
            {authorDetails.map((author) => (
              <li className="flex items-center gap-2" key={author.name as string}>
                {author.avatar && (
                  <Image
                    src={author.avatar as string}
                    width="32"
                    height="32"
                    alt="avatar"
                    className="h-8 w-8 rounded-full"
                  />
                )}
                <span className="apparatus text-primaryText dark:text-fgTextDark">
                  {author.name as string}
                </span>
              </li>
            ))}
          </ul>
        </header>

        <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>

        <div className="hairline flex flex-wrap gap-x-4 border-t py-6">
          <Link
            href={discussUrl(slug as string)}
            rel="nofollow"
            className="nav-link apparatus text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
          >
            Discuss on X
          </Link>
          <Link
            href={editUrl(fileName as string)}
            className="nav-link apparatus text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
          >
            View on GitHub
          </Link>
        </div>

        <Comments frontMatter={frontMatter} />

        <footer className="hairline space-y-6 border-t pt-6">
          {tags && (
            <div>
              <h2 className="apparatus mb-2 text-secondaryText dark:text-fgMutedDark">Tags</h2>
              <div className="flex flex-wrap">
                {(tags as string[]).map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          )}
          {(next || prev) && (
            <div className="flex flex-wrap justify-between gap-6">
              {prev && (
                <div>
                  <h2 className="apparatus mb-1 text-secondaryText dark:text-fgMutedDark">
                    Previous Article
                  </h2>
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="nav-link font-display text-lg text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
                  >
                    {prev.title as string}
                  </Link>
                </div>
              )}
              {next && (
                <div className="text-right">
                  <h2 className="apparatus mb-1 text-secondaryText dark:text-fgMutedDark">
                    Next Article
                  </h2>
                  <Link
                    href={`/blog/${next.slug}`}
                    className="nav-link font-display text-lg text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
                  >
                    {next.title as string}
                  </Link>
                </div>
              )}
            </div>
          )}
          <div>
            <Link
              href="/blog"
              className="nav-link apparatus text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
            >
              &larr; Back to the blog
            </Link>
          </div>
        </footer>
      </article>
    </SectionContainer>
  )
}
