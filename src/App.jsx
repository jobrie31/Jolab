import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import PreviewSection from "./PreviewSection";
import TarifSection from "./TarifSection";
import CtaSection from "./CtaSection";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background:
          "radial-gradient(circle at top, rgba(30,41,59,0.45), #020617 35%), #020617",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PreviewSection />
      <TarifSection />
      <CtaSection />
    </div>
  );
}