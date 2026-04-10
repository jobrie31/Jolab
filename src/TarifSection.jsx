export default function TarifSection() {
  const pointsTarif = [
    "Le tarif est ajusté selon les fonctionnalités réellement utiles à votre entreprise.",
    "Il évolue selon le nombre d’employés, le niveau de personnalisation et vos besoins opérationnels.",
    "Si certaines fonctionnalités ne sont pas nécessaires, le coût diminue en conséquence.",
    "Le renouvellement est mensuel et peut être annulé en tout temps.",
  ];

  const garanties = [
    "Aide rapide en cas de besoin",
    "Accompagnement personnalisé",
    "Ajustements selon l’évolution de votre entreprise",
    "Tarification claire et flexible",
  ];

  const inclus = [
    "Installation de base personnalisée gratuite",
    "Équivalent d’environ 3 heures de configuration incluses au départ",
    "Adaptation initiale de Jolab360 à votre entreprise",
    "Personnalisation supplémentaire disponible à un taux horaire fixe très compétitif",
  ];

  return (
    <section id="tarif" style={{ padding: "18px 24px 84px 24px" }}>
      <style>
        {`
          .tarif-stack {
            display: grid;
            gap: 22px;
          }

          .tarif-card {
            background: linear-gradient(180deg, rgba(15,23,42,0.90), rgba(15,23,42,0.98));
            border: 1px solid #334155;
            border-radius: 22px;
            padding: 28px;
            box-shadow: 0 16px 40px rgba(0,0,0,0.22);
          }

          .tarif-badge {
            display: inline-block;
            padding: 8px 14px;
            border-radius: 999px;
            border: 1px solid rgba(59,130,246,0.22);
            background: rgba(37,99,235,0.10);
            color: #d7e6ff;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 16px;
          }

          .tarif-list {
            display: grid;
            gap: 14px;
            margin-top: 22px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .tarif-list-item {
            color: #e2e8f0;
            font-size: clamp(16px, 1.45vw, 19px);
            line-height: 1.65;
            padding-left: 22px;
            position: relative;
            font-weight: 500;
          }

          .tarif-list-item::before {
            content: "";
            position: absolute;
            left: 0;
            top: 12px;
            width: 7px;
            height: 7px;
            border-radius: 999px;
            background: #60a5fa;
          }

          .tarif-divider {
            height: 1px;
            background: rgba(148,163,184,0.16);
            margin: 22px 0;
          }

          .tarif-bottom-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 26px;
            align-items: start;
          }

          .tarif-bottom-col {
            text-align: center;
          }

          .tarif-small-list {
            display: grid;
            gap: 12px;
            margin: 16px auto 0 auto;
            padding: 0;
            list-style: none;
            max-width: 540px;
            text-align: left;
          }

          .tarif-small-list li {
            color: #dbe4f0;
            font-size: clamp(16px, 1.45vw, 19px);
            line-height: 1.65;
            padding-left: 22px;
            position: relative;
            font-weight: 500;
          }

          .tarif-small-list li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 12px;
            width: 7px;
            height: 7px;
            border-radius: 999px;
            background: #22c55e;
          }

          @media (max-width: 900px) {
            .tarif-bottom-grid {
              grid-template-columns: 1fr;
              gap: 22px;
            }

            .tarif-card {
              padding: 24px 20px;
            }
          }
        `}
      </style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(30,41,59,0.96), rgba(15,23,42,0.98))",
            border: "1px solid #334155",
            borderRadius: "24px",
            padding: "30px",
            boxShadow: "0 16px 42px rgba(0,0,0,0.22)",
          }}
        >
          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "15px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: "14px",
                fontWeight: 700,
              }}
            >
              Tarif
            </p>

            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.08,
                margin: "0 0 14px 0",
                color: "#ffffff",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textWrap: "balance",
                textAlign: "center",
              }}
            >
              Un tarif optimisé et personnalisé
            </h2>

            <p
              style={{
                margin: "0 auto",
                color: "#dbe4f0",
                fontSize: "clamp(17px, 1.8vw, 21px)",
                lineHeight: 1.65,
                maxWidth: "900px",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Chaque entreprise reçoit une proposition adaptée à sa réalité afin
              de payer uniquement pour les fonctionnalités, les ajustements et
              le niveau de personnalisation réellement nécessaires.
            </p>
          </div>

          <div className="tarif-stack">
            <div className="tarif-card" style={{ textAlign: "center" }}>
              <div className="tarif-badge">Tarification mensuelle</div>

              <div
                style={{
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: 1.05,
                  fontWeight: 900,
                  color: "#ffffff",
                  marginBottom: "14px",
                  letterSpacing: "-0.03em",
                  textWrap: "balance",
                  textAlign: "center",
                }}
              >
                Entre 100 $ et 300 $ par mois
              </div>

              <p
                style={{
                  margin: "0 auto",
                  color: "#dbe4f0",
                  fontSize: "clamp(17px, 1.7vw, 21px)",
                  lineHeight: 1.7,
                  maxWidth: "900px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Le tarif varie selon vos besoins réels. L’objectif est de vous
                offrir une solution rentable, ajustée à votre entreprise, afin
                que vous payiez uniquement pour ce qui vous est réellement utile.
              </p>

              <div className="tarif-list">
                {pointsTarif.map((item) => (
                  <div key={item} className="tarif-list-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="tarif-card">
              <div className="tarif-bottom-grid">
                <div className="tarif-bottom-col">
                  <h3
                    style={{
                      margin: "0 0 14px 0",
                      fontSize: "clamp(24px, 2.6vw, 34px)",
                      lineHeight: 1.12,
                      color: "#ffffff",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      textWrap: "balance",
                      textAlign: "center",
                    }}
                  >
                    Ce qui est inclus
                  </h3>

                  <ul className="tarif-small-list">
                    {inclus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="tarif-bottom-col">
                  <h4
                    style={{
                      margin: "0 0 12px 0",
                      fontSize: "clamp(22px, 2.2vw, 30px)",
                      color: "#ffffff",
                      lineHeight: 1.15,
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      textWrap: "balance",
                      textAlign: "center",
                    }}
                  >
                    Garanties et accompagnement
                  </h4>

                  <ul className="tarif-small-list" style={{ maxWidth: "420px" }}>
                    {garanties.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="tarif-divider" />

              <p
                style={{
                  margin: 0,
                  color: "#94a3b8",
                  fontSize: "clamp(14px, 1.2vw, 17px)",
                  lineHeight: 1.7,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Le renouvellement mensuel demeure flexible et peut être annulé
                en tout temps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}