import Link from 'next/link'
import HomeIcon from './HomeIcon'

export default function DonationWorkspace() {
  return (
    <section aria-labelledby="workspace-title" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
      <div>
        <p className="mb-2 text-xs font-bold text-primary uppercase">The caterer workspace</p>
        <h2 id="workspace-title" className="text-3xl leading-tight md:text-[38px]">
          Good food, shared forward.
        </h2>
        <p className="mt-2 text-sm text-foreground/75">Your surplus can be someone’s next meal.</p>
      </div>

      {/* Match the reference's initial empty state without adding donation logic. */}
      <section id="impact" aria-label="Sample donation totals" className="mt-6 flex scroll-mt-6 flex-wrap items-center gap-x-8 gap-y-5 border-b border-foreground/15 py-6 lg:gap-x-12">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent sm:size-12">
            <HomeIcon name="utensils" />
          </span>
          <div>
            <p className="font-heading text-2xl">0</p>
            <p className="text-xs text-foreground/75">Portions shared</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-support sm:size-12">
            <HomeIcon name="heart" />
          </span>
          <div>
            <p className="font-heading text-2xl">0</p>
            <p className="text-xs text-foreground/75">Organizations supported</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-foreground/20 sm:size-12">
            <HomeIcon name="clock" />
          </span>
          <div>
            <p className="font-heading text-2xl">0</p>
            <p className="text-xs text-foreground/75">Active offers</p>
          </div>
        </div>
        <p className="text-xs text-foreground/75 lg:ml-auto">Sample activity only</p>
      </section>

      <div className="grid gap-8 pt-8 md:grid-cols-[minmax(0,1fr)_250px] lg:grid-cols-[minmax(0,1fr)_290px]">
        <section aria-labelledby="donations-title" className="min-w-0">
          <div className="flex items-center justify-between gap-4">
            <h2 id="donations-title" className="text-2xl">My donations</h2>
            <span className="text-xs text-foreground/75">0 total</span>
          </div>
          <div role="group" aria-label="Donation filters (preview)" className="mt-4 flex flex-wrap gap-2 border-b border-foreground/15">
            {['All donations', 'Active', 'Completed'].map((label, index) => (
              <button
                key={label}
                type="button"
                disabled
                aria-pressed={index === 0}
                className={`min-h-11 cursor-not-allowed border-b-2 px-3 py-2 text-xs font-medium ${
                  index === 0 ? 'border-primary text-primary' : 'border-transparent text-foreground/75'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="px-4 py-10 text-center">
            <span className="mx-auto mb-4 grid size-15 place-items-center rounded-full border border-foreground/20 text-primary">
              <HomeIcon name="utensils" className="size-7" />
            </span>
            <h3 className="text-xl">Your next good deed starts here.</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              Post an open offer for organizations to request.
            </p>
            <button
              type="button"
              disabled
              aria-describedby="offer-preview-note"
              className="mt-5 inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-foreground/25 px-4 py-2 text-sm font-medium"
            >
              <HomeIcon name="plus" />
              Create an offer
            </button>
            <p id="offer-preview-note" className="mt-3 text-xs text-foreground/75">Offer creation is coming soon.</p>
          </div>
        </section>

        <aside id="community" aria-labelledby="community-title" className="min-w-0 scroll-mt-6 border-t border-foreground/15 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-7">
          <p className="mb-5 text-xs font-bold text-primary uppercase">On the receiving end</p>
          <div className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-support">
              <HomeIcon name="heart" className="size-6" />
            </span>
            <div>
              <p className="mb-1 text-[10px] font-bold text-primary uppercase">Example organization</p>
              <h2 id="community-title" className="text-lg leading-tight">People Serving People</h2>
              <p className="mt-1 text-xs text-foreground/75">Minneapolis, Minnesota</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75">
            Helping families find shelter, support, and a nourishing meal.
          </p>
          <a
            href="https://www.peopleservingpeople.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm text-xs font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Meet the organization
            <HomeIcon name="arrow" className="size-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <p className="mt-4 border-t border-foreground/15 pt-4 text-xs leading-relaxed text-foreground/75">
            Example profiles. Real community purpose.
          </p>
          <Link
            href="/explore"
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm text-xs font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Explore available food
            <HomeIcon name="arrow" className="size-4" />
          </Link>
        </aside>
      </div>
    </section>
  )
}
