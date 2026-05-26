import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";

const LOGO_SRC = "/logo-jolab-solutions.png";

const serviceCards = [
  {
    title: "Inventaire",
    text: "Applications pour gérer vos stocks, vos matériaux, vos équipements et vos quantités en temps réel.",
    icon: "📦",
    video: "/videos/Inventaire%20enregistrement.mp4",
  },
  {
    title: "Suivi des heures",
    text: "Systèmes de punch, feuilles de temps, heures par projet et rapports pour la paie.",
    icon: "⏱️",
    video: "/videos/Suivi%20des%20heures%20enregistrement.mp4",
  },
  {
    title: "Planification",
    text: "Outils pour organiser les employés, les projets, les horaires et les disponibilités.",
    icon: "📅",
    video: "/videos/Planification%20enregistrement.mp4",
  },
  {
    title: "Rapports automatisés",
    text: "Création automatique de fichiers PDF, Excel, résumés de projets, factures et documents internes.",
    icon: "📄",
    video: "/videos/Facturation%20enregistrement.mp4",
  },
  {
    title: "Gestion de projets",
    text: "Suivi des tâches, documents, statuts, notes, photos et informations importantes.",
    icon: "🏗️",
    video: "/videos/Gestion%20de%20projets%20enregistrement.mp4",
  },
];

const customTags = [
  "Vos accès",
  "Vos outils",
  "Vos formulaires",
  "Vos tableaux de bord",
  "Vos automatisations",
  "Vos suivis",
];

const premiumPageBackground =
  "radial-gradient(circle at 18% 6%, rgba(37,99,235,0.16), transparent 34%), radial-gradient(circle at 82% 16%, rgba(14,165,233,0.12), transparent 32%), radial-gradient(circle at 50% 78%, rgba(148,163,184,0.18), transparent 42%), linear-gradient(180deg, #edf3fb 0%, #f8fafc 38%, #eaf0f7 100%)";

const blueLabelStyle = {
  color: "#2563eb",
  fontSize: "clamp(18px, 2vw, 24px)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 14px 0",
  fontWeight: 900,
};

const blueLabelDarkStyle = {
  color: "#fde68a",
  fontSize: "clamp(18px, 2vw, 24px)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 14px 0",
  fontWeight: 900,
};

