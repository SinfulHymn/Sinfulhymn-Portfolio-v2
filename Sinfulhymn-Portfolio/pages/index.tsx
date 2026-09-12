import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { Frontmatter } from '@/lib/mdx'

const MAX_DISPLAY = 2

export const getStaticProps: GetStaticProps<{
  posts: Frontmatter[]
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <section className="space-y-6 pt-10">
        <h2 className="apparatus text-secondaryText dark:text-fgMutedDark">Recent Posts</h2>
        {!posts.length && (
          <div className="apparatus text-secondaryText dark:text-fgMutedDark">
            Under construction.
          </div>
        )}
        <ul>
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug as string} className="hairline border-b py-6 first:pt-0">
                <article className="space-y-2">
                  <div className="apparatus text-secondaryText dark:text-fgMutedDark">
                    <time dateTime={date as string}>{formatDate(date as string)}</time>
                  </div>
                  <h3 className="font-display text-2xl leading-snug tracking-tight">
                    <Link href={`/blog/${slug}`} className="text-primaryText dark:text-fgTextDark">
                      {title as string}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap">
                    {(tags as string[]).map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  <div className="prose max-w-none text-secondaryText dark:text-fgMutedDark">
                    {summary as string}
                  </div>
                  <Link
                    href={`/blog/${slug}`}
                    className="nav-link apparatus text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
                    aria-label={`Read "${title}"`}
                  >
                    Read more &rarr;
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end">
            <Link
              href="/blog"
              className="nav-link apparatus text-secondaryAccent hover:text-primaryAccent dark:text-secondaryAccentDark dark:hover:text-neonblush"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
