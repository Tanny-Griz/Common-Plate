import Link from 'next/link'
import type { FoodListing } from '@/types'

const availabilityFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/Chicago',
  timeZoneName: 'short',
})

export default function FoodCard({
  listing,
  distanceMiles,
}: {
  listing: FoodListing
  /** Distance from the viewer in miles, calculated by the caller. */
  distanceMiles?: number
}) {
  const imageUrl = listing.imageUrls[0]
  const showDistance =
    distanceMiles !== undefined &&
    Number.isFinite(distanceMiles) &&
    distanceMiles >= 0

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-foreground/15 bg-white text-foreground">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={listing.title}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-support/20 text-sm text-foreground/80">
          No image available
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="rounded-full bg-accent/25 px-3 py-1 font-medium capitalize">
            <span className="sr-only">Listing status: </span>
            {listing.status}
          </span>
          {showDistance && (
            <span className="text-foreground/80">
              {distanceMiles.toFixed(1)} miles away
            </span>
          )}
        </div>

        <div className="min-w-0 break-words">
          <h2 className="text-lg font-semibold leading-snug">{listing.title}</h2>
          <p className="mt-1 text-sm text-foreground/80">{listing.businessName}</p>
        </div>

        <p className="text-sm">
          <span className="font-medium">Quantity: </span>
          {listing.quantity} {listing.quantityUnit}
        </p>

        {listing.dietaryTags.length > 0 && (
          <ul aria-label="Dietary tags" className="flex flex-wrap gap-2">
            {listing.dietaryTags.map((tag) => (
              <li
                key={tag}
                className="max-w-full break-words rounded-md bg-support/20 px-2 py-1 text-xs font-medium text-foreground/90"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-auto border-t border-foreground/15 pt-4 text-sm text-foreground/80">
          <span className="font-medium text-foreground">Available until: </span>
          <time dateTime={listing.availableUntil}>
            {availabilityFormatter.format(new Date(listing.availableUntil))}
          </time>
        </p>
        <Link
          href={`/listing/${encodeURIComponent(listing.id)}`}
          className="self-start rounded-md text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          View Details<span className="sr-only"> for {listing.title}</span>
        </Link>
      </div>
    </article>
  )
}
