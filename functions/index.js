const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

setGlobalOptions({
  region: "us-central1",
  maxInstances: 10,
});

admin.initializeApp();

const BREVO_SMTP_USER = defineSecret("BREVO_SMTP_USER");
const BREVO_SMTP_PASS = defineSecret("BREVO_SMTP_PASS");
const MAIL_FROM = defineSecret("MAIL_FROM");

function cleanString(value, maxLen = 1000) {
  return String(value || "").trim().slice(0, maxLen);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

exports.submitQuestionnaireInteret = onRequest(
  {
    region: "us-central1",
    cors: [
      "https://jolab-14e57.web.app",
      "https://jolab-14e57.firebaseapp.com",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    secrets: [BREVO_SMTP_USER, BREVO_SMTP_PASS, MAIL_FROM],
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        res.status(405).json({ error: "Méthode non autorisée." });
        return;
      }

      const data = req.body || {};

      const nom = cleanString(data.nom, 120);
      const email = cleanString(data.email, 180).toLowerCase();
      const telephone = cleanString(data.telephone, 50);
      const nomEntreprise = cleanString(data.nomEntreprise, 180);
      const nbEmployes = cleanString(data.nbEmployes, 40);
      const commentaires = cleanString(data.commentaires, 4000);
      const source = cleanString(data.source || "inconnu", 120);

      if (!nom) {
        res.status(400).json({ error: "Le nom est obligatoire." });
        return;
      }

      if (!email) {
        res.status(400).json({ error: "Le courriel est obligatoire." });
        return;
      }

      if (!isValidEmail(email)) {
        res.status(400).json({ error: "Le courriel est invalide." });
        return;
      }

      if (!telephone) {
        res.status(400).json({ error: "Le téléphone est obligatoire." });
        return;
      }

      const payload = {
        nom,
        email,
        telephone,
        nomEntreprise,
        nbEmployes,
        commentaires,
        source,
        statut: "nouveau",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      };

      await admin.firestore().collection("questionnairesInteret").add(payload);

      const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false,
        auth: {
          user: BREVO_SMTP_USER.value(),
          pass: BREVO_SMTP_PASS.value(),
        },
      });

      await transporter.sendMail({
        from: MAIL_FROM.value(),
        to: "jobrie31@hotmail.com",
        replyTo: email,
        subject: "Nouveau formulaire d’intérêt reçu",
        text:
          `Un nouveau formulaire a été envoyé.\n\n` +
          `Nom: ${nom || "-"}\n` +
          `Courriel: ${email || "-"}\n` +
          `Téléphone: ${telephone || "-"}\n` +
          `Entreprise: ${nomEntreprise || "-"}\n` +
          `Nombre d’employés: ${nbEmployes || "-"}\n` +
          `Commentaires: ${commentaires || "-"}\n` +
          `Source: ${source || "-"}\n`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
            <h2 style="margin:0 0 16px 0;">Nouveau formulaire d’intérêt reçu</h2>
            <p><strong>Nom :</strong> ${escapeHtml(nom || "-")}</p>
            <p><strong>Courriel :</strong> ${escapeHtml(email || "-")}</p>
            <p><strong>Téléphone :</strong> ${escapeHtml(telephone || "-")}</p>
            <p><strong>Entreprise :</strong> ${escapeHtml(nomEntreprise || "-")}</p>
            <p><strong>Nombre d’employés :</strong> ${escapeHtml(nbEmployes || "-")}</p>
            <p><strong>Commentaires :</strong><br>${escapeHtml(commentaires || "-").replace(/\n/g, "<br>")}</p>
            <p><strong>Source :</strong> ${escapeHtml(source || "-")}</p>
          </div>
        `,
      });

      res.status(200).json({
        ok: true,
        message: "Questionnaire envoyé avec succès.",
      });
    } catch (error) {
      console.error("Erreur submitQuestionnaireInteret:", {
        message: error?.message || null,
        stack: error?.stack || null,
      });

      res.status(500).json({
        error: "Une erreur est survenue pendant l’envoi du questionnaire.",
      });
    }
  }
);