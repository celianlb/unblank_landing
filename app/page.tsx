import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import InspirationSection from "@/components/sections/InspirationSection";
import PricingSection from "@/components/sections/PricingSection";
import UseCasesSection from "@/components/sections/UseCasesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <HeroSection />
        <HowItWorksSection />
        <InspirationSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
