import React from "react";

const serviceCards = [
  {
    title: "Inventaire",
    text: "Applications pour gérer vos stocks, vos matériaux, vos équipements et vos quantités en temps réel.",
    icon: "📦",
  },
  {
    title: "Suivi des heures",
    text: "Systèmes de punch, feuilles de temps, heures par projet et rapports pour la paie.",
    icon: "⏱️",
  },
  {
    title: "Planification",
    text: "Outils pour organiser les employés, les projets, les horaires et les disponibilités.",
    icon: "📅",
  },
  {
    title: "Rapports automatisés",
    text: "Création automatique de fichiers PDF, Excel, résumés de projets et documents internes.",
    icon: "📄",
  },
  {
    title: "Gestion de projets",
    text: "Suivi des tâches, documents, statuts, notes, photos et informations importantes.",
    icon: "🏗️",
  },
  {
    title: "Applications sur mesure",
    text: "Développement d’outils adaptés à votre façon de travailler, selon vos besoins réels.",
    icon: "⚙️",
  },
];

const benefits = [
  "Remplace les fichiers Excel compliqués",
  "Accessible sur téléphone, tablette et ordinateur",
  "Adapté à votre entreprise",
  "Simple à utiliser pour votre équipe",
];

const customTags = [
  "Vos accès",
  "Vos outils",
  "Vos formulaires",
  "Vos tableaux de bord",
  "Vos automatisations",
  "Vos suivis",
];

const blueLabelStyle = {
  color: "#2563eb",
  fontSize: "clamp(18px, 2vw, 24px)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 14px 0",
  fontWeight: 900,
};

const blueLabelDarkStyle = {
  color: "#93c5fd",
  fontSize: "clamp(18px, 2vw, 24px)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 14px 0",
  fontWeight: 900,
};

