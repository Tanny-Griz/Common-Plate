import type { Metadata } from 'next'
import HomeFooter from '@/components/home/HomeFooter'
import HomeIcon from '@/components/home/HomeIcon'

export const metadata: Metadata = {
  title: 'Common Plate — My impact',
  description: 'See the meals shared in your simulated Common Plate donation session.',
  openGraph: {
    title: 'Common Plate — My impact',
    description: 'Every shared portion adds to your community story.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function ImpactPage() {
  return (
    <>
      <main className="mx-auto min-h-[75dvh] max-w-[1320px] px-[5%] pt-7 pb-10 text-foreground md:px-[4%] md:pt-10 md:pb-16">
        <div>
          <p className="mb-2.5 text-[10px] font-bold text-primary uppercase">Small acts. Shared impact.</p>
          <h1 className="mb-2.5 text-[32px] leading-[1.15] font-semibold md:text-[38px]">Look what you’ve shared.</h1>
          <p className="text-[13px] text-foreground/75 md:text-sm">Confirmed donations from this demo session only.</p>
        </div>

        {/* Initial presentation state; no simulated donation workflow is connected. */}
        <section aria-label="Sample impact totals" className="mt-[35px] mb-[42px] grid grid-cols-2 bg-foreground px-[18px] py-7 text-[color:var(--color-base)] md:p-[42px]">
          <div className="flex min-w-0 flex-col items-center justify-center gap-2.5 px-2 md:flex-row md:gap-[22px]">
            <HomeIcon name="utensils" className="size-8" />
            <strong className="font-heading text-[44px] font-semibold md:text-[52px]">0</strong>
            <span className="text-center text-[11px] md:text-sm">Portions shared</span>
          </div>
          <div className="flex min-w-0 flex-col items-center justify-center gap-2.5 border-l border-base/70 px-2 md:flex-row md:gap-[22px]">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-8 shrink-0">
              <path d="M19.4 15c1.5-1.5 3-3.2 3-5.5a5.5 5.5 0 0 0-9.6-3.7 1 1 0 0 1-1.4 0A5.5 5.5 0 0 0 1.8 9.5c0 2.3 1.5 4 3 5.5l5.6 5.4a2 2 0 0 0 2.8 0Z" />
              <path d="m12 5-3 3a2 2 0 0 0 2.8 2.8l1-1a2 2 0 0 1 2.4-.3l2.3 1.4a2 2 0 0 1 .4 3.1l-5.7 5.7M8 15l2 2m-1-5 2 2m-5 2 2 2" />
            </svg>
            <strong className="font-heading text-[44px] font-semibold md:text-[52px]">0</strong>
            <span className="text-center text-[11px] md:text-sm">Donations received</span>
          </div>
        </section>

        <section aria-labelledby="shared-meals-title">
          <h2 id="shared-meals-title" className="mb-6 text-[27px] font-semibold">Your shared meals</h2>
          <div className="px-4 py-9 text-center">
            <h3 className="text-[21px] font-semibold">A fresh start for good food.</h3>
            <p className="mt-2 mb-[18px] text-[13px] text-foreground/75">Your received donations will appear here.</p>
            <button
              type="button"
              disabled
              aria-describedby="impact-offer-note"
              className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-[color:var(--color-base)] shadow-sm"
            >
              Share your first meal
              <HomeIcon name="arrow" className="size-4" />
            </button>
            <p id="impact-offer-note" className="sr-only">Offer creation is coming soon.</p>
          </div>
        </section>

        <p className="text-[11px] leading-[1.8] text-foreground/75">Sample totals only. No real food donations or environmental savings are claimed.</p>
      </main>
      <HomeFooter />
    </>
  )
}
