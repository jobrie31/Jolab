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
  "Vos boutons",
  "Vos champs",
  "Vos étapes",
  "Vos accès",
  "Vos rapports",
  "Vos automatisations",
];

const blueLabelStyle = {
  color: "#2563eb",
  fontSize: "clamp(18px, 2vw, 24px)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 14px 0",
  fontWeight: 950,
};

const blueLabelDarkStyle = {
  color: "#93c5fd",
  fontSize: "clamp(18px, 2vw, 24px)",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 14px 0",
  fontWeight: 950,
};

export default function AccueilGeneral({ onNavigate, onOpenContact }) {
  return (
    <main
      style={{
        background: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          padding: "86px 24px 70px 24px",
          background:
            "linear-gradient(180deg, #ffffff 0%, #eef6ff 55%, #f8fafc 100%)",
        }}
      >
        <style>
          {`
            .home-services-grid {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 22px;
            }

            .home-benefits-grid {
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 14px;
            }

            .home-custom-tags-grid {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 14px;
            }

            .home-custom-card {
              position: relative;
              overflow: hidden;
            }

            .home-custom-card::before {
              content: "";
              position: absolute;
              width: 360px;
              height: 360px;
              border-radius: 999px;
              background: rgba(37, 99, 235, 0.22);
              top: -190px;
              right: -150px;
              filter: blur(2px);
            }

            .home-custom-card::after {
              content: "";
              position: absolute;
              width: 260px;
              height: 260px;
              border-radius: 999px;
              background: rgba(147, 197, 253, 0.18);
              bottom: -150px;
              left: -120px;
              filter: blur(2px);
            }

            .home-custom-content {
              position: relative;
              z-index: 2;
            }

            @media (max-width: 980px) {
              .home-services-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }

              .home-benefits-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }

              .home-custom-tags-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }

            @media (max-width: 650px) {
              .home-services-grid,
              .home-benefits-grid,
              .home-custom-tags-grid {
                grid-template-columns: 1fr;
              }
            }
          `}
        </style>

        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 76px)",
              lineHeight: 1.02,
              margin: "0 auto 20px auto",
              fontWeight: 950,
              letterSpacing: "-0.055em",
              maxWidth: "980px",
              color: "#0f172a",
              textWrap: "balance",
            }}
          >
            Personnalisez votre façon de travailler
          </h1>

          <p
            style={{
              fontSize: "clamp(19px, 2.2vw, 27px)",
              lineHeight: 1.45,
              color: "#334155",
              maxWidth: "850px",
              margin: "0 auto",
              fontWeight: 500,
              textWrap: "balance",
            }}
          >
            Des applications simples, claires et adaptées à vos opérations.
          </p>

          <div
            style={{
              marginTop: "34px",
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={onOpenContact}
              style={{
                padding: "15px 24px",
                fontSize: "16px",
                borderRadius: "14px",
                background: "#0f172a",
                color: "white",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 14px 28px rgba(15,23,42,0.18)",
              }}
            >
              Discuter de mon projet
            </button>

            <button
              type="button"
              onClick={() => onNavigate("jolab360")}
              style={{
                padding: "15px 24px",
                fontSize: "16px",
                borderRadius: "14px",
                background: "white",
                color: "#0f172a",
                fontWeight: "bold",
                border: "1px solid #cbd5e1",
                cursor: "pointer",
                boxShadow: "0 10px 22px rgba(15,23,42,0.08)",
              }}
            >
              Voir Jolab360
            </button>
          </div>
        </div>
      </section>

      <section id="personnalise" style={{ padding: "0 24px 80px 24px" }}>
        <div
          className="home-custom-card"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)",
            borderRadius: "34px",
            padding: "52px 34px",
            color: "white",
            boxShadow: "0 24px 60px rgba(15,23,42,0.28)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <div className="home-custom-content">
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
                  fontWeight: 950,
                  letterSpacing: "-0.055em",
                  textWrap: "balance",
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
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  textWrap: "balance",
                }}
              >
                Je bâtis l’application de A à Z selon votre façon de travailler.
                Ce ne sont pas des fonctions déjà décidées d’avance.
              </p>

              <p
                style={{
                  fontSize: "clamp(27px, 3.4vw, 42px)",
                  lineHeight: 1.15,
                  color: "#bfdbfe",
                  maxWidth: "900px",
                  margin: "28px auto 0 auto",
                  fontWeight: 950,
                  letterSpacing: "-0.04em",
                  textWrap: "balance",
                }}
              >
                On choisit ensemble :
              </p>
            </div>

            <div
              className="home-custom-tags-grid"
              style={{
                marginTop: "30px",
              }}
            >
              {customTags.map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.13)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: "18px",
                    padding: "22px 16px",
                    textAlign: "center",
                    fontWeight: 950,
                    fontSize: "clamp(18px, 1.9vw, 24px)",
                    lineHeight: 1.25,
                    color: "#ffffff",
                    boxShadow: "0 12px 28px rgba(15,23,42,0.14)",
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
                border: "1px solid rgba(255,255,255,0.85)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(21px, 2.7vw, 33px)",
                  lineHeight: 1.28,
                  fontWeight: 950,
                  letterSpacing: "-0.035em",
                  textWrap: "balance",
                }}
              >
                Besoin d’ajouter un bouton dans 2 mois ? Une colonne ? Un
                rapport PDF ? Un nouveau rôle employé ?{" "}
                <span style={{ color: "#2563eb" }}>On l’ajoute.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: "0 24px 80px 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "34px" }}>
            <p style={blueLabelStyle}>Exemples d’outils possibles</p>

            <h2
              style={{
                fontSize: "clamp(31px, 4vw, 48px)",
                lineHeight: 1.1,
                margin: 0,
                color: "#0f172a",
                fontWeight: 950,
                letterSpacing: "-0.04em",
                textWrap: "balance",
              }}
            >
              Exemples d’applications qui peuvent aider votre entreprise
            </h2>
          </div>

          <div className="home-services-grid">
            {serviceCards.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  padding: "26px",
                  boxShadow: "0 16px 34px rgba(15,23,42,0.08)",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "62px",
                    height: "62px",
                    borderRadius: "18px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "31px",
                    marginBottom: "18px",
                    border: "1px solid #dbeafe",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "clamp(22px, 2vw, 28px)",
                    lineHeight: 1.15,
                    fontWeight: 950,
                    color: "#0f172a",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#475569",
                    fontSize: "16px",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avantages" style={{ padding: "0 24px 80px 24px" }}>
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
            <p style={blueLabelDarkStyle}>Pourquoi</p>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                lineHeight: 1.1,
                margin: 0,
                fontWeight: 950,
                letterSpacing: "-0.04em",
                textWrap: "balance",
              }}
            >
              Plus clair qu’un Excel. Plus adapté qu’un logiciel général.
            </h2>
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
                  fontWeight: 850,
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

      <section id="exemples" style={{ padding: "0 24px 80px 24px" }}>
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
            <div
              style={{
                width: "74px",
                height: "74px",
                borderRadius: "22px",
                background: "linear-gradient(135deg, #0f172a, #334155)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
                fontWeight: 950,
                margin: "0 auto 20px auto",
              }}
            >
              J
            </div>

            <p style={blueLabelStyle}>Exemple d’application développée</p>

            <h2
              style={{
                margin: "0 0 14px 0",
                fontSize: "clamp(29px, 3.5vw, 44px)",
                lineHeight: 1.1,
                fontWeight: 950,
                color: "#0f172a",
                letterSpacing: "-0.04em",
                textWrap: "balance",
              }}
            >
              Jolab360
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
              Une application sur mesure qui regroupe les suivis, les documents et les rapports d’une entreprise au même endroit.
            </p>

            <button
              type="button"
              onClick={() => onNavigate("jolab360")}
              style={{
                padding: "14px 22px",
                borderRadius: "14px",
                border: "none",
                background: "#0f172a",
                color: "white",
                fontWeight: 900,
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Découvrir Jolab360
            </button>
          </div>

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
            <div
              style={{
                width: "74px",
                height: "74px",
                borderRadius: "22px",
                background: "#eff6ff",
                color: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
                margin: "0 auto 20px auto",
                border: "1px solid #dbeafe",
              }}
            >
              💬
            </div>

            <p style={blueLabelStyle}>Contact</p>

            <h2
              style={{
                margin: "0 0 14px 0",
                fontSize: "clamp(29px, 3.5vw, 44px)",
                lineHeight: 1.1,
                fontWeight: 950,
                color: "#0f172a",
                letterSpacing: "-0.04em",
                textWrap: "balance",
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
              On regarde votre façon de travailler et on voit quel outil pourrait
              vous faire sauver du temps.
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
        </div>
      </section>
    </main>
  );
}