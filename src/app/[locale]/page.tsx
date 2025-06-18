import AboutUs from '@/components/AboutUs/About'
import HeroSection from '@/components/LandingSection/HeroCompo'
import AmaraaHolding from '@/components/AmaraFoundation'
import InspiringHighlights from '@/components/InspiringHighlights'
import StoryBannerSection from '@/components/StoryBanner'
import NewsAndMedia from '@/components/NewsMedia'
import PrivacySection from '@/components/LandingSection/privacyRedirect'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <AboutUs />
      <AmaraaHolding/>
      <InspiringHighlights/>
      <StoryBannerSection/>
      <NewsAndMedia/>
      <PrivacySection/>
    </main>
  )
}