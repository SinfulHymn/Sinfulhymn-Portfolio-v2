import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import type { Frontmatter } from '@/lib/mdx'
import type { TocHeading } from '@/lib/remark-toc-headings'

const DEFAULT_LAYOUT = 'PostLayout'

interface SlugParams extends ParsedUrlQuery {
  slug: string[]
}

interface BlogPostProps {
  post: { mdxSource: string; toc: TocHeading[]; frontMatter: Frontmatter }
  authorDetails: Frontmatter[]
  prev: Frontmatter | null
  next: Frontmatter | null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps, SlugParams> = async ({ params }) => {
  const allPosts = await getAllFilesFrontMatter('blog')
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug as string) === params!.slug.join('/')
  )
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('blog', params!.slug.join('/'))
  const authorList = (post.frontMatter.authors as string[]) || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    // Next.js embeds all getStaticProps return values verbatim in the
    // page's __NEXT_DATA__ JSON — strip the raw email so it can't leak
    // into every blog post's page source for scrapers.
    const { email: _email, ...redactedFrontMatter } = authorResults.frontMatter
    return redactedFrontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return { props: { post, authorDetails, prev, next } }
}

export default function Blog({
  post,
  authorDetails,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={(frontMatter.layout as string) || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
