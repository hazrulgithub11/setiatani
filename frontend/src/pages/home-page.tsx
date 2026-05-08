import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { StatsSection } from "../components/stats-section";
import { BusinessesSection } from "../components/businesses-section";
import { DriversSection } from "../components/drivers-section";
import { SustainabilityBanner } from "../components/sustainability-banner";
import { NewsSection } from "../components/news-section";

export function HomePage() {
  return (
    // Full-page white container — no max-width here so the Hero and Navbar
    // can span the entire viewport width as in the Scientex design.
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Breadcrumb bar ──
          Sits between the sticky navbar and the hero. A thin gray strip
          with the site name mirrors the subtle breadcrumb in the screenshot. */}
      <div className="border-b border-gray-200 bg-white px-6 py-1.5">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb">
            <span className="text-xs text-gray-500">Scientex</span>
          </nav>
        </div>
      </div>

      <Hero />
      <StatsSection />
      <BusinessesSection />
      <DriversSection />
      <SustainabilityBanner />
      <NewsSection />
    </div>
  );
}
