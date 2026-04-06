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
    <section id="aperçu" style={{ padding: "10px 28px 80px 28px" }}>
      <style>
        {`
          .preview-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
          }

          .preview-step-card {
            position: relative;
            background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025));
            border: 1px solid #243041;
            border-radius: 20px;
            padding: 24px;
            transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
          }

          .preview-step-card:hover {
            transform: translateY(-4px);
            border-color: #3b82f6;
            box-shadow: 0 16px 36px rgba(0,0,0,0.24);
          }

          .preview-step-badge {
            width: 54px;
            height: 54px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 18px;
            margin-bottom: 18px;
            color: white;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            box-shadow: 0 10px 24px rgba(37,99,235,0.35);
          }

          .preview-step-card.featured .preview-step-badge {
            background: linear-gradient(135deg, #f59e0b, #ea580c);
            box-shadow: 0 10px 24px rgba(245,158,11,0.35);
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
            background: "linear-gradient(180deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95))",
            border: "1px solid #1e293b",
            borderRadius: "24px",
            padding: "32px"
          }}
        >
          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "15px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "12px"
              }}
            >
              Les étapes simples vers une entreprise optimisée
            </p>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                margin: "0 0 14px 0"
              }}
            >
              Un processus simple et pensé pour votre entreprise
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.7,
                margin: "0 auto",
                maxWidth: "900px"
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
                    fontSize: "24px",
                    lineHeight: 1.25
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#cbd5e1",
                    fontSize: "17px",
                    lineHeight: 1.75
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