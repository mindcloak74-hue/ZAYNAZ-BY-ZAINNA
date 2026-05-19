import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Collections } from "@/components/collections"
import { BestSellers } from "@/components/best-sellers"
import { CampaignBanner } from "@/components/campaign-banner"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { InstagramFeed } from "@/components/instagram-feed"
import { SizeGuide } from "@/components/size-guide"
import { FAQ } from "@/components/faq"
import { Policies } from "@/components/policies"
import { Contact } from "@/components/contact"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Collections />
      <CampaignBanner />
      <BestSellers />
      <About />
      <Testimonials />
      <InstagramFeed />
      <SizeGuide />
      <FAQ />
      <Policies />
      <Contact />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
