// src/QuestionnaireInteretModal.jsx
import React, { useEffect, useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

const nbEmployesOptions = ["1 à 5", "6 à 10", "10 à 20", "20 et +"];

const initialForm = {
  nom: "",
  email: "",
  telephone: "",
  nomEntreprise: "",
  nbEmployes: "",
  commentaires: "",
};

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

      const payload = {
        nom: form.nom.trim(),
        email: form.email.trim(),
        telephone: form.telephone.trim(),
        nomEntreprise: form.nomEntreprise.trim(),
        nbEmployes: form.nbEmployes,
        commentaires: form.commentaires.trim(),
        source,
        statut: "nouveau",
        createdAt: serverTimestamp(),
      };

      // 1) Sauvegarde dans ta collection habituelle
      await addDoc(collection(db, "questionnairesInteret"), payload);

      // 2) Déclenchement de l'email via l'extension Firebase "Trigger Email"
      await addDoc(collection(db, "mail"), {
        to: "jobrie31@hotmail.com",
        message: {
          subject: "Nouveau formulaire d’intérêt reçu",
          text:
            `Un nouveau formulaire a été envoyé.\n\n` +
            `Nom: ${payload.nom || "-"}\n` +
            `Courriel: ${payload.email || "-"}\n` +
            `Téléphone: ${payload.telephone || "-"}\n` +
            `Entreprise: ${payload.nomEntreprise || "-"}\n` +
            `Nombre d’employés: ${payload.nbEmployes || "-"}\n` +
            `Commentaires: ${payload.commentaires || "-"}\n` +
            `Source: ${payload.source || "-"}\n`,
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
              <h2 style="margin:0 0 16px 0;">Nouveau formulaire d’intérêt reçu</h2>
              <p><strong>Nom :</strong> ${escapeHtml(payload.nom || "-")}</p>
              <p><strong>Courriel :</strong> ${escapeHtml(payload.email || "-")}</p>
              <p><strong>Téléphone :</strong> ${escapeHtml(payload.telephone || "-")}</p>
              <p><strong>Entreprise :</strong> ${escapeHtml(payload.nomEntreprise || "-")}</p>
              <p><strong>Nombre d’employés :</strong> ${escapeHtml(payload.nbEmployes || "-")}</p>
              <p><strong>Commentaires :</strong><br>${escapeHtml(payload.commentaires || "-").replace(/\n/g, "<br>")}</p>
              <p><strong>Source :</strong> ${escapeHtml(payload.source || "-")}</p>
            </div>
          `,
        },
      });

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue pendant l’envoi. Réessayez.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div onClick={() => onClose?.()} style={overlayStyle}>
      <div onClick={(e) => e.stopPropagation()} style={modalStyle}>
        <div style={headerStyle}>
          <div style={{ minWidth: 0 }}>
            <div style={eyebrowStyle}>Demande d’information</div>

            <h2 style={titleStyle}>
              Le premier pas vers une optimisation de votre entreprise.
            </h2>

            <p style={subtitleStyle}>
              Remplissez ce formulaire et nous pourrons vous recontacter rapidement.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onClose?.()}
            style={closeButtonStyle}
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={stackStyle}>
            <Field
              label="1. Nom *"
              value={form.nom}
              onChange={(v) => updateField("nom", v)}
              placeholder="Votre nom"
            />

            <Field
              label="2. Adresse courriel *"
              type="email"
              value={form.email}
              onChange={(v) => updateField("email", v)}
              placeholder="nom@entreprise.com"
            />

            <Field
              label="3. Numéro de téléphone *"
              value={form.telephone}
              onChange={(v) => updateField("telephone", v)}
              placeholder="514 555-1234"
            />

            <Field
              label="4. Nom de l’entreprise"
              value={form.nomEntreprise}
              onChange={(v) => updateField("nomEntreprise", v)}
              placeholder="Nom de l’entreprise"
            />

            <SelectField
              label="5. Nombre d’employés"
              value={form.nbEmployes}
              onChange={(v) => updateField("nbEmployes", v)}
              options={nbEmployesOptions}
            />

            <TextAreaField
              label="6. Commentaires"
              value={form.commentaires}
              onChange={(v) => updateField("commentaires", v)}
              placeholder="Ajoutez un commentaire"
              rows={4}
            />
          </div>

          {error ? <div style={errorStyle}>{error}</div> : null}
          {success ? (
            <div style={successStyle}>Votre formulaire a bien été envoyé.</div>
          ) : null}

          <div style={footerStyle}>
            <div style={requiredNoteStyle}>* Champs requis</div>

            <div style={buttonsWrapStyle}>
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
                  cursor: !canSubmit || sending ? "not-allowed" : "pointer",
                }}
              >
                {sending ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function Field({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
}) {
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

function SelectField({ label, value, onChange, options = [] }) {
  return (
    <label style={fieldWrapStyle}>
      <span style={labelStyle}>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      >
        <option value="">Choisir</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
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
          minHeight: 110,
          paddingTop: 12,
        }}
      />
    </label>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(15, 23, 42, 0.55)",
  backdropFilter: "blur(10px)",
  zIndex: 5000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const modalStyle = {
  width: "min(760px, 100%)",
  maxHeight: "calc(100vh - 40px)",
  overflowY: "auto",
  background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
  border: "1px solid #dbe7f3",
  borderRadius: "26px",
  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.18)",
  color: "#0f172a",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  padding: "22px 24px 14px 24px",
  borderBottom: "1px solid #e8eef5",
  background: "linear-gradient(135deg, #f8fbff 0%, #eef6ff 100%)",
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const eyebrowStyle = {
  display: "inline-block",
  fontSize: "11px",
  fontWeight: 800,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#2563eb",
  background: "rgba(37, 99, 235, 0.08)",
  border: "1px solid rgba(37, 99, 235, 0.14)",
  padding: "6px 10px",
  borderRadius: "999px",
  marginBottom: "10px",
};

const titleStyle = {
  margin: 0,
  fontSize: "clamp(24px, 3vw, 34px)",
  lineHeight: 1.15,
  fontWeight: 800,
  color: "#0f172a",
  maxWidth: "620px",
};

const subtitleStyle = {
  margin: "10px 0 0 0",
  fontSize: "14px",
  lineHeight: 1.55,
  color: "#475569",
  maxWidth: "620px",
};

const closeButtonStyle = {
  border: "1px solid #d8e3ef",
  background: "#ffffff",
  color: "#334155",
  borderRadius: "14px",
  width: "42px",
  height: "42px",
  cursor: "pointer",
  fontSize: "24px",
  lineHeight: 1,
  flexShrink: 0,
  boxShadow: "0 8px 20px rgba(15, 23, 42, 0.06)",
};

const formStyle = {
  padding: "18px 24px 22px 24px",
};

const stackStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "14px",
};

const fieldWrapStyle = {
  display: "block",
  minWidth: 0,
};

const labelStyle = {
  display: "block",
  marginBottom: "7px",
  fontWeight: 700,
  fontSize: "14px",
  color: "#1e293b",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 14px",
  borderRadius: "14px",
  border: "1px solid #d7e2ee",
  background: "#ffffff",
  color: "#0f172a",
  fontSize: "14px",
  outline: "none",
  boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.03)",
};

const errorStyle = {
  marginTop: "14px",
  padding: "12px 14px",
  borderRadius: "14px",
  border: "1px solid #fecaca",
  background: "#fff1f2",
  color: "#b91c1c",
  fontSize: "14px",
};

const successStyle = {
  marginTop: "14px",
  padding: "12px 14px",
  borderRadius: "14px",
  border: "1px solid #bbf7d0",
  background: "#f0fdf4",
  color: "#166534",
  fontSize: "14px",
};

const footerStyle = {
  marginTop: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  flexWrap: "wrap",
};

const requiredNoteStyle = {
  fontSize: "13px",
  color: "#64748b",
  fontWeight: 600,
};

const buttonsWrapStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  border: "none",
  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  color: "white",
  padding: "12px 18px",
  borderRadius: "14px",
  fontWeight: 800,
  fontSize: "14px",
  boxShadow: "0 14px 28px rgba(37, 99, 235, 0.22)",
};

const secondaryButtonStyle = {
  border: "1px solid #d7e2ee",
  background: "#ffffff",
  color: "#334155",
  padding: "12px 18px",
  borderRadius: "14px",
  fontWeight: 700,
  fontSize: "14px",
  cursor: "pointer",
  boxShadow: "0 8px 18px rgba(15, 23, 42, 0.05)",
};