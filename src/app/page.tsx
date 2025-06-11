import AboutUs from '@/components/AboutUs/About'
import HeroSection from '../components/LandingSection/HeroCompo'
import AmaraaHolding from '@/components/AmaraHolding'
import InspiringHighlights from '@/components/InspiringHighlights'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <AboutUs />
      <AmaraaHolding/>
      <InspiringHighlights/>
    </main>
  )
}