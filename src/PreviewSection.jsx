export default function PreviewSection() {
  const steps = [
    {
      number: "01",
      title: "Tout commence ici",
      text: "Remplir ce court questionnaire pour nous faire part de votre intérêt et nous donner un premier aperçu de votre entreprise."
    },
    {
      number: "02",
      title: "Consultation gratuite",
      text: "Nous échangeons avec vous par rencontre ou par messages afin de bien comprendre vos besoins, vos opérations et votre façon de travailler."
    },
    {
      number: "03",
      title: "Tarif optimisé pour vous",
      text: "Nous vous revenons avec une proposition claire et un tarif adapté à votre entreprise, selon les fonctionnalités réellement utiles pour vous."
    },
    {
      number: "04",
      title: "Lancement des modifications",
      text: "Une fois le plan confirmé, nous commençons les ajustements et les modifications nécessaires pour personnaliser Jolab360 à votre entreprise."
    },
    {
      number: "05",
      title: "Un mois gratuit pour tester",
      text: "Vous bénéficiez d’un mois gratuit afin d’essayer la plateforme dans votre réalité quotidienne et valider que tout répond bien à vos attentes."
    },
    {
      number: "06",
      title: "Annulation en tout temps",
      text: "Vous gardez votre liberté. Si la solution ne vous convient pas, vous pouvez annuler en tout temps."
    }
  ];

  return (
    <section id="aperçu" style={{ padding: "18px 24px 84px 24px" }}>
      <style>
        {`
          .preview-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 22px;
          }

          .preview-step-card {
            position: relative;
            background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
            border: 1px solid #334155;
            border-radius: 22px;
            padding: 26px 22px;
            transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
            box-shadow: 0 12px 28px rgba(0,0,0,0.16);
            text-align: center;
          }

          .preview-step-card:hover {
            transform: translateY(-4px);
            border-color: #60a5fa;
            box-shadow: 0 16px 34px rgba(0,0,0,0.22);
          }

          .preview-step-badge {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 20px;
            margin: 0 auto 18px auto;
            color: white;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            box-shadow: 0 10px 22px rgba(37,99,235,0.3);
          }

          .preview-step-card.featured .preview-step-badge {
            background: linear-gradient(135deg, #f59e0b, #ea580c);
            box-shadow: 0 10px 22px rgba(245,158,11,0.3);
          }

          @media (max-width: 980px) {
            .preview-steps-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 700px) {
            .preview-steps-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(180deg, rgba(30,41,59,0.96), rgba(15,23,42,0.98))",
            border: "1px solid #334155",
            borderRadius: "24px",
            padding: "30px"
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
                fontWeight: 700
              }}
            >
              Les étapes simples vers une entreprise optimisée
            </p>

            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.08,
                margin: "0 0 14px 0",
                color: "white",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textWrap: "balance",
                textAlign: "center"
              }}
            >
              Un processus simple et pensé pour votre entreprise
            </h2>

            <p
              style={{
                color: "#dbe4f0",
                fontSize: "clamp(17px, 1.8vw, 21px)",
                lineHeight: 1.65,
                margin: "0 auto",
                maxWidth: "880px",
                fontWeight: 500,
                textAlign: "center"
              }}
            >
              L’objectif : comprendre votre réalité, adapter Jolab360 à vos
              besoins et vous laisser l’essayer concrètement avant de vous engager.
            </p>
          </div>

          <div className="preview-steps-grid">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`preview-step-card ${index === 4 ? "featured" : ""}`}
              >
                <div className="preview-step-badge">{step.number}</div>

                <h3
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "clamp(21px, 2.1vw, 28px)",
                    lineHeight: 1.2,
                    color: "white",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    textWrap: "balance",
                    textAlign: "center"
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#dbe4f0",
                    fontSize: "clamp(16px, 1.45vw, 18px)",
                    lineHeight: 1.65,
                    fontWeight: 500,
                    textAlign: "center"
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}