import GithubSlugger from 'github-slugger'

const kebabCase = (str: string): string => GithubSlugger.slug(str)

export default kebabCase
