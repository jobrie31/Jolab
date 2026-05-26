import React, { useEffect, useMemo, useState } from "react";

const initialForm = {
  nom: "",
  email: "",
  telephone: "",
  texte: "",
};

const FUNCTION_URL =
  "https://us-central1-jolab-14e57.cloudfunctions.net/submitQuestionnaireInteret";

export default function QuestionnaireInteretModal({
  open = false,
  onClose,
  source = "inconnu",
}) {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => {
    return form.nom.trim() && form.email.trim() && form.telephone.trim();
  }, [form]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setError("");
      setSuccess(false);
      setSending(false);
      setForm(initialForm);
    }
  }, [open]);

  if (!open) return null;

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.nom.trim()) {
      setError("Veuillez entrer votre nom.");
      return;
    }

    if (!form.email.trim()) {
      setError("Veuillez entrer votre adresse courriel.");
      return;
    }

    if (!isValidEmail(form.email.trim())) {
      setError("Veuillez entrer un courriel valide.");
      return;
    }

    if (!form.telephone.trim()) {
      setError("Veuillez entrer votre numéro de téléphone.");
      return;
    }

    try {
      setSending(true);

      const response = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: form.nom.trim(),
          email: form.email.trim(),
          telephone: form.telephone.trim(),
          nomEntreprise: "",
          nbEmployes: "",
          commentaires: form.texte.trim(),
          source,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result?.error || "Une erreur est survenue pendant l’envoi."
        );
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      console.error("Erreur envoi questionnaire:", err);
      setError(
        err?.message || "Une erreur est survenue pendant l’envoi. Réessayez."
      );
    } finally {
      setSending(false);
    }
  }

  function handleCloseSuccess() {
    setSuccess(false);
    setError("");
    setSending(false);
    setForm(initialForm);
    onClose?.();
  }

  return (
    <div style={overlayStyle}>
      <style>
        {`
          @keyframes modalEntrance {
            from {
              opacity: 0;
              transform: translateY(16px) scale(0.985);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes redDiscountPulse {
            0%, 100% {
              transform: scale(1);
              box-shadow:
                0 14px 32px rgba(220, 38, 38, 0.22),
                0 0 0 1px rgba(255, 255, 255, 0.42);
            }

            50% {
              transform: scale(1.012);
              box-shadow:
                0 20px 48px rgba(220, 38, 38, 0.36),
                0 0 0 1px rgba(255, 255, 255, 0.68);
            }
          }

          @keyframes softGlow {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.72;
            }

            50% {
              transform: translate3d(-16px, 12px, 0) scale(1.08);
              opacity: 1;
            }
          }

          @media (max-width: 900px) {
            .premium-modal-shell {
              width: min(100%, 96vw) !important;
              max-height: calc(100vh - 22px) !important;
              min-height: auto !important;
              grid-template-columns: 1fr !important;
              overflow-y: auto !important;
            }

            .premium-modal-left {
              min-height: auto !important;
              padding: 34px 24px 30px 24px !important;
              border-radius: 28px 28px 0 0 !important;
            }

            .premium-modal-right {
              padding: 28px 24px 30px 24px !important;
              border-radius: 0 0 28px 28px !important;
            }

            .premium-modal-title {
              font-size: clamp(34px, 8vw, 48px) !important;
            }

            .title-line {
              white-space: normal !important;
            }

            .premium-form-row {
              grid-template-columns: 1fr !important;
            }

            .premium-footer {
              flex-direction: column !important;
              align-items: stretch !important;
            }

            .premium-buttons-wrap {
              width: 100% !important;
            }

            .premium-buttons-wrap button {
              flex: 1 !important;
            }

            .form-discount-banner {
              width: 100% !important;
              justify-content: center !important;
              text-align: center !important;
            }
          }
        `}
      </style>

      <div className="premium-modal-shell" style={modalStyle}>
        {success ? (
          <div style={successPopupWrapStyle}>
            <button
              type="button"
              onClick={handleCloseSuccess}
              style={closeButtonStyle}
              aria-label="Fermer"
            >
              ×
            </button>

            <div style={successIconStyle}>✓</div>

            <h2 style={successPopupTitleStyle}>
              Votre demande a bien été envoyée.
            </h2>

            <p style={successPopupTextStyle}>
              Vous aurez un suivi dans les 48 prochaines heures ouvrables.
            </p>

            <button
              type="button"
              onClick={handleCloseSuccess}
              style={successPopupButtonStyle}
            >
              Continuer vers le site
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => onClose?.()}
              style={closeButtonStyle}
              aria-label="Fermer"
            >
              ×
            </button>

            <section className="premium-modal-left" style={leftPanelStyle}>
              <div style={leftGlowOneStyle} />
              <div style={leftGlowTwoStyle} />

              <div style={brandBadgeStyle}>Jolab Solutions</div>

              <h2 className="premium-modal-title" style={heroTitleStyle}>
                <span className="title-line" style={titleLineStyle}>
                  Parlez-nous de
                </span>
                <span className="title-line" style={titleLineStyle}>
                  votre besoin
                </span>
              </h2>

              <p style={heroTextStyle}>
                Décrivez brièvement ce que vous souhaitez créer, simplifier ou
                automatiser.
              </p>
            </section>

            <section className="premium-modal-right" style={rightPanelStyle}>
              <form onSubmit={handleSubmit} style={formStyle}>
                <div className="form-discount-banner" style={formDiscountStyle}>
                  <span style={discountDotStyle} />
                  Rabais de bienvenue de 10 % sur la première app.
                </div>

                <div style={stackStyle}>
                  <div className="premium-form-row" style={formRowStyle}>
                    <Field
                      label="Nom *"
                      value={form.nom}
                      onChange={(v) => updateField("nom", v)}
                      placeholder="Votre nom"
                    />

                    <Field
                      label="Téléphone *"
                      value={form.telephone}
                      onChange={(v) => updateField("telephone", v)}
                      placeholder="514 555-1234"
                    />
                  </div>

                  <Field
                    label="Adresse courriel *"
                    type="email"
                    value={form.email}
                    onChange={(v) => updateField("email", v)}
                    placeholder="nom@entreprise.com"
                  />

                  <TextAreaField
                    label="Texte"
                    value={form.texte}
                    onChange={(v) => updateField("texte", v)}
                    placeholder="Exemple : J’aimerais remplacer un fichier Excel, mieux suivre mes employés, gérer mon inventaire, automatiser des rapports, etc."
                    rows={7}
                  />
                </div>

                {error ? <div style={errorStyle}>{error}</div> : null}

                <div className="premium-footer" style={footerStyle}>
                  <div style={requiredNoteStyle}>* Champs requis</div>

                  <div className="premium-buttons-wrap" style={buttonsWrapStyle}>
                    <button
                      type="button"
                      onClick={() => onClose?.()}
                      style={secondaryButtonStyle}
                    >
                      Fermer
                    </button>

                    <button
                      type="submit"
                      disabled={!canSubmit || sending}
                      style={{
                        ...primaryButtonStyle,
                        opacity: !canSubmit || sending ? 0.65 : 1,
                        cursor:
                          !canSubmit || sending ? "not-allowed" : "pointer",
                      }}
                    >
                      {sending ? "Envoi..." : "Envoyer ma demande"}
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder = "", type = "text" }) {
  return (
    <label style={fieldWrapStyle}>
      <span style={labelStyle}>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputStyle}
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
}) {
  return (
    <label style={fieldWrapStyle}>
      <span style={labelStyle}>{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        style={{
          ...inputStyle,
          resize: "vertical",
          minHeight: 175,
          paddingTop: 14,
          lineHeight: 1.55,
        }}
      />
    </label>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background:
    "radial-gradient(circle at 20% 10%, rgba(37,99,235,0.25), transparent 34%), radial-gradient(circle at 80% 90%, rgba(14,165,233,0.18), transparent 36%), rgba(15, 23, 42, 0.66)",
  backdropFilter: "blur(14px)",
  zIndex: 10000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "18px",
};

const modalStyle = {
  width: "min(1280px, 92vw)",
  minHeight: "min(680px, calc(100vh - 70px))",
  maxHeight: "calc(100vh - 70px)",
  background: "#ffffff",
  border: "1px solid rgba(255,255,255,0.72)",
  borderRadius: "34px",
  boxShadow:
    "0 42px 120px rgba(2, 6, 23, 0.34), inset 0 1px 0 rgba(255,255,255,0.90)",
  color: "#0f172a",
  display: "grid",
  gridTemplateColumns: "0.95fr 1.15fr",
  position: "relative",
  isolation: "isolate",
  overflow: "hidden",
  animation: "modalEntrance 0.28s ease both",
};

const closeButtonStyle = {
  position: "absolute",
  top: "18px",
  right: "18px",
  zIndex: 20,
  border: "1px solid rgba(15, 23, 42, 0.10)",
  background: "rgba(255,255,255,0.92)",
  color: "#0f172a",
  borderRadius: "14px",
  width: "42px",
  height: "42px",
  cursor: "pointer",
  fontSize: "24px",
  lineHeight: 1,
  boxShadow: "0 12px 26px rgba(15, 23, 42, 0.10)",
  backdropFilter: "blur(12px)",
};

const leftPanelStyle = {
  position: "relative",
  minHeight: "680px",
  padding: "54px 48px",
  color: "#ffffff",
  overflow: "hidden",
  background:
    "linear-gradient(145deg, rgba(15,23,42,1) 0%, rgba(30,58,138,0.96) 54%, rgba(37,99,235,0.92) 100%)",
  borderRadius: "34px 0 0 34px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "center",
  paddingTop: "145px",
};

const leftGlowOneStyle = {
  position: "absolute",
  width: "390px",
  height: "390px",
  borderRadius: "999px",
  top: "-140px",
  right: "-120px",
  background: "rgba(96,165,250,0.36)",
  filter: "blur(34px)",
  animation: "softGlow 8s ease-in-out infinite",
  pointerEvents: "none",
};

const leftGlowTwoStyle = {
  position: "absolute",
  width: "420px",
  height: "420px",
  borderRadius: "999px",
  bottom: "-180px",
  left: "-135px",
  background: "rgba(14,165,233,0.25)",
  filter: "blur(38px)",
  animation: "softGlow 10s ease-in-out infinite reverse",
  pointerEvents: "none",
};

const brandBadgeStyle = {
  position: "relative",
  zIndex: 2,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "9px 13px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "rgba(255,255,255,0.92)",
  fontSize: "12px",
  fontWeight: 900,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
  backdropFilter: "blur(10px)",
};

const heroTitleStyle = {
  position: "relative",
  zIndex: 2,
  margin: "38px 0 0 0",
  fontSize: "clamp(46px, 4.4vw, 70px)",
  lineHeight: 1.02,
  fontWeight: 950,
  letterSpacing: "-0.07em",
  color: "#ffffff",
  textShadow: "0 18px 48px rgba(0,0,0,0.34)",
  maxWidth: "760px",
  textAlign: "center",
};

const titleLineStyle = {
  display: "block",
  whiteSpace: "nowrap",
};

const heroTextStyle = {
  position: "relative",
  zIndex: 2,
  margin: "24px 0 0 0",
  fontSize: "18px",
  lineHeight: 1.58,
  color: "rgba(239,246,255,0.92)",
  fontWeight: 650,
  maxWidth: "560px",
  textAlign: "center",
};

const rightPanelStyle = {
  padding: "72px 54px 48px 54px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,251,255,1) 100%)",
  borderRadius: "0 34px 34px 0",
  display: "flex",
  alignItems: "center",
};

const formStyle = {
  margin: 0,
  width: "100%",
};

const formDiscountStyle = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "9px",
  width: "fit-content",
  maxWidth: "100%",
  margin: "0 auto 26px auto",
  padding: "13px 18px",
  borderRadius: "999px",
  background:
    "linear-gradient(135deg, rgba(220,38,38,1), rgba(185,28,28,1))",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.58)",
  fontSize: "15px",
  fontWeight: 950,
  textAlign: "center",
  boxShadow: "0 14px 32px rgba(220, 38, 38, 0.22)",
  animation: "redDiscountPulse 1.55s ease-in-out infinite",
};

