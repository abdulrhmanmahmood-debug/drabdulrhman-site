import { LanguageProvider } from "../i18n";
import About from "../components/About";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Podcast from "../components/Podcast";
import Medical from "../components/Medical";
import Showcase from "../components/Showcase";
import SocialProof from "../components/SocialProof";
import Testimonials from "../components/Testimonials";
import Videos from "../components/Videos";

function PhotographyPage() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-[#09090b] font-sans text-zinc-100 selection:bg-gold/30">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
      >
        تخطَّ إلى المحتوى
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <SocialProof />
        <About />
        <Features />
        <Showcase />
        <Videos />
        <Podcast />
        <Medical />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default function Photography() {
  return (
    <LanguageProvider>
      <PhotographyPage />
    </LanguageProvider>
  );
}
