import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import type { Frontmatter } from '@/lib/mdx'

const root = process.cwd()

interface TagParams extends ParsedUrlQuery {
  tag: string
}

interface TagPageProps {
  posts: Frontmatter[]
  tag: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<TagPageProps, TagParams> = async ({ params }) => {
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true && (post.tags as string[]).map((t) => kebabCase(t)).includes(params!.tag)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${params!.tag}/feed.xml`)
    const rssPath = path.join(root, 'public', 'tags', params!.tag)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, tag: params!.tag } }
}

export default function Tag({ posts, tag }: InferGetStaticPropsType<typeof getStaticProps>) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} title={title} />
    </>
  )
}
