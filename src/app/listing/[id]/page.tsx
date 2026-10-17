import { notFound } from 'next/navigation'
import { mockFoodListings } from '@/data/mockData'
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

export default async function ListingPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const listing: FoodListing | undefined = mockFoodListings.find(
    (listing) => listing.id === id,
  )

  if (!listing) notFound()

  const imageUrl = listing.imageUrls[0]

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <article className="overflow-hidden rounded-xl border border-foreground/15 bg-white text-foreground">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={listing.title}
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
          />
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center bg-support/20 text-foreground/80 sm:aspect-[16/9]">
            No image available
          </div>
        )}

        <div className="space-y-6 p-4 sm:p-8">
          <header className="space-y-2 break-words">
            <p className="inline-block rounded-full bg-accent/25 px-3 py-1 text-sm font-medium capitalize">
              <span className="sr-only">Listing status: </span>
              {listing.status}
            </p>
            <h1 className="text-2xl font-semibold sm:text-3xl">{listing.title}</h1>
            <p className="text-foreground/80">{listing.businessName}</p>
          </header>

          <p className="break-words leading-relaxed text-foreground/90">{listing.description}</p>

          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-medium">Quantity</dt>
              <dd className="mt-1 text-foreground/80">
                {listing.quantity} {listing.quantityUnit}
              </dd>
            </div>
            <div>
              <dt className="font-medium">Address</dt>
              <dd className="mt-1 break-words text-foreground/80">{listing.address}</dd>
            </div>
            <div>
              <dt className="font-medium">Dietary tags</dt>
              <dd className="mt-2 text-foreground/80">
                {listing.dietaryTags.length > 0 ? (
                  <ul className="flex flex-wrap gap-2">
                    {listing.dietaryTags.map((tag) => (
                      <li key={tag} className="max-w-full break-words rounded-md bg-support/20 px-2 py-1 text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : (
                  'No dietary tags provided'
                )}
              </dd>
            </div>
            <div>
              <dt className="font-medium">Allergens</dt>
              <dd className="mt-2 text-foreground/80">
                {listing.allergens.length > 0 ? (
                  <ul className="flex flex-wrap gap-2">
                    {listing.allergens.map((allergen) => (
                      <li key={allergen} className="max-w-full break-words rounded-md bg-accent/20 px-2 py-1 text-sm">
                        {allergen}
                      </li>
                    ))}
                  </ul>
                ) : (
                  'No allergens listed'
                )}
              </dd>
            </div>
            <div>
              <dt className="font-medium">Available from</dt>
              <dd className="mt-1 text-foreground/80">
                <time dateTime={listing.availableFrom}>
                  {availabilityFormatter.format(new Date(listing.availableFrom))}
                </time>
              </dd>
            </div>
            <div>
              <dt className="font-medium">Available until</dt>
              <dd className="mt-1 text-foreground/80">
                <time dateTime={listing.availableUntil}>
                  {availabilityFormatter.format(new Date(listing.availableUntil))}
                </time>
              </dd>
            </div>
          </dl>

          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed rounded-md bg-primary/15 px-5 py-3 font-medium text-foreground/80 sm:w-auto"
          >
            Claim Food
          </button>
        </div>
      </article>
    </main>
  )
}
