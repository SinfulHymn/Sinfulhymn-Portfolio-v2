import { useEffect, useState } from 'react'

interface ObfuscatedEmailProps {
  user: string
  domain: string
  className?: string
}

// Keeps the address out of the static HTML entirely — it's assembled
// client-side after mount, so scrapers reading raw page source (most
// spam bots) never see a plain mailto: link or email text.
const ObfuscatedEmail = ({ user, domain, className }: ObfuscatedEmailProps) => {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    setEmail(`${user}${String.fromCharCode(64)}${domain}`)
  }, [user, domain])

  if (!email) {
    return (
      <span className={className} aria-hidden>
        &middot;&middot;&middot;
      </span>
    )
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  )
}

export default ObfuscatedEmail
