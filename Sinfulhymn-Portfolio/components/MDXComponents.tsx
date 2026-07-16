import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import type { ComponentType } from 'react'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import AuthorLayout from '@/layouts/AuthorLayout'
import ListLayout from '@/layouts/ListLayout'
import PostLayout from '@/layouts/PostLayout'
import PostSimple from '@/layouts/PostSimple'

// NOTE: the original implementation resolved the layout via a runtime
// `require(`../layouts/${layout}`)` call, which TypeScript cannot verify.
// Since webpack already bundles the entire layouts/ directory eagerly for
// that kind of partially-dynamic require (a "require context"), this static
// lookup map is behavior-equivalent while being type-safe.
const layouts: Record<string, ComponentType<any>> = {
  AuthorLayout,
  ListLayout,
  PostLayout,
  PostSimple,
}

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({
    components,
    layout,
    ...rest
  }: {
    components?: unknown
    layout: string
    [key: string]: unknown
  }) => {
    const Layout = layouts[layout]
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({
  layout,
  mdxSource,
  ...rest
}: {
  layout: string
  mdxSource: string
  [key: string]: unknown
}) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
