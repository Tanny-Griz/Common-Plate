import Image from 'next/image'
import HomeIcon from './HomeIcon'

export default function DonationHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate grid min-h-[520px] items-center justify-items-start overflow-hidden bg-primary px-5 py-16 text-[color:var(--color-base)] sm:px-6 md:min-h-[clamp(520px,40vw,760px)] md:px-[4%] md:py-20"
    >
      <Image
        src="/images/food/hero-meal-prep.jpg"
        alt="Prepared meal trays with rice, vegetables, and meat ready to share"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-primary)_94%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_80%,transparent)_45%,color-mix(in_srgb,var(--color-primary)_20%,transparent)_100%)] md:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-primary)_94%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_76%,transparent)_35%,color-mix(in_srgb,var(--color-primary)_30%,transparent)_65%,transparent_100%)]"
      />

      <div className="relative z-10 w-full max-w-[1100px] text-left">
        <p className="mb-5 text-xs font-bold uppercase md:mb-6 md:text-sm">From caterer to community</p>
        <h1 id="hero-title" className="text-[48px] leading-[1.08] font-medium sm:text-[52px] md:text-[clamp(52px,4.3vw,88px)]">
          Surplus to supper
        </h1>
        <p className="mt-6 mb-8 max-w-[420px] text-[16px]/7 md:mt-7 md:mb-8 lg:text-lg/7">
          Connect your extra food with a community that needs it.
        </p>
        <div className="flex flex-wrap justify-start gap-3 md:gap-4">
          <button
            type="button"
            disabled
            aria-describedby="hero-preview-note"
            className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-base px-6 py-3 text-sm font-medium text-foreground md:min-h-14 md:text-lg lg:px-7"
          >
            <HomeIcon name="download" />
            Download the app
          </button>
          <button
            type="button"
            disabled
            aria-describedby="hero-preview-note"
            className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-base px-6 py-3 text-sm font-medium md:min-h-14 md:text-lg lg:px-7"
          >
            Donate Food
            <HomeIcon name="arrow" />
          </button>
        </div>
        <p id="hero-preview-note" className="sr-only">
          App download and offer creation are coming soon.
        </p>
      </div>
    </section>
  )
}