export default function AccueilGeneral({ onNavigate, onOpenContact }) {
  const serviceVideoRefs = useRef([]);
  const activeTitleTimeoutRef = useRef(null);
  const [showStickyMenu, setShowStickyMenu] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    const videos = serviceVideoRefs.current.filter(Boolean);

    if (!videos.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Certains navigateurs peuvent bloquer l'autoplay.
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const heroSection = document.querySelector(".hero-majestic");

    if (!heroSection) return undefined;

    const handleStickyMenu = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setShowStickyMenu(heroBottom <= 0);
    };

    handleStickyMenu();

    window.addEventListener("scroll", handleStickyMenu, { passive: true });
    window.addEventListener("resize", handleStickyMenu);

    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
      window.removeEventListener("resize", handleStickyMenu);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (activeTitleTimeoutRef.current) {
        clearTimeout(activeTitleTimeoutRef.current);
      }
    };
  }, []);

  const setServiceVideoRef = (index) => (element) => {
    serviceVideoRefs.current[index] = element;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const triggerTitleAnimation = (id) => {
    if (id !== "services" && id !== "tarifs") return;

    if (activeTitleTimeoutRef.current) {
      clearTimeout(activeTitleTimeoutRef.current);
    }

    setActiveTitle("");

    window.setTimeout(() => {
      setActiveTitle(id);
    }, 120);

    activeTitleTimeoutRef.current = window.setTimeout(() => {
      setActiveTitle("");
    }, 1050);
  };

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const stickyNav = document.querySelector(".sticky-page-nav");
    const stickyHeight = stickyNav ? stickyNav.offsetHeight : 54;

    const extraSpace = id === "personnalise" ? 18 : 26;
    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      stickyHeight -
      extraSpace;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });

    triggerTitleAnimation(id);
  };

  return (
    <main
      style={{
        background: premiumPageBackground,
        backgroundAttachment: "fixed",
        color: "#0f172a",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html,
          body,
          #root {
            width: 100%;
            max-width: 100%;
            min-height: 100%;
            margin: 0;
            overflow-x: hidden;
            scroll-behavior: smooth;
            background:
              radial-gradient(circle at 18% 6%, rgba(37,99,235,0.16), transparent 34%),
              radial-gradient(circle at 82% 16%, rgba(14,165,233,0.12), transparent 32%),
              radial-gradient(circle at 50% 78%, rgba(148,163,184,0.18), transparent 42%),
              linear-gradient(180deg, #edf3fb 0%, #f8fafc 38%, #eaf0f7 100%);
            background-attachment: fixed;
          }

          #personnalise,
          #services,
          #tarifs,
          #contact {
            scroll-margin-top: 88px;
          }

          .section-jump-title {
            position: relative;
            display: inline-block;
            transition:
              transform 0.28s ease,
              text-shadow 0.28s ease,
              color 0.28s ease;
          }

          .section-jump-title::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -14px;
            width: 0;
            height: 3px;
            border-radius: 999px;
            background: linear-gradient(90deg, transparent, rgba(37,99,235,0.75), transparent);
            transform: translateX(-50%);
            opacity: 0;
            transition:
              width 0.32s ease,
              opacity 0.32s ease;
          }

          .section-jump-title.is-active {
            animation: titlePremiumFocus 0.9s ease both;
          }

          .section-jump-title.is-active::after {
            width: min(320px, 70%);
            opacity: 1;
          }

          .section-jump-title-dark.is-active {
            animation: titlePremiumFocusDark 0.9s ease both;
          }

          .section-jump-title-dark::after {
            background: linear-gradient(90deg, transparent, rgba(252,211,77,0.88), transparent);
          }

          .brand-logo-img {
            display: block;
            object-fit: contain;
            border-radius: 9px;
            flex: 0 0 auto;
          }

          .hero-brand-logo-img {
            width: 34px;
            height: 34px;
            filter:
              drop-shadow(0 5px 14px rgba(0,0,0,0.45))
              drop-shadow(0 0 6px rgba(249,115,22,0.18));
          }

          .sticky-brand-logo-img {
            width: 26px;
            height: 26px;
            filter: drop-shadow(0 4px 9px rgba(15,23,42,0.12));
          }

          .sticky-page-nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            transform: translateY(-100%);
            z-index: 9999;
            width: 100%;
            min-height: 54px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            padding: 0 18px;
            background: rgba(255, 255, 255, 0.92);
            border-bottom: 1px solid rgba(15, 23, 42, 0.08);
            box-shadow: 0 6px 18px rgba(15, 23, 42, 0.07);
            backdrop-filter: blur(16px);
            opacity: 0;
            pointer-events: none;
            transition:
              opacity 0.24s ease,
              transform 0.24s ease;
          }

          .sticky-page-nav.visible {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .sticky-page-logo {
            border: none;
            background: transparent;
            padding: 0;
            color: #0f172a;
            font-size: 15px;
            font-weight: 850;
            letter-spacing: 0.11em;
            text-transform: uppercase;
            white-space: nowrap;
            cursor: pointer;
            transition:
              color 0.2s ease,
              transform 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 10px;
          }

          .sticky-page-logo:hover {
            color: #1d4ed8;
            transform: translateY(-1px);
          }

          .sticky-promo-badge {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 7px 16px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.96);
            color: #dc2626;
            border: 1px solid rgba(220, 38, 38, 0.42);
            font-size: 13px;
            font-weight: 950;
            letter-spacing: 0.01em;
            white-space: nowrap;
            box-shadow: 0 8px 18px rgba(220, 38, 38, 0.12);
          }

          .sticky-promo-badge span {
            color: #dc2626;
            font-weight: 950;
          }

          .sticky-page-menu {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 22px;
            flex-wrap: wrap;
          }

          .sticky-page-menu button {
            border: none;
            border-radius: 0;
            padding: 0;
            background: transparent;
            color: #334155;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition:
              color 0.2s ease,
              opacity 0.2s ease;
          }

          .sticky-page-menu button:hover {
            color: #1d4ed8;
            transform: none;
          }

          .sticky-contact-button {
            border-radius: 999px !important;
            padding: 7px 13px !important;
            background: #0f172a !important;
            color: white !important;
            font-weight: 800 !important;
            box-shadow: none !important;
          }

          .sticky-contact-button:hover {
            background: #1d4ed8 !important;
            color: white !important;
          }

          .hero-majestic {
            position: relative;
            height: 100svh;
            min-height: 560px;
            overflow: hidden;
            background: #020617;
            width: 100%;
            max-width: 100%;
          }

          .hero-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            filter: brightness(0.80) contrast(1.08) saturate(1.05);
            transform: scale(1.02);
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            background:
              linear-gradient(180deg, rgba(2,6,23,0.50) 0%, rgba(2,6,23,0.80) 100%),
              radial-gradient(circle at 50% 45%, rgba(37,99,235,0.20), transparent 58%);
          }

          .hero-shine {
            position: absolute;
            inset: -40%;
            z-index: 2;
            background:
              radial-gradient(circle at 28% 34%, rgba(96,165,250,0.18), transparent 25%),
              radial-gradient(circle at 72% 58%, rgba(14,165,233,0.12), transparent 28%);
            animation: heroGlowMove 12s ease-in-out infinite alternate;
            pointer-events: none;
          }

          .hero-nav {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 18px;
            max-width: 100%;
          }

          .hero-logo {
            border: none;
            background: transparent;
            padding: 0;
            color: white;
            font-size: clamp(18px, 2vw, 28px);
            font-weight: 850;
            letter-spacing: 0.20em;
            text-transform: uppercase;
            text-shadow: 0 5px 24px rgba(0,0,0,0.65);
            cursor: pointer;
            transition:
              transform 0.22s ease,
              opacity 0.22s ease;
            display: inline-flex;
            align-items: center;
            gap: 13px;
          }

          .hero-logo:hover {
            opacity: 0.88;
            transform: translateY(-1px);
          }

          .hero-menu {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
            max-width: 100%;
          }

          .hero-menu button {
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.14);
            color: rgba(255,255,255,0.92);
            padding: 10px 16px;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 750;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: 0.25s ease;
          }

          .hero-menu button:hover {
            color: white;
            background: rgba(255,255,255,0.17);
            transform: translateY(-2px);
          }

          .hero-menu .hero-contact-button {
            padding: 10px 17px;
            background: rgba(245, 158, 11, 0.22);
            color: #fff7ed;
            border: 1px solid rgba(251, 191, 36, 0.42);
            font-weight: 900;
            box-shadow: none;
          }

          .hero-menu .hero-contact-button::before {
            display: none;
          }

          .hero-menu .hero-contact-button:hover {
            background: rgba(245, 158, 11, 0.34);
            color: white;
            box-shadow: none;
          }

          .hero-content {
            position: relative;
            z-index: 5;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 24px;
            transform: translateY(8px);
            max-width: 100%;
          }

          .hero-title {
            font-family: Inter, Arial, sans-serif;
            font-size: clamp(44px, 7vw, 92px);
            line-height: 1.04;
            margin: 0;
            color: white;
            font-weight: 650;
            letter-spacing: -0.055em;
            max-width: 1050px;
            text-shadow: 0 18px 58px rgba(0,0,0,0.82);
            opacity: 0;
            animation: titleReveal 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
          }

          .hero-title::after {
            content: "";
            display: block;
            width: min(380px, 68vw);
            height: 1px;
            margin: 32px auto 0 auto;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
            opacity: 0;
            animation: lineReveal 1.2s ease 1.1s forwards;
          }

          .scroll-down {
            position: absolute;
            bottom: 22px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            color: white;
            background: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            opacity: 0.9;
          }

          .scroll-arrow {
            width: 42px;
            height: 42px;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.32);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            background: rgba(255,255,255,0.09);
            backdrop-filter: blur(12px);
            animation: bounceArrow 1.8s ease-in-out infinite;
          }

          .personnalise-section {
            padding: 70px 24px 80px 24px;
            background: transparent;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }

          .personnalise-card {
            width: 100%;
            max-width: min(1500px, calc(100vw - 48px));
            min-height: 680px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            border-radius: 38px;
            padding: 54px 34px;
            color: white;
            box-shadow:
              0 34px 90px rgba(15,23,42,0.26),
              0 0 0 1px rgba(255,255,255,0.55);
            background: #0f172a;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .personnalise-card-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            filter: brightness(0.45) contrast(1.08) saturate(1.08);
            transform: scale(1.03);
          }

          .personnalise-card-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            background:
              linear-gradient(135deg, rgba(15,23,42,0.84) 0%, rgba(30,58,138,0.72) 55%, rgba(37,99,235,0.64) 100%),
              radial-gradient(circle at 50% 40%, rgba(96,165,250,0.24), transparent 58%);
          }

          .personnalise-card-content {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 100%;
            min-width: 0;
          }

          .home-custom-tags-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .home-services-list {
            display: grid;
            gap: 56px;
            width: 100%;
            max-width: 100%;
          }

          .availability-band {
            margin: 0 auto 46px auto;
            width: 100%;
            max-width: 1360px;
            position: relative;
            overflow: hidden;
            isolation: isolate;
            border-radius: 30px;
            padding: 24px 28px 28px 28px;
            border: 1px solid rgba(255,255,255,0.52);
            background:
              linear-gradient(120deg, #0f172a, #1d4ed8, #0ea5e9, #1e3a8a, #0f172a);
            background-size: 320% 320%;
            animation: availabilityGradientMove 10s ease-in-out infinite;
            box-shadow:
              0 24px 62px rgba(15,23,42,0.24),
              0 0 0 1px rgba(255,255,255,0.16),
              inset 0 1px 0 rgba(255,255,255,0.18);
          }

          .availability-band::before {
            content: "";
            position: absolute;
            width: 360px;
            height: 360px;
            border-radius: 999px;
            left: -110px;
            top: -150px;
            background: rgba(96,165,250,0.42);
            filter: blur(28px);
            animation: availabilityGlowOne 8s ease-in-out infinite alternate;
            z-index: -1;
          }

          .availability-band::after {
            content: "";
            position: absolute;
            width: 420px;
            height: 420px;
            border-radius: 999px;
            right: -140px;
            bottom: -190px;
            background: rgba(34,211,238,0.32);
            filter: blur(32px);
            animation: availabilityGlowTwo 9s ease-in-out infinite alternate;
            z-index: -1;
          }

          .availability-simple-title {
            position: relative;
            z-index: 2;
            margin: 0 0 18px 0;
            text-align: center;
            color: white;
            font-size: clamp(26px, 2.8vw, 40px);
            line-height: 1.08;
            font-weight: 950;
            letter-spacing: -0.05em;
            text-shadow: 0 10px 30px rgba(0,0,0,0.45);
          }

          .availability-images {
            position: relative;
            z-index: 2;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
            align-items: stretch;
            min-width: 0;
          }

          .availability-image-card {
            height: 290px;
            min-height: 0;
            border-radius: 24px;
            background:
              radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 34%),
              rgba(255,255,255,0.88);
            border: 1px solid rgba(255,255,255,0.72);
            box-shadow:
              0 18px 42px rgba(15,23,42,0.20),
              inset 0 1px 0 rgba(255,255,255,0.84);
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            backdrop-filter: blur(12px);
          }

          .availability-image-card img {
            width: 100%;
            height: 100%;
            max-height: 270px;
            object-fit: contain;
            display: block;
            position: relative;
            z-index: 2;
          }

          .availability-image-label {
            position: absolute;
            left: 12px;
            bottom: 12px;
            background: rgba(15,23,42,0.82);
            color: white;
            padding: 7px 11px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 900;
            backdrop-filter: blur(10px);
            z-index: 3;
          }

          .home-service-row {
            display: grid;
            grid-template-columns: minmax(320px, 0.72fr) minmax(650px, 1.8fr);
            gap: 44px;
            align-items: center;
            background: rgba(255,255,255,0.84);
            border: 1px solid rgba(255,255,255,0.72);
            border-radius: 42px;
            padding: 54px;
            box-shadow:
              0 28px 70px rgba(15,23,42,0.14),
              inset 0 1px 0 rgba(255,255,255,0.82);
            backdrop-filter: blur(14px);
            width: 100%;
            max-width: 100%;
            min-width: 0;
          }

          .home-service-row:nth-child(even) {
            grid-template-columns: minmax(650px, 1.8fr) minmax(320px, 0.72fr);
          }

          .home-service-row:nth-child(even) .home-service-text {
            order: 2;
          }

          .home-service-row:nth-child(even) .home-service-preview {
            order: 1;
          }

          .home-service-text {
            min-width: 0;
          }

          .home-service-icon {
            width: 96px;
            height: 96px;
            border-radius: 28px;
            background: #eff6ff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            margin-bottom: 28px;
            border: 1px solid #dbeafe;
            box-shadow: 0 14px 32px rgba(37,99,235,0.14);
          }

          .home-service-preview {
            min-height: 560px;
            border-radius: 34px;
            background:
              radial-gradient(circle at 30% 25%, rgba(96,165,250,0.34), transparent 30%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #2563eb 100%);
            border: 1px solid rgba(15,23,42,0.12);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.08),
              0 24px 58px rgba(15,23,42,0.20);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 0;
            overflow: hidden;
            position: relative;
            width: 100%;
            max-width: 100%;
            min-width: 0;
          }

          .home-service-preview::before {
            content: "";
            position: absolute;
            inset: 18px;
            border-radius: 26px;
            border: 1px solid rgba(255,255,255,0.18);
            pointer-events: none;
            z-index: 3;
          }

          .home-service-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            z-index: 1;
            background: #020617;
          }

          .home-service-video::-webkit-media-controls {
            z-index: 10;
          }

          .home-benefits-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
            width: 100%;
            max-width: 100%;
          }

          .pricing-section-card {
            max-width: 1320px;
            margin: 0 auto;
            width: 100%;
            position: relative;
            overflow: hidden;
            isolation: isolate;
            border-radius: 34px;
            padding: 42px 36px;
            color: white;
            background:
              linear-gradient(125deg, #0f172a, #1c1917, #78350f, #a16207, #451a03, #0f172a);
            background-size: 340% 340%;
            animation: pricingGoldMove 14s ease-in-out infinite;
            box-shadow:
              0 28px 72px rgba(15,23,42,0.26),
              0 0 0 1px rgba(180,83,9,0.28),
              inset 0 1px 0 rgba(255,255,255,0.14);
            border: 1px solid rgba(217,119,6,0.28);
          }

          .pricing-section-card::before {
            content: "";
            position: absolute;
            width: 420px;
            height: 420px;
            border-radius: 999px;
            left: -140px;
            top: -160px;
            background: rgba(180,83,9,0.20);
            filter: blur(42px);
            animation: pricingGoldGlowOne 10s ease-in-out infinite alternate;
            z-index: -1;
          }

          .pricing-section-card::after {
            content: "";
            position: absolute;
            width: 460px;
            height: 460px;
            border-radius: 999px;
            right: -160px;
            bottom: -210px;
            background: rgba(146,64,14,0.22);
            filter: blur(48px);
            animation: pricingGoldGlowTwo 11s ease-in-out infinite alternate;
            z-index: -1;
          }

          .pricing-card {
            position: relative;
            border-radius: 24px;
            padding: 24px 22px;
            background: rgba(15,23,42,0.58);
            border: 1px solid rgba(217,119,6,0.26);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.12),
              0 14px 30px rgba(0,0,0,0.18);
            backdrop-filter: blur(14px);
            min-height: 220px;
          }

          .pricing-card-annual {
            padding-right: 22px;
          }

          .pricing-card-annual .pricing-badge {
            position: absolute;
            top: 22px;
            right: 22px;
          }

          .pricing-card-discount {
            grid-column: 1 / -1;
            min-height: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            border-color: rgba(248,113,113,0.50);
            background:
              radial-gradient(circle at 50% 0%, rgba(248,113,113,0.18), transparent 42%),
              rgba(15,23,42,0.62);
            animation: discountCardFlash 1.55s ease-in-out infinite;
          }

          .pricing-label {
            color: #fcd34d;
            font-size: 13px;
            font-weight: 950;
            text-transform: uppercase;
            letter-spacing: 0.11em;
            margin-bottom: 14px;
            line-height: 1;
          }

          .pricing-card-discount .pricing-label {
            color: #fecaca;
            margin-bottom: 10px;
            font-size: clamp(24px, 2.5vw, 36px);
            line-height: 1.08;
            letter-spacing: -0.04em;
            text-transform: none;
          }

          .pricing-price {
            font-size: clamp(28px, 2.8vw, 42px);
            line-height: 1;
            font-weight: 950;
            letter-spacing: -0.055em;
            margin: 0;
            color: white;
            text-shadow: 0 12px 30px rgba(0,0,0,0.32);
            white-space: nowrap;
          }

          .pricing-old-price {
            display: inline-block;
            margin: 0 0 8px 0;
            color: rgba(254,243,199,0.82);
            font-size: clamp(20px, 2vw, 28px);
            line-height: 1.15;
            font-weight: 850;
            text-decoration: line-through;
            text-decoration-thickness: 3px;
            text-decoration-color: rgba(248,113,113,0.95);
            white-space: nowrap;
          }

          .pricing-new-price {
            font-size: clamp(27px, 2.6vw, 40px);
            line-height: 1;
            font-weight: 950;
            letter-spacing: -0.055em;
            margin: 0;
            color: white;
            text-shadow: 0 12px 30px rgba(0,0,0,0.32);
            white-space: nowrap;
          }

          .pricing-subtext {
            margin: 14px 0 0 0;
            color: #fde68a;
            font-size: 15px;
            line-height: 1.45;
            font-weight: 600;
          }

          .pricing-card-discount .pricing-subtext {
            margin: 0;
            color: #fee2e2;
            font-size: clamp(20px, 2vw, 28px);
            line-height: 1.25;
            font-weight: 950;
          }

          .pricing-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 9px 13px;
            border-radius: 999px;
            background: rgba(120,53,15,0.42);
            color: #fff7ed;
            border: 1px solid rgba(251,191,36,0.32);
            font-size: 14px;
            font-weight: 950;
            box-shadow: 0 10px 22px rgba(0,0,0,0.14);
            white-space: nowrap;
            line-height: 1;
          }

          .contact-section-card {
            position: relative;
            overflow: hidden;
            border-radius: 34px;
            padding: 46px;
            width: 100%;
            max-width: 1240px;
            margin: 0 auto;
            background:
              linear-gradient(135deg, rgba(255,255,255,0.92), rgba(248,250,252,0.82));
            border: 1px solid rgba(255,255,255,0.82);
            box-shadow:
              0 22px 48px rgba(15,23,42,0.11),
              inset 0 1px 0 rgba(255,255,255,0.88);
            backdrop-filter: blur(16px);
          }

          .contact-section-card::before {
            content: "";
            position: absolute;
            width: 320px;
            height: 320px;
            border-radius: 999px;
            right: -120px;
            top: -140px;
            background: rgba(37,99,235,0.12);
            filter: blur(12px);
            pointer-events: none;
          }

          .contact-main-title {
            position: relative;
            z-index: 2;
            margin: 0 0 30px 0;
            text-align: center;
            color: #0f172a;
            font-size: clamp(38px, 4vw, 58px);
            line-height: 1.04;
            font-weight: 950;
            letter-spacing: -0.055em;
          }

          .contact-content-grid {
            position: relative;
            z-index: 2;
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 32px;
            align-items: center;
          }

          .contact-info-area {
            text-align: left;
          }

          .company-name {
            margin: 0;
            font-size: clamp(30px, 3vw, 44px);
            line-height: 1.05;
            font-weight: 950;
            color: #0f172a;
            letter-spacing: -0.055em;
          }

          .creator-line {
            margin: 12px 0 20px 0;
            color: #475569;
            font-size: 18px;
            line-height: 1.45;
            font-weight: 700;
          }

          .service-quebec-badge {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            margin: 0 0 22px 0;
            padding: 10px 14px;
            border-radius: 999px;
            background: rgba(37,99,235,0.10);
            color: #1d4ed8;
            border: 1px solid rgba(37,99,235,0.18);
            font-size: 15px;
            font-weight: 950;
          }

          .contact-list {
            display: grid;
            gap: 13px;
            color: #334155;
            font-size: 18px;
            line-height: 1.5;
            font-weight: 700;
          }

          .contact-list-item {
            display: flex;
            align-items: center;
            gap: 11px;
            min-width: 0;
          }

          .contact-icon {
            width: 32px;
            height: 32px;
            border-radius: 999px;
            background: rgba(37,99,235,0.10);
            color: #2563eb;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            font-size: 16px;
          }

          .contact-action-area {
            text-align: center;
            padding: 30px;
            border-radius: 28px;
            background:
              linear-gradient(135deg, rgba(37,99,235,0.10), rgba(14,165,233,0.08)),
              rgba(255,255,255,0.62);
            border: 1px solid rgba(37,99,235,0.14);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.72),
              0 14px 32px rgba(15,23,42,0.08);
          }

          .contact-action-title {
            margin: 0 0 20px 0;
            color: #0f172a;
            font-size: clamp(24px, 2.4vw, 34px);
            line-height: 1.12;
            font-weight: 950;
            letter-spacing: -0.045em;
          }

          .contact-button {
            padding: 16px 28px;
            min-width: 210px;
            border-radius: 16px;
            border: none;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: white;
            font-weight: 950;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 14px 30px rgba(37,99,235,0.28);
            transition: transform 0.22s ease, box-shadow 0.22s ease;
          }

          .contact-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 36px rgba(37,99,235,0.34);
          }

          @keyframes titlePremiumFocus {
            0% {
              transform: translateY(0) scale(1);
              text-shadow: none;
            }

            38% {
              transform: translateY(-8px) scale(1.018);
              color: #1d4ed8;
              text-shadow: 0 18px 36px rgba(37,99,235,0.22);
            }

            100% {
              transform: translateY(0) scale(1);
              text-shadow: none;
            }
          }

          @keyframes titlePremiumFocusDark {
            0% {
              transform: translateY(0) scale(1);
              text-shadow: 0 12px 34px rgba(0,0,0,0.35);
            }

            38% {
              transform: translateY(-8px) scale(1.018);
              color: #fef3c7;
              text-shadow:
                0 12px 34px rgba(0,0,0,0.35),
                0 0 30px rgba(252,211,77,0.20);
            }

            100% {
              transform: translateY(0) scale(1);
              text-shadow: 0 12px 34px rgba(0,0,0,0.35);
            }
          }

          @keyframes availabilityGradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes availabilityGlowOne {
            from {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.72;
            }
            to {
              transform: translate3d(80px, 42px, 0) scale(1.16);
              opacity: 0.95;
            }
          }

          @keyframes availabilityGlowTwo {
            from {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.70;
            }
            to {
              transform: translate3d(-90px, -38px, 0) scale(1.12);
              opacity: 0.95;
            }
          }

          @keyframes pricingGoldMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes pricingGoldGlowOne {
            from {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.68;
            }
            to {
              transform: translate3d(120px, 58px, 0) scale(1.14);
              opacity: 0.95;
            }
          }

          @keyframes pricingGoldGlowTwo {
            from {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.70;
            }
            to {
              transform: translate3d(-130px, -52px, 0) scale(1.12);
              opacity: 0.95;
            }
          }

          @keyframes discountCardFlash {
            0%, 100% {
              transform: translateY(0);
              box-shadow:
                inset 0 1px 0 rgba(255,255,255,0.12),
                0 14px 30px rgba(0,0,0,0.18),
                0 0 0 1px rgba(248,113,113,0.25);
            }

            50% {
              transform: translateY(-2px);
              box-shadow:
                inset 0 1px 0 rgba(255,255,255,0.16),
                0 20px 42px rgba(127,29,29,0.30),
                0 0 0 2px rgba(248,113,113,0.46);
            }
          }

          @keyframes titleReveal {
            from {
              opacity: 0;
              transform: translateY(34px);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes lineReveal {
            from {
              opacity: 0;
              transform: scaleX(0.2);
            }
            to {
              opacity: 0.85;
              transform: scaleX(1);
            }
          }

          @keyframes bounceArrow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(7px);
            }
          }

          @keyframes heroGlowMove {
            from {
              transform: translate3d(-2%, -2%, 0) scale(1);
            }
            to {
              transform: translate3d(3%, 4%, 0) scale(1.08);
            }
          }

          @media (max-width: 1180px) {
            .pricing-card-discount {
              min-height: auto;
              padding: 28px 22px;
            }

            .contact-content-grid {
              grid-template-columns: 1fr;
            }

            .contact-action-area {
              padding: 26px;
            }

            .sticky-promo-badge {
              font-size: 12px;
              padding: 6px 12px;
            }
          }

          @media (max-width: 980px) {
            .home-custom-tags-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .personnalise-card {
              min-height: auto;
              padding-top: 60px;
              padding-bottom: 60px;
            }

            .home-service-row,
            .home-service-row:nth-child(even) {
              grid-template-columns: 1fr;
            }

            .home-service-row:nth-child(even) .home-service-text,
            .home-service-row:nth-child(even) .home-service-preview {
              order: initial;
            }

            .home-service-row {
              padding: 38px;
              border-radius: 34px;
            }

            .home-service-preview {
              min-height: 440px;
            }

            .availability-images {
              grid-template-columns: 1fr;
            }

            .availability-image-card {
              height: 310px;
            }

            .availability-image-card img {
              max-height: 290px;
            }

            .sticky-page-nav {
              min-height: auto;
              display: grid;
              grid-template-columns: auto minmax(0, 1fr);
              grid-template-rows: auto auto;
              align-items: center;
              justify-content: stretch;
              gap: 7px 12px;
              padding: 8px 8px 9px 8px;
            }

            .sticky-page-logo {
              grid-column: 1;
              grid-row: 1;
              min-width: 0;
            }

            .sticky-promo-badge {
              position: static;
              transform: none;
              grid-column: 1 / -1;
              grid-row: 2;
              justify-self: center;
              width: fit-content;
              max-width: 100%;
              font-size: 12px;
              padding: 6px 12px;
            }

            .sticky-page-menu {
              grid-column: 2;
              grid-row: 1;
              justify-content: space-between;
              flex-wrap: nowrap;
              width: 100%;
              max-width: 100%;
              min-width: 0;
              overflow: hidden;
              gap: clamp(7px, 1.6vw, 14px);
            }

            .sticky-page-menu button {
              white-space: nowrap;
              flex: 0 0 auto;
              min-width: 0;
              font-size: clamp(11px, 1.8vw, 13px);
            }
          }

          @media (max-width: 760px) {
            .sticky-page-nav {
              top: 0;
              width: 100%;
              min-height: auto;
              grid-template-columns: auto minmax(0, 1fr);
              grid-template-rows: auto auto;
              align-items: center;
              gap: 7px 12px;
              padding: 8px 7px 9px 7px;
            }

            .sticky-page-logo {
              font-size: 13px;
              letter-spacing: 0.09em;
              gap: 0;
              padding-right: 4px;
            }

            .sticky-page-logo span {
              display: none;
            }

            .sticky-brand-logo-img {
              width: 25px;
              height: 25px;
            }

            .sticky-promo-badge {
              grid-column: 1 / -1;
              grid-row: 2;
              justify-self: center;
              font-size: clamp(10px, 2.7vw, 12px);
              padding: 6px 10px;
            }

            .sticky-page-menu {
              grid-column: 2;
              grid-row: 1;
              justify-content: space-between;
              gap: clamp(5px, 1.6vw, 10px);
              flex-wrap: nowrap;
              width: 100%;
              max-width: 100%;
              min-width: 0;
              overflow: hidden;
            }

            .sticky-page-menu button {
              font-size: clamp(10px, 2.75vw, 12px);
              white-space: nowrap;
              flex: 0 0 auto;
              min-width: 0;
              letter-spacing: -0.012em;
            }

            .sticky-contact-button {
              padding: 6px clamp(6px, 2vw, 10px) !important;
            }

            .hero-majestic {
              min-height: 610px;
            }

            .hero-nav {
              flex-direction: column;
              gap: 14px;
              padding: 18px 8px 0 8px;
            }

            .hero-logo {
              font-size: clamp(18px, 5vw, 24px);
              gap: 10px;
            }

            .hero-brand-logo-img {
              width: 32px;
              height: 32px;
            }

            .hero-menu {
              justify-content: center;
              gap: clamp(5px, 1.7vw, 8px);
              flex-wrap: nowrap;
              width: 100%;
              max-width: 100%;
              min-width: 0;
              overflow: hidden;
            }

            .hero-menu button {
              font-size: clamp(9px, 2.7vw, 13px);
              padding: 8px clamp(5px, 1.7vw, 10px);
              white-space: nowrap;
              flex: 0 1 auto;
              min-width: 0;
            }

            .hero-menu .hero-contact-button {
              padding: 8px clamp(6px, 1.9vw, 12px);
            }

            .hero-content {
              transform: translateY(20px);
            }

            .personnalise-section {
              padding: 42px 14px 65px 14px;
            }

            .personnalise-card {
              width: 100%;
              max-width: calc(100vw - 28px);
              border-radius: 28px;
              padding: 48px 18px;
            }

            .home-service-row {
              padding: 24px;
              border-radius: 26px;
            }

            .home-service-preview {
              min-height: 320px;
              border-radius: 22px;
            }

            .home-service-icon {
              width: 82px;
              height: 82px;
              font-size: 40px;
            }

            .availability-band {
              padding: 18px;
              border-radius: 24px;
              margin-bottom: 36px;
            }

            .availability-simple-title {
              margin-bottom: 14px;
              font-size: clamp(22px, 6vw, 32px);
            }

            .availability-image-card {
              height: 250px;
              border-radius: 18px;
            }

            .availability-image-card img {
              max-height: 230px;
            }

            .home-benefits-grid {
              grid-template-columns: 1fr;
            }

            .pricing-section-card {
              padding: 34px 20px;
              border-radius: 28px;
            }

            .pricing-card {
              min-height: auto;
              padding: 24px 20px;
              border-radius: 22px;
            }

            .pricing-card-annual {
              padding-right: 20px;
              padding-top: 62px;
            }

            .pricing-card-annual .pricing-badge {
              top: 20px;
              left: 20px;
              right: auto;
            }

            .pricing-price,
            .pricing-old-price,
            .pricing-new-price {
              white-space: normal;
            }

            .contact-section-card {
              padding: 34px 22px;
              border-radius: 28px;
            }

            .contact-info-area {
              text-align: center;
            }

            .service-quebec-badge {
              justify-content: center;
            }

            .contact-list-item {
              justify-content: center;
            }

            .contact-action-area {
              padding: 24px 18px;
            }
          }


          @media (max-width: 420px) {
            .hero-menu {
              gap: 4px;
            }

            .sticky-page-menu {
              gap: clamp(5px, 1.5vw, 8px);
              justify-content: space-between;
            }

            .hero-menu button {
              font-size: 8.4px;
              letter-spacing: -0.025em;
            }

            .sticky-page-menu button {
              font-size: clamp(8.9px, 2.55vw, 10px);
              letter-spacing: -0.025em;
            }

            .hero-menu button {
              padding: 7px 4.5px;
            }

            .hero-menu .hero-contact-button {
              padding: 7px 5px;
            }

            .sticky-promo-badge {
              font-size: 10px;
              padding: 5px 8px;
            }

            .sticky-contact-button {
              padding: 5px clamp(4px, 1.3vw, 6px) !important;
            }
          }

          @media (max-width: 650px) {
            .home-custom-tags-grid {
              grid-template-columns: 1fr;
            }

            .home-service-preview {
              min-height: 260px;
            }
          }
        `}
      </style>

      <nav className={`sticky-page-nav ${showStickyMenu ? "visible" : ""}`}>
        <button type="button" className="sticky-page-logo" onClick={scrollToTop}>
          <img
            src={LOGO_SRC}
            alt="Logo Jolab Solutions"
            className="brand-logo-img sticky-brand-logo-img"
          />
          <span>Jolab Solutions</span>
        </button>

        <div className="sticky-promo-badge">
          <span>10 %</span>&nbsp;de rabais sur une première application
        </div>

        <div className="sticky-page-menu">
          <button type="button" onClick={() => scrollToId("personnalise")}>
            Sur mesure
          </button>

          <button type="button" onClick={() => scrollToId("services")}>
            Exemples
          </button>

          <button type="button" onClick={() => scrollToId("tarifs")}>
            Tarifs
          </button>

          <button type="button" onClick={() => scrollToId("contact")}>
            Contact
          </button>

          <button
            type="button"
            className="sticky-contact-button"
            onClick={onOpenContact}
          >
            Nous joindre
          </button>
        </div>
      </nav>

      <section className="hero-majestic">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/videoouverture.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />
        <div className="hero-shine" />

        <nav className="hero-nav">
          <button type="button" className="hero-logo" onClick={scrollToTop}>
            <img
              src={LOGO_SRC}
              alt="Logo Jolab Solutions"
              className="brand-logo-img hero-brand-logo-img"
            />
            <span>Jolab Solutions</span>
          </button>

          <div className="hero-menu">
            <button type="button" onClick={() => scrollToId("personnalise")}>
              Sur mesure
            </button>

            <button type="button" onClick={() => scrollToId("services")}>
              Exemples
            </button>

            <button type="button" onClick={() => scrollToId("tarifs")}>
              Tarifs
            </button>

            <button type="button" onClick={() => scrollToId("contact")}>
              Contact
            </button>

            <button
              type="button"
              className="hero-contact-button"
              onClick={onOpenContact}
            >
              Nous joindre
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">
            Personnalisez votre façon de travailler
          </h1>
        </div>

        <button
          type="button"
          className="scroll-down"
          onClick={() => scrollToId("personnalise")}
        >
          <span>Descendre</span>
          <span className="scroll-arrow">↓</span>
        </button>
      </section>

      <section id="personnalise" className="personnalise-section">
        <div className="personnalise-card">
          <video
            className="personnalise-card-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>

          <div className="personnalise-card-overlay" />

          <div className="personnalise-card-content">
            <div
              style={{
                textAlign: "center",
                maxWidth: "1220px",
                margin: "0 auto",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(48px, 4.6vw, 70px)",
                  lineHeight: 1.02,
                  margin: "0 0 30px 0",
                  fontWeight: 850,
                  letterSpacing: "-0.055em",
                  textShadow: "0 12px 38px rgba(0,0,0,0.62)",
                  overflowWrap: "break-word",
                }}
              >
                Personnalisé, ça veut dire quoi ?
              </h2>

              <p
                style={{
                  fontSize: "clamp(27px, 2.5vw, 38px)",
                  lineHeight: 1.28,
                  color: "#f8fafc",
                  maxWidth: "1080px",
                  margin: "0 auto",
                  fontWeight: 760,
                  textShadow: "0 8px 28px rgba(0,0,0,0.54)",
                  overflowWrap: "break-word",
                }}
              >
                On bâtit votre application de A à Z.
              </p>

              <p
                style={{
                  fontSize: "clamp(34px, 3.4vw, 50px)",
                  lineHeight: 1.12,
                  color: "#bfdbfe",
                  maxWidth: "1040px",
                  margin: "34px auto 0 auto",
                  fontWeight: 950,
                  textShadow: "0 8px 28px rgba(0,0,0,0.54)",
                  overflowWrap: "break-word",
                }}
              >
                On choisit vous et moi :
              </p>
            </div>

            <div className="home-custom-tags-grid" style={{ marginTop: "34px" }}>
              {customTags.map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.16)",
                    border: "1px solid rgba(255,255,255,0.28)",
                    borderRadius: "18px",
                    padding: "24px 18px",
                    textAlign: "center",
                    fontWeight: 950,
                    fontSize: "clamp(21px, 1.75vw, 28px)",
                    color: "#ffffff",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 14px 32px rgba(0,0,0,0.20)",
                    minWidth: 0,
                    overflowWrap: "break-word",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                margin: "42px auto 0 auto",
                maxWidth: "1180px",
                width: "100%",
                background: "rgba(255,255,255,0.95)",
                color: "#0f172a",
                borderRadius: "24px",
                padding: "30px 28px",
                textAlign: "center",
                boxShadow: "0 20px 46px rgba(15,23,42,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(27px, 2.5vw, 38px)",
                  lineHeight: 1.22,
                  fontWeight: 950,
                  letterSpacing: "-0.04em",
                  overflowWrap: "break-word",
                }}
              >
                On crée l’application ensemble, selon votre façon de travailler.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          padding: "0 24px 100px 24px",
          background: "transparent",
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto", width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <p style={blueLabelStyle}>Exemples</p>

            <h2
              className={`section-jump-title ${
                activeTitle === "services" ? "is-active" : ""
              }`}
              style={{
                fontSize: "clamp(34px, 4.2vw, 58px)",
                lineHeight: 1.06,
                margin: 0,
                color: "#0f172a",
                fontWeight: 950,
                letterSpacing: "-0.055em",
              }}
            >
              Des outils concrets
            </h2>
          </div>

          <div className="availability-band">
            <h3 className="availability-simple-title">
              Utilisable avec n’importe quel outil, de n’importe où
            </h3>

            <div className="availability-images">
              <div className="availability-image-card">
                <img
                  src="/images/appareils.png"
                  alt="Application disponible sur cellulaire, iPad et ordinateur"
                />
                <div className="availability-image-label">
                  Cellulaire • iPad • Ordinateur
                </div>
              </div>

              <div className="availability-image-card">
                <img
                  src="/images/utilisable-partout.png"
                  alt="Utilisable partout"
                />
                <div className="availability-image-label">
                  Utilisable partout
                </div>
              </div>
            </div>
          </div>

          <div className="home-services-list">
            {serviceCards.map((item, index) => (
              <div key={item.title} className="home-service-row">
                <div className="home-service-text">
                  <div className="home-service-icon">{item.icon}</div>

                  <h3
                    style={{
                      margin: "0 0 20px 0",
                      fontSize: "clamp(38px, 3.9vw, 62px)",
                      lineHeight: 1.02,
                      fontWeight: 950,
                      color: "#0f172a",
                      letterSpacing: "-0.055em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      fontSize: "clamp(19px, 1.45vw, 24px)",
                      lineHeight: 1.62,
                      fontWeight: 550,
                    }}
                  >
                    {item.text}
                  </p>
                </div>

                <div className="home-service-preview">
                  <video
                    ref={setServiceVideoRef(index)}
                    className="home-service-video"
                    muted
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tarifs"
        style={{
          padding: "0 24px 100px 24px",
          background: "transparent",
        }}
      >
        <div className="pricing-section-card">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={blueLabelDarkStyle}>Tarifs</p>

            <h2
              className={`section-jump-title section-jump-title-dark ${
                activeTitle === "tarifs" ? "is-active" : ""
              }`}
              style={{
                fontSize: "clamp(34px, 4vw, 54px)",
                lineHeight: 1.06,
                margin: 0,
                fontWeight: 950,
                letterSpacing: "-0.06em",
                textShadow: "0 12px 34px rgba(0,0,0,0.35)",
              }}
            >
              Le prix dépend de ce que vous voulez.
            </h2>

            <p
              style={{
                maxWidth: "880px",
                margin: "18px auto 0 auto",
                color: "#fef3c7",
                fontSize: "clamp(17px, 1.5vw, 21px)",
                lineHeight: 1.45,
                fontWeight: 620,
                textShadow: "0 8px 22px rgba(0,0,0,0.28)",
              }}
            >
              Chaque application est personnalisée selon les fonctions choisies.
              Vous payez seulement pour ce dont vous avez réellement besoin.
            </p>
          </div>

          <div className="home-benefits-grid">
            <div className="pricing-card">
              <div className="pricing-label">Paiement mensuel</div>

              <p className="pricing-price">10 $ à 300 $ / mois</p>

              <p className="pricing-subtext">
                Selon la taille de l’application, les accès, les automatisations
                et les fonctionnalités utilisées.
              </p>
            </div>

            <div className="pricing-card pricing-card-annual">
              <div className="pricing-label">Paiement annuel</div>

              <p className="pricing-old-price">10 $ à 300 $ / mois</p>

              <p className="pricing-new-price">8,50 $ à 255 $ / mois</p>

              <p className="pricing-subtext">
                En payant pour l’année complète, le prix mensuel revient moins
                cher grâce au rabais annuel.
              </p>

              <div className="pricing-badge">15 % de rabais</div>
            </div>

            <div className="pricing-card pricing-card-discount">
              <div className="pricing-label">Rabais additionnel</div>

              <p className="pricing-subtext">
                10 % de rabais sur la première application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "0 24px 95px 24px",
          background: "transparent",
        }}
      >
        <div className="contact-section-card">
          <h2 className="contact-main-title">Contact</h2>

          <div className="contact-content-grid">
            <div className="contact-info-area">
              <h3 className="company-name">Jolab Solutions</h3>

              <p className="creator-line">
                Créateur : <strong>Jonathan Labrie</strong> — CPI en génie
              </p>

              <div className="service-quebec-badge">
                <span>📍</span>
                <span>Service offert partout au Québec</span>
              </div>

              <div className="contact-list">
                <div className="contact-list-item">
                  <span className="contact-icon">☎</span>
                  <span>418-330-2124</span>
                </div>

                <div className="contact-list-item">
                  <span className="contact-icon">✉</span>
                  <span>jobrie31@hotmail.com</span>
                </div>

                <div className="contact-list-item">
                  <span className="contact-icon">🌐</span>
                  <span>jolabsolutions.com</span>
                </div>

                <div className="contact-list-item">
                  <span className="contact-icon">⚙</span>
                  <span>Applications web personnalisées pour entreprises</span>
                </div>
              </div>
            </div>

            <div className="contact-action-area">
              <p className="contact-action-title">
                Prêt à discuter de votre projet ?
              </p>

              <button
                type="button"
                onClick={onOpenContact}
                className="contact-button"
              >
                Nous joindre
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}