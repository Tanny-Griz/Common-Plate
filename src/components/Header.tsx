'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HomeIcon from './home/HomeIcon'

const navigationLinks = [
  { href: '/explore', label: 'Explore' },
  { href: '/donate', label: 'Donate' },
  { href: '/notifications', label: 'Notifications' },
  { href: '/profile', label: 'Profile' },
]

const workspaceLinks = [
  { href: '/', label: 'My donations', icon: 'grid' },
  { href: '/organizations', label: 'Organizations', icon: 'users' },
  { href: '/#impact', label: 'My impact', icon: 'leaf' },
] as const

export default function Header() {
  const pathname = usePathname()
  const isWorkspace = pathname === '/' || pathname === '/organizations'

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
          className={`flex size-11 shrink-0 items-center justify-center justify-self-center rounded-full bg-support text-foreground transition-colors hover:bg-support/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${isWorkspace ? 'lg:size-14' : ''} ${
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
        <div className={`mx-auto flex items-center justify-between gap-3 px-4 py-3 sm:px-6 ${isWorkspace ? 'md:min-h-24 md:px-[4%] md:py-4' : 'max-w-7xl lg:px-8'}`}>
          <Link
            href="/"
            aria-label="Common Plate — Home"
            className="flex min-h-11 min-w-0 items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Image
              src="/images/logos/common-plate-mark-light-surfaces-512.png"
              alt=""
              width={40}
              height={40}
              priority
              className={isWorkspace ? 'shrink-0 md:size-8 lg:size-10' : 'shrink-0 md:hidden'}
            />
            <span className={isWorkspace ? 'font-heading text-lg font-semibold text-foreground md:ml-3 md:text-[22px] lg:text-[34px]' : 'text-lg font-semibold md:hidden'}>Common Plate</span>
            {!isWorkspace && (
            <Image
              src="/images/logos/Logo with headline.png"
              alt=""
              width={2800}
              height={840}
              sizes="(min-width: 1024px) 320px, 288px"
              priority
              className="hidden h-auto w-72 md:block lg:w-80"
            />
            )}
          </Link>

          <nav aria-label="Main navigation" className={`hidden items-center md:flex ${isWorkspace ? 'gap-2 lg:gap-4' : 'gap-2'}`}>
            {isWorkspace ? (
              <>
                {workspaceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={`inline-flex min-h-12 items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:gap-3 lg:px-4 lg:text-[16px]/6 ${
                      pathname === link.href ? 'bg-accent/20 text-primary' : 'hover:bg-support/20'
                    }`}
                  >
                    <HomeIcon name={link.icon} />{link.label}
                  </Link>
                ))}
                {renderNavigationLink(navigationLinks[3])}
              </>
            ) : navigationLinks.map(renderNavigationLink)}
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
          {(isWorkspace
            ? [workspaceLinks[0], workspaceLinks[1], navigationLinks[3]]
            : navigationLinks.filter((link) => link.href !== '/notifications')
          ).map(renderNavigationLink)}
        </div>
      </nav>
    </>
  )
}
