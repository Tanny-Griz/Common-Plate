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
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900">
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
        <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 text-sm text-gray-600">
          No image available
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="rounded-full bg-gray-100 px-3 py-1 font-medium capitalize">
            <span className="sr-only">Listing status: </span>
            {listing.status}
          </span>
          {showDistance && (
            <span className="text-gray-600">
              {distanceMiles.toFixed(1)} miles away
            </span>
          )}
        </div>

        <div className="min-w-0 break-words">
          <h2 className="text-lg font-semibold leading-snug">{listing.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{listing.businessName}</p>
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
                className="max-w-full break-words rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-auto border-t border-gray-100 pt-4 text-sm text-gray-600">
          <span className="font-medium text-gray-900">Available until: </span>
          <time dateTime={listing.availableUntil}>
            {availabilityFormatter.format(new Date(listing.availableUntil))}
          </time>
        </p>
      </div>
    </article>
  )
}
