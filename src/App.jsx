import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CtaSection from "./CtaSection";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}