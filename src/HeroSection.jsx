import React, { useEffect, useState } from "react";

function useTypewriter(text, speed = 120, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeoutId;
    let intervalId;

    const start = () => {
      let index = 0;
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    };

    timeoutId = setTimeout(start, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return displayed;
}

function Cursor({ visible = true }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: "10px",
        marginLeft: "3px",
        opacity: visible ? 1 : 0,
        animation: "blinkCursor 1s step-end infinite"
      }}
    >
      |
    </span>
  );
}

export default function HeroSection() {
  const titleText = "Jolab360";
  const typedTitle = useTypewriter(titleText, 120, 250);
  const titleDone = typedTitle.length === titleText.length;

  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    if (!titleDone) return;

    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 250);
    const buttonTimer = setTimeout(() => setShowButtons(true), 700);
    const cardsTimer = setTimeout(() => setShowCards(true), 1300);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
      clearTimeout(cardsTimer);
    };
  }, [titleDone]);

  return (
    <section
      style={{
        padding: "120px 28px 110px 28px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <style>
        {`
          @keyframes blinkCursor {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }

          @keyframes cloudAppear {
            0% {
              opacity: 0;
              transform: translateY(26px) scale(0.985);
              filter: blur(16px);
            }
            60% {
              opacity: 0.7;
              transform: translateY(8px) scale(0.995);
              filter: blur(6px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes softFadeUp {
            0% {
              opacity: 0;
              transform: translateY(18px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%"
        }}
      >
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "10px 16px",
              border: "1px solid #334155",
              borderRadius: "999px",
              color: "#cbd5e1",
              fontSize: "14px",
              marginBottom: "28px",
              background: "rgba(255,255,255,0.03)"
            }}
          >
            Plateforme web professionnelle et adaptable
          </div>

          <h1
            style={{
              fontSize: "clamp(60px, 10vw, 118px)",
              lineHeight: 1,
              margin: "0 0 22px 0",
              fontWeight: 900,
              letterSpacing: "-0.06em",
              minHeight: "1.08em"
            }}
          >
            {typedTitle}
            <Cursor visible={!titleDone} />
          </h1>

          <div
            style={{
              minHeight: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {showSubtitle && (
              <p
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.35,
                  color: "#e2e8f0",
                  maxWidth: "980px",
                  margin: 0,
                  fontWeight: 500,
                  animation: "cloudAppear 1.15s ease-out forwards",
                  textWrap: "balance"
                }}
              >
                Une solution de gestion tout-en-un pensée pour les entreprises qui
                veulent mieux organiser leurs opérations.
              </p>
            )}
          </div>

          {showButtons && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginTop: "14px",
                animation: "softFadeUp 0.7s ease forwards"
              }}
            >
              <a
                href="mailto:contact@jolab.ca"
                style={{
                  display: "inline-block",
                  padding: "15px 26px",
                  fontSize: "17px",
                  borderRadius: "12px",
                  background: "white",
                  color: "#0f172a",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                Demander une démo
              </a>

              <a
                href="#caracteristiques"
                style={{
                  display: "inline-block",
                  padding: "15px 26px",
                  fontSize: "17px",
                  borderRadius: "12px",
                  border: "1px solid #334155",
                  background: "transparent",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                Voir les caractéristiques
              </a>
            </div>
          )}
        </div>

        {showCards && (
          <div
            style={{
              marginTop: "170px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
              animation: "softFadeUp 0.9s ease forwards"
            }}
          >
            <div
              style={{
                background: "linear-gradient(180deg, rgba(30,41,59,0.92), rgba(15,23,42,0.96))",
                border: "1px solid #1e293b",
                borderRadius: "20px",
                padding: "22px"
              }}
            >
              <div
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "10px"
                }}
              >
                Centralisé
              </div>
              <div style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                Une seule plateforme pour gérer vos opérations au lieu de disperser
                l’information dans plusieurs outils.
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, rgba(30,41,59,0.92), rgba(15,23,42,0.96))",
                border: "1px solid #1e293b",
                borderRadius: "20px",
                padding: "22px"
              }}
            >
              <div
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "10px"
                }}
              >
                Structuré
              </div>
              <div style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                Un meilleur suivi des heures, des projets, des équipes et des
                dépenses.
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, rgba(30,41,59,0.92), rgba(15,23,42,0.96))",
                border: "1px solid #1e293b",
                borderRadius: "20px",
                padding: "22px"
              }}
            >
              <div
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "10px"
                }}
              >
                Adaptable
              </div>
              <div style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                Jolab360 peut évoluer selon votre entreprise et votre façon de
                travailler.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}