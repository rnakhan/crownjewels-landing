import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AIMap from "@/components/AIMap";
import FeatureGrid from "@/components/FeatureGrid";
import Stats from "@/components/Stats";
import WorkflowStory from "@/components/WorkflowStory";
import DashboardPreview from "@/components/DashboardPreview";
import AIDesignSpotlight from "@/components/AIDesignSpotlight";
import Testimonial from "@/components/Testimonial";
import FestivalCallout from "@/components/FestivalCallout";
import SecurityMultiStore from "@/components/SecurityMultiStore";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TrustStrip />
      <AIMap />
      <FeatureGrid />
      <Stats />
      <WorkflowStory />
      <DashboardPreview />
      <AIDesignSpotlight />
      <Testimonial />
      <FestivalCallout />
      <SecurityMultiStore />
      <FinalCTA />
      <Footer />
    </main>
  );
}
