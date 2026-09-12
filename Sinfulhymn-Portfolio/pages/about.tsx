import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

const DEFAULT_LAYOUT = 'AuthorLayout'

export const getStaticProps: GetStaticProps = async () => {
  const authorDetails = await getFileBySlug('authors', ['default'])
  // Next.js embeds all getStaticProps return values verbatim in the
  // page's __NEXT_DATA__ JSON, regardless of what the UI renders — strip
  // the raw email here so it can't leak into page source for scrapers.
  const { email: _email, ...redactedFrontMatter } = authorDetails.frontMatter
  return {
    props: {
      authorDetails: { ...authorDetails, frontMatter: redactedFrontMatter },
    },
  }
}

export default function About({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
