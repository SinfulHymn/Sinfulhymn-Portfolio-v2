import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import type { Frontmatter } from '@/lib/mdx'
import type { ReactNode } from 'react'

export interface AuthorFrontmatter extends Frontmatter {
  name?: string
  avatar?: string
  occupation?: string
  company?: string
  email?: string
  X?: string
  linkedin?: string
  github?: string
  instagram?: string
}

interface AuthorLayoutProps {
  children: ReactNode
  frontMatter: AuthorFrontmatter
}

const ManSection = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-[8rem_1fr] sm:gap-6">
    <div className="apparatus text-secondaryAccent dark:text-secondaryAccentDark">{label}</div>
    <div className="text-primaryText dark:text-fgTextDark">{children}</div>
  </div>
)

const Opt = ({ name, desc }: { name: string; desc: string }) => (
  <div className="grid grid-cols-1 gap-1 font-mono text-sm sm:grid-cols-[10rem_1fr] sm:gap-4">
    <span className="text-secondaryAccent dark:text-secondaryAccentDark">{name}</span>
    <span className="break-all text-secondaryText dark:text-fgMutedDark">{desc}</span>
  </div>
)

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

export default function AuthorLayout({ children, frontMatter }: AuthorLayoutProps) {
  const { name, avatar, occupation, company, email, linkedin, github } = frontMatter
  const handle = (siteMetadata.headerTitle as string).toLowerCase()

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="mx-auto max-w-4xl pt-4 xl:flex xl:items-start xl:gap-10">
        <div className="min-w-0 flex-1">
          <div className="apparatus inline-flex items-center gap-2 rounded-t-md border border-b-0 border-mutedLight bg-surfaceAlt px-3 py-1.5 text-secondaryText dark:border-borderDark dark:bg-surfaceAltDark dark:text-fgMutedDark">
            <span className="text-secondaryAccent dark:text-secondaryAccentDark">$</span>
            {handle}@localhost: ~/whoami
          </div>

          <div className="man-glow hairline space-y-8 rounded-b-md rounded-tr-md border bg-surface p-6 dark:bg-surfaceDark sm:p-10">
            <div className="hairline space-y-1 border-b pb-6 text-center">
              <div className="font-display text-lg tracking-[0.1em] text-primaryText dark:text-fgTextDark">
                WHOAMI(1)
              </div>
              <div className="apparatus text-secondaryText dark:text-fgMutedDark">
                User Commands &middot; WHOAMI(1)
              </div>
            </div>

            <ManSection label="Name">
              <p>
                <code className="text-secondaryAccent dark:text-secondaryAccentDark">whoami</code> —{' '}
                {name}
                {occupation && ` || [${occupation}]`}
              </p>
            </ManSection>

            <ManSection label="Synopsis">
              <p>
                <code className="text-secondaryAccent dark:text-secondaryAccentDark">whoami</code>{' '}
                [--background] [--stack] [--contact] [--help]
              </p>
            </ManSection>

            {company && (
              <ManSection label="Description">
                <p>{company}</p>
              </ManSection>
            )}

            <ManSection label="Background">
              <div className="prose max-w-none dark:prose-dark">{children}</div>
            </ManSection>

            <div className="hairline space-y-3 border-t pt-6">
              <div className="apparatus text-secondaryText dark:text-fgMutedDark">Options</div>
              <div className="space-y-2">
                {email && <Opt name="--contact" desc={email} />}
                {github && <Opt name="--github" desc={stripProtocol(github)} />}
                {linkedin && <Opt name="--linkedin" desc={stripProtocol(linkedin)} />}
              </div>
            </div>

            <div className="hairline flex items-center justify-between border-t pt-6">
              <div className="flex gap-4">
                <SocialIcon kind="mail" href={`mailto:${email}`} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="github" href={github} />
              </div>
              <span
                className="cursor text-secondaryAccent dark:text-secondaryAccentDark"
                aria-hidden
              />
            </div>
          </div>
        </div>

        {avatar && (
          <div className="relative mt-8 w-full max-w-xs flex-none xl:mt-0 xl:w-64 xl:pt-6">
            <div className="apparatus absolute -top-[26px] left-4 rounded-t-md border border-b-0 border-mutedLight bg-surfaceAlt px-3 py-1.5 text-secondaryText dark:border-borderDark dark:bg-surfaceAltDark dark:text-fgMutedDark xl:top-0">
              <span className="text-secondaryAccent dark:text-secondaryAccentDark">$_</span>
              avatar
            </div>
            <div className="hairline overflow-hidden rounded-b-md rounded-tr-md border">
              <Image
                src={avatar}
                alt="avatar"
                width="440"
                height="440"
                className="aspect-square w-full object-cover object-[50%_10%]"
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
