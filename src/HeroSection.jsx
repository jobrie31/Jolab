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

function BigBulletCard({ title, items = [] }) {
  return (
    <div
      style={{
        width: "100%",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.035))",
        border: "1px solid rgba(148,163,184,0.22)",
        borderRadius: "28px",
        padding: "28px 24px",
        boxShadow: "0 18px 45px rgba(0,0,0,0.22)",
        backdropFilter: "blur(10px)",
      }}
    >
      <h3
        style={{
          margin: "0 0 20px 0",
          color: "#ffffff",
          fontSize: "clamp(28px, 4vw, 44px)",
          lineHeight: 1.08,
          fontWeight: 900,
          letterSpacing: "-0.03em",
          textAlign: "center",
          textWrap: "balance",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          display: "grid",
          gap: "14px",
          maxWidth: "920px",
          margin: "0 auto",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              padding: "15px 16px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(148,163,184,0.16)",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "clamp(21px, 2.4vw, 30px)",
                lineHeight: 1.1,
                marginTop: "1px",
                flexShrink: 0,
              }}
            >
              •
            </span>

            <span
              style={{
                color: "#eef4fb",
                fontSize: "clamp(18px, 2.2vw, 27px)",
                lineHeight: 1.4,
                fontWeight: 800,
                textWrap: "balance",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const titleText = "Jolab360";
  const typedTitle = useTypewriter(titleText, 120, 250);
  const titleDone = typedTitle.length === titleText.length;

  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showMainPopup, setShowMainPopup] = useState(false);
  const [showExplanationPopup, setShowExplanationPopup] = useState(false);
  const [showEmployeesPopup, setShowEmployeesPopup] = useState(false);
  const [showAdminsPopup, setShowAdminsPopup] = useState(false);
  const [showAllInOnePopup, setShowAllInOnePopup] = useState(false);
  const [showPlatformPopup, setShowPlatformPopup] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const mainPopupRef = useRef(null);
  const explanationPopupRef = useRef(null);
  const employeesPopupRef = useRef(null);
  const adminsPopupRef = useRef(null);
  const allInOnePopupRef = useRef(null);
  const platformPopupRef = useRef(null);
  const resultPopupRef = useRef(null);

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
    const onScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;

    const refs = [
      { ref: mainPopupRef, setter: setShowMainPopup },
      { ref: explanationPopupRef, setter: setShowExplanationPopup },
      { ref: employeesPopupRef, setter: setShowEmployeesPopup },
      { ref: adminsPopupRef, setter: setShowAdminsPopup },
      { ref: allInOnePopupRef, setter: setShowAllInOnePopup },
      { ref: platformPopupRef, setter: setShowPlatformPopup },
      { ref: resultPopupRef, setter: setShowResultPopup },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = refs.find((r) => r.ref.current === entry.target);
          if (entry.isIntersecting && match) {
            match.setter(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.28,
      }
    );

    refs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [hasScrolled]);

  return (
    <>
      <section
        style={{
          padding: "95px 24px 105px 24px",
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

            @keyframes softFadeUp {
              0% {
                opacity: 0;
                transform: translateY(28px) scale(0.988);
                filter: blur(14px);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
              }
            }
          `}
        </style>

        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "9px 15px",
                border: "1px solid #334155",
                borderRadius: "999px",
                color: "#cbd5e1",
                fontSize: "13px",
                marginBottom: "24px",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              Plateforme web professionnelle et adaptable
            </div>

            <h1
              style={{
                fontSize: "clamp(48px, 8vw, 90px)",
                lineHeight: 1,
                margin: "0 0 18px 0",
                fontWeight: 900,
                letterSpacing: "-0.06em",
                minHeight: "1.08em",
                textAlign: "center",
              }}
            >
              {typedTitle}
              <Cursor visible={!titleDone} />
            </h1>

            <div
              style={{
                minHeight: "130px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(20px, 2.5vw, 30px)",
                  lineHeight: 1.35,
                  color: "#e2e8f0",
                  maxWidth: "860px",
                  margin: 0,
                  fontWeight: 500,
                  textWrap: "balance",
                  opacity: showSubtitle ? 1 : 0,
                  transform: showSubtitle ? "translateY(0)" : "translateY(20px)",
                  filter: showSubtitle ? "blur(0px)" : "blur(12px)",
                  transition:
                    "opacity 0.9s ease, transform 0.9s ease, filter 0.9s ease",
                  pointerEvents: showSubtitle ? "auto" : "none",
                  textAlign: "center",
                }}
              >
                Une solution de gestion tout-en-un pensée pour les entreprises qui
                veulent mieux organiser leurs opérations.
              </p>
            </div>

            <div
              style={{
                minHeight: "68px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "14px",
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
                    padding: "14px 24px",
                    fontSize: "16px",
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
                  href="#presentation"
                  style={{
                    display: "inline-block",
                    padding: "14px 24px",
                    fontSize: "16px",
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
            style={{
              marginTop: "200px",
              display: "grid",
              gap: "42px",
            }}
          >
            <div
              id="presentation"
              ref={mainPopupRef}
              style={{
                width: "100%",
                maxWidth: "1120px",
                margin: "0 auto",
                opacity: showMainPopup ? 1 : 0,
                animation: showMainPopup ? "softFadeUp 1s ease forwards" : "none",
                scrollMarginTop: "110px",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(148,163,184,0.24)",
                  borderRadius: "30px",
                  padding: "34px 26px",
                  boxShadow: "0 18px 44px rgba(0,0,0,0.2)",
                  backdropFilter: "blur(8px)",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(32px, 5vw, 60px)",
                    lineHeight: 1.05,
                    color: "#ffffff",
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    textWrap: "balance",
                    textAlign: "center",
                  }}
                >
                  La plateforme qui simplifie le travail des administrateurs et des employés
                </h2>
              </div>
            </div>

            <div
              ref={explanationPopupRef}
              style={{
                width: "100%",
                maxWidth: "1120px",
                margin: "0 auto",
                opacity: showExplanationPopup ? 1 : 0,
                animation: showExplanationPopup
                  ? "softFadeUp 1s ease forwards"
                  : "none",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(148,163,184,0.22)",
                  borderRadius: "28px",
                  padding: "30px 24px",
                  boxShadow: "0 18px 44px rgba(0,0,0,0.2)",
                  backdropFilter: "blur(8px)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: "0 auto",
                    color: "#f1f5f9",
                    fontSize: "clamp(19px, 2.4vw, 29px)",
                    lineHeight: 1.45,
                    fontWeight: 800,
                    textAlign: "center",
                    textWrap: "balance",
                    maxWidth: "900px",
                  }}
                >
                  Jolab360 a été pensée pour offrir le meilleur des deux mondes :
                  une utilisation simple, rapide et intuitive pour les employés, et
                  une gestion complète, structurée et efficace pour les
                  administrateurs. Dans une seule plateforme, les heures, les
                  projets, les tâches, la facturation, la paie et les ressources
                  importantes sont enfin reliés entre eux.
                </p>
              </div>
            </div>

            <div
              ref={employeesPopupRef}
              style={{
                width: "100%",
                maxWidth: "1120px",
                margin: "0 auto",
                opacity: showEmployeesPopup ? 1 : 0,
                animation: showEmployeesPopup
                  ? "softFadeUp 1s ease forwards"
                  : "none",
              }}
            >
              <BigBulletCard
                title="Pour les employés"
                items={[
                  "Chaque employé a son propre compte",
                  'Il peut "puncher" ses heures facilement au quotidien',
                  "Il sait sur quel projet ou quelle tâche il travaille",
                  "Il peut suivre son temps de façon simple et claire",
                ]}
              />
            </div>

            <div
              ref={adminsPopupRef}
              style={{
                width: "100%",
                maxWidth: "1120px",
                margin: "0 auto",
                opacity: showAdminsPopup ? 1 : 0,
                animation: showAdminsPopup
                  ? "softFadeUp 1s ease forwards"
                  : "none",
              }}
            >
              <BigBulletCard
                title="Pour les administrateurs"
                items={[
                  "On voit les heures des employés et les projets en temps réel",
                  "Les heures des employés et les projets sont automatiquement liés",
                  "Le suivi du temps devient beaucoup plus clair",
                  "La gestion des heures, de la paie et de la facturation client devient plus simple",
                  "L’information est centralisée pour prendre de meilleures décisions, plus rapidement",
                ]}
              />
            </div>

            <div
              ref={allInOnePopupRef}
              style={{
                width: "100%",
                maxWidth: "1120px",
                margin: "0 auto",
                opacity: showAllInOnePopup ? 1 : 0,
                animation: showAllInOnePopup
                  ? "softFadeUp 1s ease forwards"
                  : "none",
              }}
            >
              <BigBulletCard
                title="Et dans la même application"
                items={[
                  "Le suivi des projets",
                  "Le matériel utilisé",
                  "Les informations importantes",
                  "Les tâches connexes",
                  "Et plusieurs autres outils utiles au fonctionnement de l’entreprise",
                ]}
              />
            </div>

            <div
              ref={platformPopupRef}
              style={{
                width: "100%",
                maxWidth: "1120px",
                margin: "0 auto",
                opacity: showPlatformPopup ? 1 : 0,
                animation: showPlatformPopup
                  ? "softFadeUp 1s ease forwards"
                  : "none",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(148,163,184,0.22)",
                  borderRadius: "28px",
                  padding: "24px",
                  boxShadow: "0 18px 44px rgba(0,0,0,0.2)",
                  backdropFilter: "blur(8px)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 18px 0",
                    fontSize: "clamp(25px, 3.2vw, 40px)",
                    lineHeight: 1.15,
                    color: "#ffffff",
                    fontWeight: 900,
                    textAlign: "center",
                    textWrap: "balance",
                  }}
                >
                  Page d’accueil d’un administrateur
                </h3>

                <div
                  style={{
                    width: "100%",
                    maxWidth: "920px",
                    overflow: "hidden",
                    borderRadius: "18px",
                    border: "1px solid rgba(148,163,184,0.22)",
                    margin: "0 auto",
                    background: "#0b1120",
                  }}
                >
                  <img
                    src="/app-preview.png"
                    alt="Aperçu de l’application Jolab360"
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              ref={resultPopupRef}
              style={{
                width: "100%",
                maxWidth: "1120px",
                margin: "0 auto",
                opacity: showResultPopup ? 1 : 0,
                animation: showResultPopup
                  ? "softFadeUp 1s ease forwards"
                  : "none",
              }}
            >
              <BigBulletCard
                title="Le résultat"
                items={[
                  "Une seule application pour simplifier le travail des employés",
                  "Une gestion plus légère pour les administrateurs",
                  "Une meilleure vue d’ensemble sur les opérations de l’entreprise",
                  "Moins d’erreurs, moins de confusion et plus de contrôle",
                  "Une efficacité globale améliorée au quotidien",
                ]}
              />
            </div>
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