export default function AccueilGeneral({ onNavigate, onOpenContact }) {
  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      style={{
        background: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          .hero-majestic {
            position: relative;
            height: 100svh;
            min-height: 560px;
            overflow: hidden;
            background: #020617;
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

          .home-custom-tags-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }

          .home-services-list {
            display: grid;
            gap: 28px;
          }

          .home-service-row {
            display: grid;
            grid-template-columns: minmax(260px, 0.9fr) minmax(320px, 1.4fr);
            gap: 28px;
            align-items: center;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 30px;
            padding: 30px;
            box-shadow: 0 18px 42px rgba(15,23,42,0.09);
          }

          .home-service-row:nth-child(even) {
            grid-template-columns: minmax(320px, 1.4fr) minmax(260px, 0.9fr);
          }

          .home-service-row:nth-child(even) .home-service-text {
            order: 2;
          }

          .home-service-row:nth-child(even) .home-service-preview {
            order: 1;
          }

          .home-service-preview {
            min-height: 280px;
            border-radius: 24px;
            background:
              radial-gradient(circle at 30% 25%, rgba(96,165,250,0.34), transparent 30%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #2563eb 100%);
            border: 1px solid rgba(15,23,42,0.12);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.08),
              0 16px 34px rgba(15,23,42,0.16);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 26px;
            overflow: hidden;
            position: relative;
          }

          .home-service-preview::before {
            content: "";
            position: absolute;
            inset: 18px;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,0.16);
            pointer-events: none;
          }

          .home-service-preview::after {
            content: "";
            position: absolute;
            width: 240px;
            height: 240px;
            border-radius: 999px;
            background: rgba(255,255,255,0.10);
            filter: blur(22px);
            top: -110px;
            right: -90px;
            pointer-events: none;
          }

          .home-benefits-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;
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

          @media (max-width: 980px) {
            .home-benefits-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .home-custom-tags-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .home-service-row,
            .home-service-row:nth-child(even) {
              grid-template-columns: 1fr;
            }

            .home-service-row:nth-child(even) .home-service-text,
            .home-service-row:nth-child(even) .home-service-preview {
              order: initial;
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

            .home-service-row {
              padding: 22px;
              border-radius: 24px;
            }

            .home-service-preview {
              min-height: 220px;
            }
          }

          @media (max-width: 650px) {
            .home-benefits-grid,
            .home-custom-tags-grid {
              grid-template-columns: 1fr;
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
              Services
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

      <section
        id="personnalise"
        style={{
          padding: "90px 24px 80px 24px",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)",
            borderRadius: "34px",
            padding: "52px 34px",
            color: "white",
            boxShadow: "0 24px 60px rgba(15,23,42,0.28)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "1020px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(38px, 5.4vw, 64px)",
                lineHeight: 1.03,
                margin: "0 0 28px 0",
                fontWeight: 795,
                letterSpacing: "-0.055em",
              }}
            >
              Personnalisé, ça veut dire quoi ?
            </h2>

            <p
              style={{
                fontSize: "clamp(23px, 2.8vw, 34px)",
                lineHeight: 1.38,
                color: "#f8fafc",
                maxWidth: "1000px",
                margin: "0 auto",
                fontWeight: 700,
              }}
            >
              On bâtit votre application de A à Z.
            </p>

            <p
              style={{
                fontSize: "clamp(27px, 3.4vw, 42px)",
                lineHeight: 1.15,
                color: "#bfdbfe",
                maxWidth: "900px",
                margin: "28px auto 0 auto",
                fontWeight: 900,
              }}
            >
              On choisit vous et moi :
            </p>
          </div>

          <div className="home-custom-tags-grid" style={{ marginTop: "30px" }}>
            {customTags.map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.13)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderRadius: "18px",
                  padding: "22px 16px",
                  textAlign: "center",
                  fontWeight: 900,
                  fontSize: "clamp(18px, 1.9vw, 24px)",
                  color: "#ffffff",
                  backdropFilter: "blur(8px)",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              margin: "38px auto 0 auto",
              maxWidth: "960px",
              background: "rgba(255,255,255,0.95)",
              color: "#0f172a",
              borderRadius: "24px",
              padding: "28px 26px",
              textAlign: "center",
              boxShadow: "0 18px 40px rgba(15,23,42,0.22)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "clamp(21px, 2.7vw, 33px)",
                lineHeight: 1.28,
                fontWeight: 900,
                letterSpacing: "-0.035em",
              }}
            >
              On crée l’application ensemble, selon votre façon de travailler.
            </p>
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: "0 24px 80px 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "42px" }}>
            <p style={blueLabelStyle}>Services</p>

            <h2
              style={{
                fontSize: "clamp(31px, 4vw, 48px)",
                lineHeight: 1.1,
                margin: 0,
                color: "#0f172a",
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              Des outils concrets pour simplifier vos opérations
            </h2>
          </div>

          <div className="home-services-list">
            {serviceCards.map((item) => (
              <div key={item.title} className="home-service-row">
                <div className="home-service-text">
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "21px",
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "36px",
                      marginBottom: "20px",
                      border: "1px solid #dbeafe",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 14px 0",
                      fontSize: "clamp(30px, 3.4vw, 46px)",
                      lineHeight: 1.05,
                      fontWeight: 900,
                      color: "#0f172a",
                      letterSpacing: "-0.045em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#475569",
                      fontSize: "18px",
                      lineHeight: 1.6,
                      fontWeight: 500,
                    }}
                  >
                    {item.text}
                  </p>
                </div>

                <div className="home-service-preview">
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: "76px",
                        height: "76px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.16)",
                        border: "1px solid rgba(255,255,255,0.24)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "34px",
                        margin: "0 auto 18px auto",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      ▶
                    </div>

                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: 900,
                        marginBottom: "9px",
                      }}
                    >
                      Exemple vidéo à venir
                    </div>

                    <div
                      style={{
                        color: "#dbeafe",
                        fontSize: "16px",
                        lineHeight: 1.5,
                        maxWidth: "440px",
                        margin: "0 auto",
                      }}
                    >
                      Une courte vidéo pourra montrer un exemple concret de{" "}
                      {item.title.toLowerCase()} dans une application réelle.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tarifs" style={{ padding: "0 24px 80px 24px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            background: "#0f172a",
            borderRadius: "30px",
            padding: "42px 28px",
            color: "white",
            boxShadow: "0 18px 40px rgba(15,23,42,0.18)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <p style={blueLabelDarkStyle}>Tarifs</p>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                lineHeight: 1.1,
                margin: 0,
                fontWeight: 900,
              }}
            >
              Un projet adapté à vos besoins, pas un prix générique.
            </h2>

            <p
              style={{
                maxWidth: "760px",
                margin: "22px auto 0 auto",
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.6,
              }}
            >
              Chaque application est différente. Le prix dépend des fonctions,
              des accès, des rapports, des automatisations et du niveau de
              personnalisation souhaité.
            </p>
          </div>

          <div className="home-benefits-grid">
            {benefits.map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "18px",
                  padding: "20px",
                  minHeight: "105px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: 800,
                  fontSize: "clamp(16px, 1.5vw, 19px)",
                  lineHeight: 1.35,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "0 24px 90px 24px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "26px",
              padding: "32px",
              boxShadow: "0 16px 34px rgba(15,23,42,0.08)",
              textAlign: "center",
            }}
          >
            <p style={blueLabelStyle}>Contact</p>

            <h2
              style={{
                margin: "0 0 14px 0",
                fontSize: "clamp(29px, 3.5vw, 44px)",
                lineHeight: 1.1,
                fontWeight: 900,
                color: "#0f172a",
                letterSpacing: "-0.04em",
              }}
            >
              Vous avez une idée ?
            </h2>

            <p
              style={{
                margin: "0 auto 24px auto",
                color: "#475569",
                fontSize: "18px",
                lineHeight: 1.6,
                maxWidth: "700px",
                fontWeight: 500,
              }}
            >
              On regarde votre façon de travailler et on voit quel outil
              pourrait vous faire sauver du temps.
            </p>

            <button
              type="button"
              onClick={onOpenContact}
              style={{
                padding: "14px 22px",
                borderRadius: "14px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontWeight: 900,
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Me contacter
            </button>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "26px",
              padding: "32px",
              boxShadow: "0 16px 34px rgba(15,23,42,0.08)",
            }}
          >
            <p style={blueLabelStyle}>Informations</p>

            <h2
              style={{
                margin: "0 0 18px 0",
                fontSize: "clamp(27px, 3vw, 38px)",
                lineHeight: 1.1,
                fontWeight: 900,
                color: "#0f172a",
                letterSpacing: "-0.04em",
              }}
            >
              Jonathan Labrie
            </h2>

            <div
              style={{
                display: "grid",
                gap: "12px",
                color: "#334155",
                fontSize: "18px",
                lineHeight: 1.5,
                fontWeight: 600,
              }}
            >
              <div>📍 Québec</div>
              <div>📞 418-330-2124</div>
              <div>✉️ jobrie31@hotmail.com</div>
              <div>🌐 jolabsolutions.com</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}