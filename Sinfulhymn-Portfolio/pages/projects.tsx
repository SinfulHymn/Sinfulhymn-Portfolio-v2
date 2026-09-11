import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="hairline space-y-2 border-b pb-6">
        <PageTitle>Projects</PageTitle>
        <p className="apparatus text-secondaryText dark:text-fgMutedDark">
          Web development projects
        </p>
      </div>
      {!projectsData.length && (
        <div className="apparatus py-6 text-secondaryText dark:text-fgMutedDark">
          Under construction.
        </div>
      )}
      <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
        {projectsData.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
            repo={d.repo}
            date={d.date}
            tags={d.tags}
          />
        ))}
      </div>
    </>
  )
}
