import type { Metadata } from 'next'
import HomeFooter from '@/components/home/HomeFooter'
import HomeIcon from '@/components/home/HomeIcon'
import OrganizationProfile from '@/components/organizations/OrganizationProfile'

export const metadata: Metadata = {
  title: 'Common Plate — Community organizations',
  description: 'Meet People Serving People, an example organization in the Common Plate prototype.',
  openGraph: {
    title: 'Common Plate — Community organizations',
    description: 'Connect surplus food with community purpose.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function OrganizationsPage() {
  return (
    <>
      <main className="mx-auto min-h-[75dvh] max-w-[1320px] px-[5%] pt-7 pb-10 text-foreground md:px-[4%] md:pt-10 md:pb-16">
        <div className="mb-6 md:mb-[30px]">
          <p className="mb-2.5 text-[10px] font-bold text-primary uppercase">Our community, connected</p>
          <h1 className="mb-2.5 text-[32px] leading-[1.15] font-semibold md:text-[38px]">A place at the table.</h1>
          <p className="text-[13px] text-foreground/75 md:text-sm">
            Meet the people turning good food into community support.
          </p>
        </div>

        <div className="mt-[25px] grid items-start gap-7 md:mt-10 md:grid-cols-[350px_minmax(0,1fr)] md:gap-16">
          <OrganizationProfile />

          <section aria-labelledby="organization-story-title" className="min-w-0 pt-5 md:max-w-[520px]">
            <svg
              aria-hidden="true"
              focusable="false"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-[22px] text-primary"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="mb-2.5 text-[10px] font-bold text-primary uppercase">Minneapolis · Example connection</p>
            <h2 id="organization-story-title" className="mt-3 mb-5 text-[34px] leading-tight font-semibold">Surplus becomes support.</h2>
            <p className="mb-[22px] text-sm leading-[1.9]">
              People Serving People provides emergency shelter and family-centered support in Minneapolis. Meals are an important part of its work.
            </p>
            <p className="mb-[22px] text-sm leading-[1.9]">
              This demo pairs its example profile with Professional Sports Catering, a Levy-powered food-and-beverage operator serving Minor League Baseball venues.
            </p>
            <p className="mb-[22px] text-sm leading-[1.9] text-foreground/75">
              The example pickup is fictional. No local operating relationship, food acceptance policy, or partnership between these organizations is implied.
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <button
                type="button"
                disabled
                aria-describedby="organization-offer-note"
                className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-[color:var(--color-base)] shadow-sm"
              >
                Post an open food offer
                <HomeIcon name="arrow" className="size-4" />
              </button>
              <a
                href="https://www.prosportscatering.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Visit caterer website
                <HomeIcon name="arrow" className="size-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p id="organization-offer-note" className="sr-only">Offer creation is coming soon.</p>
          </section>
        </div>
      </main>
      <HomeFooter />
    </>
  )
}
