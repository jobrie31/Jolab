const cardStyle = {
  background: "linear-gradient(180deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95))",
  padding: "28px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
  boxShadow: "0 14px 34px rgba(0,0,0,0.22)"
};

export default function FeaturesSection() {
  return (
    <section id="caracteristiques" style={{ padding: "40px 28px 80px 28px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "46px" }}>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "15px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "12px"
            }}
          >
            Caractéristiques
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 46px)",
              margin: "0 0 16px 0"
            }}
          >
            Ce que Jolab360 vous permet de faire
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              maxWidth: "820px",
              margin: "0 auto",
              lineHeight: 1.7
            }}
          >
            Une plateforme pensée pour simplifier les opérations, réduire la confusion
            et donner une meilleure vue d’ensemble sur ce qui se passe dans l’entreprise.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px"
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px", marginBottom: "16px" }}>
              Une seule plateforme pour gérer vos opérations
            </h3>
            <p style={{ color: "#cbd5e1", lineHeight: 1.75, margin: 0 }}>
              De l’entrée des heures jusqu’au suivi complet des projets, Jolab360
              rassemble l’essentiel dans un seul système. Plus besoin de travailler
              avec des feuilles, des textos, des appels et plusieurs fichiers séparés.
              Employés, projets, horaires, affectations, heures travaillées, dépenses
              et suivi interne sont réunis au même endroit.
            </p>
            <p style={{ color: "white", lineHeight: 1.75, marginTop: "16px", fontWeight: "bold" }}>
              Le résultat : moins d’erreurs, moins de confusion, plus de contrôle.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px", marginBottom: "16px" }}>
              Une plateforme personnalisable selon vos besoins
            </h3>
            <p style={{ color: "#cbd5e1", lineHeight: 1.75, margin: 0 }}>
              Jolab360 peut être adapté à votre entreprise. Il est possible d’ajouter
              des fonctionnalités, d’en retirer, de modifier certains processus et
              d’ajuster la plateforme selon votre réalité terrain. L’objectif est
              d’avoir un outil qui vous ressemble vraiment.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px", marginBottom: "16px" }}>
              Des automatisations utiles au quotidien
            </h3>
            <p style={{ color: "#cbd5e1", lineHeight: 1.75, margin: 0 }}>
              Alarmes pour les pauses, dépunch automatique à des heures fixes, envois
              d’emails automatiques et autres outils pratiques permettent de rendre la
              gestion plus simple, plus rapide et plus fiable. Jolab360 aide à réduire
              les oublis et à fluidifier les opérations.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px", marginBottom: "16px" }}>
              Un meilleur support pour l’administration et la comptabilité
            </h3>
            <p style={{ color: "#cbd5e1", lineHeight: 1.75, margin: 0 }}>
              Les heures et les informations importantes sont centralisées et faciles à
              consulter. Les données peuvent être exportées plus simplement afin de
              faciliter le travail administratif, la paie et le suivi comptable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}