import Image from 'next/image'
import HomeIcon from './HomeIcon'

export default function DonationHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate grid min-h-[540px] place-items-center overflow-hidden bg-primary px-4 py-16 text-[color:var(--color-base)] sm:px-6 md:min-h-[calc(100svh-6rem)] md:py-20 lg:px-8"
    >
      <Image
        src="/images/food/leftover_fruit_croissants_pastries.png"
        alt="Surplus fruit, croissants, and pastries ready to share in a catering kitchen"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_62%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(160deg,color-mix(in_srgb,var(--color-primary)_90%,transparent),color-mix(in_srgb,var(--color-primary)_82%,transparent))] md:bg-[linear-gradient(100deg,color-mix(in_srgb,var(--color-primary)_48%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_86%,transparent)_30%,color-mix(in_srgb,var(--color-primary)_86%,transparent)_70%,color-mix(in_srgb,var(--color-primary)_48%,transparent)_100%)]"
      />

      <div className="relative z-10 w-full max-w-[640px] text-center">
        <p className="mb-5 text-xs font-bold uppercase md:mb-6 md:text-sm">From caterer to community</p>
        <h1 id="hero-title" className="text-[52px] leading-[1.08] font-medium sm:text-6xl md:text-[clamp(60px,5.2vw,96px)]">
          Surplus to<br />supper
        </h1>
        <p className="mx-auto mt-6 mb-8 max-w-[560px] text-[16px]/7 md:mt-7 md:mb-8 md:text-lg/8 lg:text-xl/8">
          Connect your extra food with a community that needs it.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
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
