'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationLinks = [
  { href: '/explore', label: 'Explore' },
  { href: '/donate', label: 'Donate' },
  { href: '/notifications', label: 'Notifications' },
  { href: '/profile', label: 'Profile' },
]

export default function Header() {
  const pathname = usePathname()

  function renderNavigationLink(link: (typeof navigationLinks)[number]) {
    const isActive =
      pathname === link.href ||
      pathname.startsWith(`${link.href}/`) ||
      (link.href === '/explore' && pathname.startsWith('/listing/'))

    if (link.href === '/profile') {
      return (
        <Link
          key={link.href}
          href={link.href}
          aria-label={link.label}
          aria-current={isActive ? 'page' : undefined}
          className={`flex size-11 shrink-0 items-center justify-center justify-self-center rounded-full bg-support text-foreground transition-colors hover:bg-support/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
            isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-base' : ''
          }`}
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
          </svg>
        </Link>
      )
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={isActive ? 'page' : undefined}
        className={`flex min-h-11 min-w-0 items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          isActive
            ? 'bg-primary text-base'
            : 'text-foreground hover:bg-support/20'
        }`}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <>
      <header className="border-b border-foreground/15 bg-base text-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/explore"
            aria-label="Common Plate — Explore food"
            className="flex min-h-11 min-w-0 items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Image
              src="/images/logos/common-plate-mark-light-surfaces-512.png"
              alt=""
              width={40}
              height={40}
              priority
              className="shrink-0"
            />
            <span className="text-base font-semibold sm:text-lg">Common Plate</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-2 md:flex">
            {navigationLinks.map(renderNavigationLink)}
          </nav>

          <nav aria-label="Notifications" className="shrink-0 md:hidden">
            {navigationLinks
              .filter((link) => link.href === '/notifications')
              .map(renderNavigationLink)}
          </nav>
        </div>
      </header>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-foreground/15 bg-base px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] text-foreground md:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
          {navigationLinks
            .filter((link) => link.href !== '/notifications')
            .map(renderNavigationLink)}
        </div>
      </nav>
    </>
  )
}
