import FoodCard from '@/components/FoodCard'
import { mockFoodListings } from '@/data/mockData'

export default function ExplorePage() {
  const availableListings = mockFoodListings.filter(
    (listing) => listing.status === 'available',
  )

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="mb-8 text-2xl font-semibold text-foreground sm:text-3xl">
        Available Food Near You
      </h1>

      {availableListings.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {availableListings.map((listing) => (
            <FoodCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-foreground/15 bg-support/10 p-6 text-foreground/80">
          No food listings are available right now. Please check back soon.
        </p>
      )}
    </main>
  )
}
