import React, { useEffect, useRef, useState } from "react";
import QuestionnaireInteretModal from "./QuestionnaireInteretModal";

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
        animation: visible ? "blinkCursor 1s step-end infinite" : "none",
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
  const [showScrollText, setShowScrollText] = useState(false);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);

  const scrollTextRef = useRef(null);

  useEffect(() => {
    if (!titleDone) return;

    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 250);
    const buttonTimer = setTimeout(() => setShowButtons(true), 700);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, [titleDone]);

  useEffect(() => {
    const node = scrollTextRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowScrollText(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        style={{
          padding: "120px 28px 110px 28px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
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
            width: "100%",
          }}
        >
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              textAlign: "center",
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
                background: "rgba(255,255,255,0.03)",
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
                minHeight: "1.08em",
              }}
            >
              {typedTitle}
              <Cursor visible={!titleDone} />
            </h1>

            <div
              style={{
                minHeight: "170px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.35,
                  color: "#e2e8f0",
                  maxWidth: "980px",
                  margin: 0,
                  fontWeight: 500,
                  textWrap: "balance",
                  opacity: showSubtitle ? 1 : 0,
                  transform: showSubtitle ? "translateY(0)" : "translateY(20px)",
                  filter: showSubtitle ? "blur(0px)" : "blur(14px)",
                  transition:
                    "opacity 0.9s ease, transform 0.9s ease, filter 0.9s ease",
                  pointerEvents: showSubtitle ? "auto" : "none",
                }}
              >
                Une solution de gestion tout-en-un pensée pour les entreprises qui
                veulent mieux organiser leurs opérations.
              </p>
            </div>

            <div
              style={{
                minHeight: "74px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                  opacity: showButtons ? 1 : 0,
                  transform: showButtons ? "translateY(0)" : "translateY(14px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  pointerEvents: showButtons ? "auto" : "none",
                }}
              >
                <button
                  type="button"
                  onClick={() => setQuestionnaireOpen(true)}
                  style={{
                    display: "inline-block",
                    padding: "15px 26px",
                    fontSize: "17px",
                    borderRadius: "12px",
                    background: "white",
                    color: "#0f172a",
                    textDecoration: "none",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Nous contacter
                </button>

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
                    fontWeight: "bold",
                  }}
                >
                  Voir les caractéristiques
                </a>
              </div>
            </div>
          </div>

          <div
            ref={scrollTextRef}
            style={{
              marginTop: "170px",
              minHeight: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                maxWidth: "1000px",
                margin: 0,
                textAlign: "center",
                fontSize: "clamp(24px, 2.8vw, 38px)",
                lineHeight: 1.45,
                color: "#e2e8f0",
                fontWeight: 500,
                textWrap: "balance",
                opacity: showScrollText ? 1 : 0,
                transform: showScrollText
                  ? "translateY(0) scale(1)"
                  : "translateY(28px) scale(0.985)",
                filter: showScrollText ? "blur(0px)" : "blur(18px)",
                transition:
                  "opacity 1.15s ease, transform 1.15s ease, filter 1.15s ease",
              }}
            >
              Une plateforme qui ne vous force pas à changer votre façon de travailler :
              Jolab360 s’adapte à vous grâce à une personnalisation complète selon vos
              besoins. Tout le monde veut du "user-friendly".
            </p>
          </div>
        </div>
      </section>

      <QuestionnaireInteretModal
        open={questionnaireOpen}
        onClose={() => setQuestionnaireOpen(false)}
        source="hero_section"
      />
    </>
  );
}