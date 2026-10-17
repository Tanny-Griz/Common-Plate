import HomeIcon from '@/components/home/HomeIcon'

export default function OrganizationProfile() {
  return (
    <article aria-labelledby="organization-name" className="min-w-0 rounded-lg border border-foreground/15 bg-white p-[30px]">
      <div className="mb-6 grid size-[74px] place-items-center rounded-full bg-support text-foreground">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-8">
          <path d="M19.4 15c1.5-1.5 3-3.2 3-5.5a5.5 5.5 0 0 0-9.6-3.7 1 1 0 0 1-1.4 0A5.5 5.5 0 0 0 1.8 9.5c0 2.3 1.5 4 3 5.5l5.6 5.4a2 2 0 0 0 2.8 0Z" />
          <path d="m12 5-3 3a2 2 0 0 0 2.8 2.8l1-1a2 2 0 0 1 2.4-.3l2.3 1.4a2 2 0 0 1 .4 3.1l-5.7 5.7M8 15l2 2m-1-5 2 2m-5 2 2 2" />
        </svg>
      </div>

      <p className="mb-2 text-[10px] font-bold text-primary uppercase">Example organization</p>
      <h2 id="organization-name" className="text-[28px] leading-[1.45] font-semibold">People Serving<br />People</h2>
      <p className="mt-3 text-[16px] text-foreground/75">Minneapolis, Minnesota</p>

      <p className="mt-[22px] text-[13px] leading-[1.8]">
        Emergency shelter and support for families experiencing homelessness, with three hot meals served daily.
      </p>

      <ul aria-label="Organization services" className="mt-5 flex flex-wrap gap-1.5">
        {['Family shelter', 'Community meals'].map((service) => (
          <li key={service} className="rounded bg-accent/20 px-[9px] py-1.5 text-[10px]">
            {service}
          </li>
        ))}
      </ul>

      <p className="mt-[22px] text-[11px] leading-[1.8] text-foreground/75">
        Donation acceptance, receiving hours, and participation in Common Plate are not verified.
      </p>

      <a
        href="https://www.peopleservingpeople.org/"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-md border border-foreground/35 bg-base px-4 py-2 text-xs font-medium shadow-sm transition-colors hover:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        Visit organization website
        <HomeIcon name="arrow" className="size-4 -rotate-45" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </article>
  )
}