const discountDotStyle = {
  width: "9px",
  height: "9px",
  borderRadius: "999px",
  background: "#ffffff",
  boxShadow: "0 0 0 5px rgba(255,255,255,0.18)",
  flex: "0 0 auto",
};

const stackStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "18px",
};

const formRowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

const fieldWrapStyle = {
  display: "block",
  minWidth: 0,
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: 850,
  fontSize: "15px",
  color: "#1e293b",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "15px 15px",
  borderRadius: "16px",
  border: "1px solid #d7e2ee",
  background: "#ffffff",
  color: "#0f172a",
  fontSize: "15px",
  outline: "none",
  boxShadow:
    "inset 0 1px 2px rgba(15, 23, 42, 0.03), 0 8px 18px rgba(15, 23, 42, 0.035)",
};

const errorStyle = {
  marginTop: "16px",
  padding: "13px 15px",
  borderRadius: "16px",
  border: "1px solid #fecaca",
  background: "#fff1f2",
  color: "#b91c1c",
  fontSize: "14px",
  fontWeight: 650,
};

const footerStyle = {
  marginTop: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "14px",
  flexWrap: "wrap",
  paddingTop: "18px",
  borderTop: "1px solid #e8eef5",
};

const requiredNoteStyle = {
  fontSize: "13px",
  color: "#64748b",
  fontWeight: 700,
  lineHeight: 1.45,
};

const buttonsWrapStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  border: "none",
  background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
  color: "white",
  padding: "14px 20px",
  borderRadius: "16px",
  fontWeight: 900,
  fontSize: "15px",
  boxShadow: "0 16px 32px rgba(37, 99, 235, 0.22)",
};

const secondaryButtonStyle = {
  border: "1px solid #d7e2ee",
  background: "#ffffff",
  color: "#334155",
  padding: "14px 18px",
  borderRadius: "16px",
  fontWeight: 800,
  fontSize: "15px",
  cursor: "pointer",
  boxShadow: "0 8px 18px rgba(15, 23, 42, 0.05)",
};

const successPopupWrapStyle = {
  gridColumn: "1 / -1",
  padding: "64px 32px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "620px",
  background:
    "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.16), transparent 38%), linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
  borderRadius: "34px",
  position: "relative",
};

const successIconStyle = {
  width: "82px",
  height: "82px",
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
  color: "#15803d",
  fontSize: "38px",
  fontWeight: 950,
  marginBottom: "20px",
  boxShadow: "0 16px 34px rgba(34, 197, 94, 0.20)",
};

const successPopupTitleStyle = {
  margin: 0,
  fontSize: "clamp(30px, 4vw, 46px)",
  lineHeight: 1.08,
  fontWeight: 950,
  letterSpacing: "-0.055em",
  color: "#0f172a",
  maxWidth: "680px",
};

const successPopupTextStyle = {
  margin: "16px 0 0 0",
  fontSize: "16px",
  lineHeight: 1.7,
  color: "#475569",
  maxWidth: "580px",
};

const successPopupButtonStyle = {
  marginTop: "30px",
  border: "none",
  background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
  color: "#ffffff",
  padding: "15px 24px",
  borderRadius: "16px",
  fontWeight: 900,
  fontSize: "15px",
  cursor: "pointer",
  boxShadow: "0 16px 32px rgba(37, 99, 235, 0.24)",
};