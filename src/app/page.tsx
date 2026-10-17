import type { Metadata } from 'next'
import DonationHero from '@/components/home/DonationHero'
import DonationWorkspace from '@/components/home/DonationWorkspace'
import HomeFooter from '@/components/home/HomeFooter'

export const metadata: Metadata = {
  title: 'Common Plate — Good food, shared forward',
  description: 'Connect surplus food with a community that needs it.',
}

export default function Home() {
  return (
    <>
      <main>
        <DonationHero />
        <DonationWorkspace />
      </main>
      <HomeFooter />
    </>
  )
}
