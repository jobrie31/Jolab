export default function PreviewSection() {
  return (
    <section id="aperçu" style={{ padding: "10px 28px 80px 28px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(180deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95))",
            border: "1px solid #1e293b",
            borderRadius: "24px",
            padding: "32px"
          }}
        >
          <div style={{ marginBottom: "26px" }}>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "15px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "12px"
              }}
            >
              Aperçu
            </p>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                margin: "0 0 14px 0"
              }}
            >
              Une interface claire, moderne et pensée pour le terrain
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.7,
                margin: 0,
                maxWidth: "850px"
              }}
            >
              Ajoutez ici une image ou une capture d’écran de votre application pour
              montrer concrètement l’environnement de travail, la structure du système
              et le côté professionnel de l’interface.
            </p>
          </div>

          <div
            style={{
              minHeight: "380px",
              borderRadius: "18px",
              border: "1px dashed #475569",
              background: "#020617",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#94a3b8",
              padding: "30px",
              fontSize: "18px",
              lineHeight: 1.8
            }}
          >
            Zone prévue pour une image de Jolab360
            <br />
            Remplace ce bloc par une vraie capture d’écran de ton site
          </div>
        </div>
      </div>
    </section>
  );
}