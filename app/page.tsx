import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ChairmanMessage from "@/components/chairman-message"
import WelcomeSection from "@/components/welcome-section"
import MinistrySection from "@/components/ministry-section"
import InformationDesk from "@/components/information-desk"
import UsefulInformation from "@/components/useful-information"
import RecentEvents from "@/components/recent-events"
import Footer from "@/components/footer"
import BotpressChatbot from "@/components/botpress-chatbot"
import { AccessibilityWidget } from "@/components/accessibility-widget"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ChairmanMessage />
      <WelcomeSection />
      <MinistrySection />
      <InformationDesk />
      <UsefulInformation />
      <RecentEvents />
      <Footer />
      <BotpressChatbot />
      <AccessibilityWidget />
    </div>
  )
}
