export default function CtaSection() {
  return (
    <div id="contact" style={{ padding: "80px 40px", textAlign: "center" }}>
      <h2>Prêt à découvrir Jolab360?</h2>

      <p style={{ fontSize: "20px", color: "#cbd5e1", marginBottom: "30px" }}>
        Contactez Jolab pour voir comment Jolab360 peut aider votre entreprise.
      </p>

      <a
        href="mailto:contact@jolab.ca"
        style={{
          display: "inline-block",
          padding: "15px 30px",
          background: "white",
          color: "#0f172a",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: "bold"
        }}
      >
        Contacter Jolab
      </a>
    </div>
  );
}