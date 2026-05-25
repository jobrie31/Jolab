import React, { useEffect, useRef } from "react";

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
              // Les contrôles restent disponibles pour démarrer manuellement.
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

  const setServiceVideoRef = (index) => (element) => {
    serviceVideoRefs.current[index] = element;
  };

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
            padding: 24px clamp(20px, 4vw, 58px);
            max-width: 100%;
          }

          .hero-logo {
            color: white;
            font-size: clamp(18px, 2vw, 28px);
            font-weight: 850;
            letter-spacing: 0.20em;
            text-transform: uppercase;
            text-shadow: 0 5px 24px rgba(0,0,0,0.65);
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
            gap: 26px;
            width: 100%;
            max-width: 100%;
          }

          .premium-glass-card {
            background: rgba(255,255,255,0.84);
            border: 1px solid rgba(255,255,255,0.72);
            box-shadow:
              0 16px 34px rgba(15,23,42,0.09),
              inset 0 1px 0 rgba(255,255,255,0.82);
            backdrop-filter: blur(14px);
          }

          .pricing-section-card {
            max-width: 1320px;
            margin: 0 auto;
            width: 100%;
            position: relative;
            overflow: hidden;
            isolation: isolate;
            border-radius: 42px;
            padding: 68px 46px;
            color: white;
            background:
              linear-gradient(125deg, #0f172a, #1c1917, #78350f, #a16207, #451a03, #0f172a);
            background-size: 340% 340%;
            animation: pricingGoldMove 14s ease-in-out infinite;
            box-shadow:
              0 34px 90px rgba(15,23,42,0.30),
              0 0 0 1px rgba(180,83,9,0.28),
              inset 0 1px 0 rgba(255,255,255,0.14);
            border: 1px solid rgba(217,119,6,0.28);
          }

          .pricing-section-card::before {
            content: "";
            position: absolute;
            width: 480px;
            height: 480px;
            border-radius: 999px;
            left: -150px;
            top: -180px;
            background: rgba(180,83,9,0.22);
            filter: blur(42px);
            animation: pricingGoldGlowOne 10s ease-in-out infinite alternate;
            z-index: -1;
          }

          .pricing-section-card::after {
            content: "";
            position: absolute;
            width: 520px;
            height: 520px;
            border-radius: 999px;
            right: -170px;
            bottom: -230px;
            background: rgba(146,64,14,0.24);
            filter: blur(48px);
            animation: pricingGoldGlowTwo 11s ease-in-out infinite alternate;
            z-index: -1;
          }

          .pricing-card {
            border-radius: 32px;
            padding: 44px 36px;
            background: rgba(15,23,42,0.58);
            border: 1px solid rgba(217,119,6,0.26);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.12),
              0 18px 38px rgba(0,0,0,0.20);
            backdrop-filter: blur(14px);
          }

          .pricing-label {
            color: #fcd34d;
            font-size: 16px;
            font-weight: 950;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            margin-bottom: 18px;
          }

          .pricing-price {
            font-size: clamp(42px, 4.3vw, 64px);
            line-height: 1;
            font-weight: 950;
            letter-spacing: -0.055em;
            margin: 0;
            color: white;
            text-shadow: 0 12px 30px rgba(0,0,0,0.32);
          }

          .pricing-old-price {
            display: inline-block;
            margin: 0 0 12px 0;
            color: rgba(254,243,199,0.82);
            font-size: clamp(28px, 2.7vw, 42px);
            line-height: 1.15;
            font-weight: 850;
            text-decoration: line-through;
            text-decoration-thickness: 3px;
            text-decoration-color: rgba(248,113,113,0.95);
          }

          .pricing-new-price {
            font-size: clamp(42px, 4.3vw, 64px);
            line-height: 1;
            font-weight: 950;
            letter-spacing: -0.055em;
            margin: 0;
            color: white;
            text-shadow: 0 12px 30px rgba(0,0,0,0.32);
          }

          .pricing-subtext {
            margin: 18px 0 0 0;
            color: #fde68a;
            font-size: 18px;
            line-height: 1.55;
            font-weight: 600;
          }

          .pricing-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            padding: 12px 16px;
            border-radius: 999px;
            background: rgba(120,53,15,0.42);
            color: #fff7ed;
            border: 1px solid rgba(251,191,36,0.32);
            font-size: 16px;
            font-weight: 950;
            box-shadow: 0 12px 26px rgba(0,0,0,0.16);
          }

          .contact-business-card {
            position: relative;
            overflow: hidden;
            border-radius: 30px;
            padding: 38px;
            min-width: 0;
            background:
              linear-gradient(135deg, rgba(255,255,255,0.92), rgba(248,250,252,0.82));
            border: 1px solid rgba(255,255,255,0.82);
            box-shadow:
              0 22px 48px rgba(15,23,42,0.11),
              inset 0 1px 0 rgba(255,255,255,0.88);
            backdrop-filter: blur(16px);
          }

          .contact-business-card::before {
            content: "";
            position: absolute;
            width: 220px;
            height: 220px;
            border-radius: 999px;
            right: -90px;
            top: -100px;
            background: rgba(37,99,235,0.12);
            filter: blur(12px);
            pointer-events: none;
          }

          .contact-action-card {
            text-align: center;
          }

          .contact-info-card {
            text-align: left;
          }

          .contact-title {
            margin: 0 0 18px 0;
            font-size: clamp(32px, 3.8vw, 50px);
            line-height: 1.05;
            font-weight: 950;
            color: #0f172a;
            letter-spacing: -0.055em;
          }

          .contact-promo-box {
            max-width: 680px;
            margin: 0 auto 28px auto;
            padding: 22px 22px;
            border-radius: 24px;
            background:
              linear-gradient(135deg, rgba(37,99,235,0.10), rgba(14,165,233,0.08)),
              rgba(255,255,255,0.76);
            border: 1px solid rgba(37,99,235,0.16);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.78),
              0 12px 28px rgba(15,23,42,0.08);
          }

          .contact-promo-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12px;
            padding: 8px 14px;
            border-radius: 999px;
            background: #2563eb;
            color: white;
            font-size: 13px;
            font-weight: 950;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            box-shadow: 0 10px 22px rgba(37,99,235,0.24);
          }

          .contact-promo-title {
            margin: 0;
            color: #0f172a;
            font-size: clamp(24px, 2.5vw, 34px);
            line-height: 1.12;
            font-weight: 950;
            letter-spacing: -0.045em;
          }

          .contact-button {
            padding: 15px 24px;
            min-width: 185px;
            border-radius: 16px;
            border: none;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: white;
            font-weight: 950;
            font-size: 17px;
            cursor: pointer;
            box-shadow: 0 14px 30px rgba(37,99,235,0.28);
            transition: transform 0.22s ease, box-shadow 0.22s ease;
          }

          .contact-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 36px rgba(37,99,235,0.34);
          }

          .company-name {
            margin: 0;
            font-size: clamp(32px, 3.5vw, 46px);
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

          @media (max-width: 1280px) {
            .home-service-row,
            .home-service-row:nth-child(even) {
              grid-template-columns: 1fr;
            }

            .home-service-row:nth-child(even) .home-service-text,
            .home-service-row:nth-child(even) .home-service-preview {
              order: initial;
            }

            .home-service-preview {
              min-height: 520px;
            }
          }

          @media (max-width: 980px) {
            .home-benefits-grid {
              grid-template-columns: 1fr;
            }

            .home-custom-tags-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .personnalise-card {
              min-height: auto;
              padding-top: 60px;
              padding-bottom: 60px;
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
          }

          @media (max-width: 760px) {
            .hero-majestic {
              min-height: 610px;
            }

            .hero-nav {
              flex-direction: column;
              gap: 14px;
              padding-top: 18px;
            }

            .hero-menu {
              justify-content: center;
              gap: 8px;
            }

            .hero-menu button {
              font-size: 13px;
              padding: 9px 12px;
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

            .pricing-section-card {
              padding: 42px 24px;
              border-radius: 30px;
            }

            .pricing-card {
              padding: 32px 24px;
              border-radius: 26px;
            }

            .contact-business-card {
              padding: 30px 24px;
              border-radius: 24px;
            }

            .contact-info-card {
              text-align: center;
            }

            .contact-list-item {
              justify-content: center;
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

      <section className="hero-majestic">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/videoouverture.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />
        <div className="hero-shine" />

        <nav className="hero-nav">
          <div className="hero-logo">Jolab Solutions</div>

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
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <p style={blueLabelDarkStyle}>Tarifs</p>

            <h2
              style={{
                fontSize: "clamp(38px, 4.6vw, 62px)",
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
                maxWidth: "930px",
                margin: "24px auto 0 auto",
                color: "#fef3c7",
                fontSize: "clamp(19px, 1.8vw, 24px)",
                lineHeight: 1.55,
                fontWeight: 620,
                textShadow: "0 8px 22px rgba(0,0,0,0.28)",
              }}
            >
              Chaque application est personnalisée selon les fonctions choisies.
              Vous payez seulement pour ce dont vous avez réellement besoin,
              pas pour des options inutiles.
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

            <div className="pricing-card">
              <div className="pricing-label">Paiement annuel</div>

              <p className="pricing-old-price">10 $ à 300 $ / mois</p>

              <p className="pricing-new-price">8,50 $ à 255 $ / mois</p>

              <p className="pricing-subtext">
                En payant pour l’année complète, le prix mensuel revient moins
                cher grâce au rabais annuel.
              </p>

              <div className="pricing-badge">15 % de rabais</div>
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
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div className="contact-business-card contact-action-card">
            <p style={blueLabelStyle}>Contact</p>

            <h2 className="contact-title">Discutons de votre idée</h2>

            <div className="contact-promo-box">
              <div className="contact-promo-badge">Faites vite</div>

              <p className="contact-promo-title">
                Rabais de bienvenue sur votre première application.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="contact-button"
            >
              Me contacter
            </button>
          </div>

          <div className="contact-business-card contact-info-card">
            <p style={blueLabelStyle}>Informations</p>

            <h2 className="company-name">Jolab Solutions</h2>

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
        </div>
      </section>
    </main>
  );
}