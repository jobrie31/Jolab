export default function CtaSection({ onOpenContact }) {
  return (
    <section id="contact" style={{ padding: "20px 28px 100px 28px" }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          border: "1px solid #1e293b",
          borderRadius: "24px",
          padding: "48px 28px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px, 4vw, 46px)",
            margin: "0 0 18px 0",
          }}
        >
          Prêt à découvrir comment Jolab360 peut aider votre entreprise ?
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#cbd5e1",
            margin: "0 auto 30px auto",
            maxWidth: "760px",
            lineHeight: 1.7,
          }}
        >
          Contactez-nous pour une démonstration ou pour discuter d’une version
          adaptée à vos besoins.
        </p>

        <button
          type="button"
          onClick={onOpenContact}
          style={{
            display: "inline-block",
            padding: "16px 30px",
            background: "white",
            color: "#0f172a",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Contacter Jolab
        </button>
      </div>
    </section>
  );
}