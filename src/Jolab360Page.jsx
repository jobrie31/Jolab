import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import PreviewSection from "./PreviewSection";
import TarifSection from "./TarifSection";
import CtaSection from "./CtaSection";

export default function Jolab360Page({ onOpenContact }) {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PreviewSection />
      <TarifSection />
      <CtaSection onOpenContact={onOpenContact} />
    </>
  );
}