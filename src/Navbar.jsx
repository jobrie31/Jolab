export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(15, 23, 42, 0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #1e293b"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #ffffff, #cbd5e1)",
              color: "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "20px"
            }}
          >
            J
          </div>

          <div>
            <div style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
              Jolab360
            </div>
            <div style={{ fontSize: "13px", color: "#94a3b8" }}>
              Solution de gestion d’opérations
            </div>
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            flexWrap: "wrap"
          }}
        >
          <a href="#caracteristiques" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
            Caractéristiques
          </a>
          <a href="#aperçu" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
            Aperçu
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
            Contact
          </a>

          <a
            href="mailto:contact@jolab.ca"
            style={{
              background: "white",
              color: "#0f172a",
              padding: "12px 18px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Demander une démo
          </a>
        </nav>
      </div>
    </header>
  );
}