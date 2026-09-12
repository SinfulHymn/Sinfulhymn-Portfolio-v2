export interface NavLink {
  href: string
  title: string
}

const headerNavLinks: NavLink[] = [
  { href: '/about', title: 'Whoami' },
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },
  { href: '/photos', title: 'Photos' },
]

export default headerNavLinks
