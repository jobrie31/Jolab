export default function FeaturesSection() {
  return (
    <div id="features" style={{ padding: "60px 40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Fonctionnalités</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        <div style={{ background: "#1e293b", padding: "25px", borderRadius: "12px" }}>
          <h3>Gestion des projets</h3>
          <p style={{ color: "#cbd5e1" }}>
            Suivez facilement l’avancement de vos projets.
          </p>
        </div>

        <div style={{ background: "#1e293b", padding: "25px", borderRadius: "12px" }}>
          <h3>Gestion des employés</h3>
          <p style={{ color: "#cbd5e1" }}>
            Organisez vos équipes rapidement et clairement.
          </p>
        </div>

        <div style={{ background: "#1e293b", padding: "25px", borderRadius: "12px" }}>
          <h3>Vue moderne</h3>
          <p style={{ color: "#cbd5e1" }}>
            Offrez une image professionnelle et technologique à vos clients.
          </p>
        </div>
      </div>
    </div>
  );
}