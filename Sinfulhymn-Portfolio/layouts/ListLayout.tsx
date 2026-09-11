import Link from '@/components/Link'
import Tag from '@/components/Tag'
import PageTitle from '@/components/PageTitle'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import type { Frontmatter } from '@/lib/mdx'

interface PaginationData {
  currentPage: number
  totalPages: number
}

interface ListLayoutProps {
  posts: Frontmatter[]
  title: string
  initialDisplayPosts?: Frontmatter[]
  pagination?: PaginationData
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent =
      (frontMatter.title as string) +
      (frontMatter.summary as string) +
      (frontMatter.tags as string[]).join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="hairline space-y-4 border-b pb-6">
        <PageTitle>{title}</PageTitle>
        <div className="relative max-w-lg">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="hairline block w-full rounded-md border bg-transparent px-4 py-2 font-mono text-sm text-primaryText focus:border-primaryAccent focus:outline-none dark:text-fgTextDark"
          />
          <svg
            className="absolute right-3 top-3 h-4 w-4 text-secondaryText dark:text-fgMutedDark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <ul>
        {!filteredBlogPosts.length && (
          <li className="apparatus py-6 text-secondaryText dark:text-fgMutedDark">
            No posts found.
          </li>
        )}
        {displayPosts.map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug as string} className="hairline border-b py-6">
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
              </article>
            </li>
          )
        })}
      </ul>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
