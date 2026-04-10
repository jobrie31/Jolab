import React, { useState } from "react";
import QuestionnaireInteretModal from "./QuestionnaireInteretModal";

export default function Navbar() {
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const navLinkStyle = {
    background: "transparent",
    border: "none",
    color: "white",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "15px",
    cursor: "pointer",
    padding: 0,
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(15, 23, 42, 0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #ffffff, #cbd5e1)",
                color: "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "19px",
                flexShrink: 0,
              }}
            >
              J
            </div>

            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                Jolab360
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  lineHeight: 1.2,
                  marginTop: "2px",
                }}
              >
                Solution de gestion d’opérations
              </div>
            </div>
          </button>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => scrollToId("presentation")}
              style={navLinkStyle}
            >
              Caractéristiques
            </button>

            <button
              type="button"
              onClick={() => scrollToId("aperçu")}
              style={navLinkStyle}
            >
              Étapes
            </button>

            <button
              type="button"
              onClick={() => scrollToId("tarif")}
              style={navLinkStyle}
            >
              Tarifs
            </button>

            <button
              type="button"
              onClick={() => setQuestionnaireOpen(true)}
              style={{
                background: "white",
                color: "#0f172a",
                padding: "11px 17px",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "15px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              }}
            >
              Commencer
            </button>
          </nav>
        </div>
      </header>

      <QuestionnaireInteretModal
        open={questionnaireOpen}
        onClose={() => setQuestionnaireOpen(false)}
        source="navbar_commencer"
      />
    </>
  );
}