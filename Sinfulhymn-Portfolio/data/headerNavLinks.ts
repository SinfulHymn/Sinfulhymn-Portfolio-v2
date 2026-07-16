export interface NavLink {
  href: string
  title: string
}

const headerNavLinks: NavLink[] = [
  { href: '/about', title: 'About' },
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },
]

export default headerNavLinks
