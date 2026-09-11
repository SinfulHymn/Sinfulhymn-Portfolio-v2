import { PageSEO } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="hairline space-y-2 border-b pb-6">
        <PageTitle>Tags</PageTitle>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 pt-8">
        {Object.keys(tags).length === 0 && (
          <span className="apparatus text-secondaryText dark:text-fgMutedDark">No tags found.</span>
        )}
        {sortedTags.map((t) => (
          <div key={t} className="flex items-baseline gap-1">
            <Tag text={t} />
            <span className="apparatus text-secondaryText dark:text-fgMutedDark">({tags[t]})</span>
          </div>
        ))}
      </div>
    </>
  )
}
