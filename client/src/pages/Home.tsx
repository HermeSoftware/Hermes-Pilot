/*
 * HERMES PILOT — Home Page
 * All sections assembled in order
 * Design: Dark Obsidian + Champagne Accent
 * Fonts: Sora (headings) + Inter (body)
 */
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import IntegrationsSection from '@/components/sections/IntegrationsSection';
import ROISection from '@/components/sections/ROISection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0C]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <ROISection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
