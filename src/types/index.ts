export type UserRole = 'donor' | 'recipient' | 'volunteer'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  organizationName?: string
  phone?: string
  avatarUrl?: string
}

export type FoodListingStatus = 'available' | 'claimed' | 'completed' | 'expired'

export interface FoodListing {
  id: string
  donorId: string
  businessName: string
  title: string
  description: string
  foodType: string
  quantity: number
  quantityUnit: string
  imageUrls: string[]
  allergens: string[]
  dietaryTags: string[]
  address: string
  latitude?: number
  longitude?: number
  availableFrom: string
  availableUntil: string
  status: FoodListingStatus
  createdAt: string
}

export type ClaimMethod = 'pickup' | 'delivery'

export type ClaimStatus =
  | 'reserved'
  | 'pickup_scheduled'
  | 'picked_up'
  | 'delivered'
  | 'completed'
  | 'cancelled'

export interface Claim {
  id: string
  listingId: string
  recipientId: string
  method: ClaimMethod
  preferredPickupTime?: string
  notes?: string
  status: ClaimStatus
  createdAt: string
}

export type DeliveryRequestStatus =
  | 'waiting_for_driver'
  | 'accepted'
  | 'picked_up'
  | 'delivered'
  | 'cancelled'

export interface DeliveryRequest {
  id: string
  claimId: string
  listingId: string
  volunteerId?: string
  pickupAddress: string
  dropoffAddress: string
  pickupTime?: string
  status: DeliveryRequestStatus
  createdAt: string
}

export type NotificationType =
  | 'new_food'
  | 'food_claimed'
  | 'pickup_scheduled'
  | 'driver_assigned'
  | 'picked_up'
  | 'delivered'

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  read: boolean
  createdAt: string
  listingId?: string
  claimId?: string
}
