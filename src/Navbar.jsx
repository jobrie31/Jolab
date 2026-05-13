import React from "react";

export default function Navbar({ page, onNavigate, onOpenContact }) {
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

  const activeButtonStyle = {
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "white",
    padding: "10px 15px",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  };

  const logoTitle = page === "jolab360" ? "Jolab360" : "Jolab";
  const logoSubtitle =
    page === "jolab360"
      ? "Solution de gestion d’opérations"
      : "Applications web pour entreprises";

  return (
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
          onClick={() => onNavigate("accueil")}
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
              {logoTitle}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                lineHeight: 1.2,
                marginTop: "2px",
              }}
            >
              {logoSubtitle}
            </div>
          </div>
        </button>

        {page === "jolab360" ? (
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
              onClick={() => onNavigate("accueil")}
              style={navLinkStyle}
            >
              Accueil
            </button>

            <button
              type="button"
              onClick={() => onNavigate("jolab360")}
              style={activeButtonStyle}
            >
              Jolab360
            </button>

            <button
              type="button"
              onClick={() => onNavigate("jolab360", "presentation")}
              style={navLinkStyle}
            >
              Présentation
            </button>

            <button
              type="button"
              onClick={() => onNavigate("jolab360", "caracteristiques")}
              style={navLinkStyle}
            >
              Caractéristiques
            </button>

            <button
              type="button"
              onClick={() => onNavigate("jolab360", "aperçu")}
              style={navLinkStyle}
            >
              Étapes
            </button>

            <button
              type="button"
              onClick={() => onNavigate("jolab360", "tarif")}
              style={navLinkStyle}
            >
              Tarifs
            </button>

            <button
              type="button"
              onClick={onOpenContact}
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
        ) : (
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
              onClick={() => onNavigate("accueil", "services")}
              style={navLinkStyle}
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => onNavigate("accueil", "exemples")}
              style={navLinkStyle}
            >
              Exemple
            </button>

            <button
              type="button"
              onClick={() => onNavigate("accueil", "avantages")}
              style={navLinkStyle}
            >
              Avantages
            </button>

            <button
              type="button"
              onClick={() => onNavigate("jolab360")}
              style={activeButtonStyle}
            >
              Jolab360
            </button>

            <button
              type="button"
              onClick={onOpenContact}
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
              Me contacter
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}