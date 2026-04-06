const cardStyle = {
  background: "linear-gradient(180deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95))",
  padding: "28px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
  boxShadow: "0 14px 34px rgba(0,0,0,0.22)"
};

const screenshotCardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid #334155",
  borderRadius: "18px",
  overflow: "hidden"
};

const screenshots = [
  {
    src: "/feature-activation.png",
    alt: "Activation de compte Jolab360",
    title: "Activation simple des comptes",
    text: "Les nouveaux utilisateurs peuvent activer leur compte rapidement avec un code d’activation et définir leur mot de passe dans une interface claire et professionnelle."
  },
  {
    src: "/feature-materiels.png",
    alt: "Gestion des matériels Jolab360",
    title: "Gestion du matériel",
    text: "L’application permet d’organiser les articles par catégories, de consulter les prix rapidement et de gérer l’inventaire dans un environnement simple à utiliser."
  },
  {
    src: "/feature-nouveau-projet.png",
    alt: "Création de projet Jolab360",
    title: "Création de projets détaillés",
    text: "Un nouveau projet peut être créé avec toutes les informations importantes : client, unité, temps estimé, véhicule, plaque, VIN, kilométrage et notes de travail."
  },
  {
    src: "/feature-details-projet.png",
    alt: "Détails de projet Jolab360",
    title: "Suivi complet de chaque projet",
    text: "Chaque dossier regroupe les informations du projet, les actions importantes, les notes à effectuer, l’accès au matériel, l’historique et les documents associés."
  },
  {
    src: "/feature-reglages.png",
    alt: "Réglages Jolab360",
    title: "Réglages faciles à adapter",
    text: "Clients, années, marques et modèles peuvent être configurés directement dans l’application pour mieux refléter la réalité de votre entreprise."
  },
  {
    src: "/feature-message-important.png",
    alt: "Message important Jolab360",
    title: "Messages importants affichés à l’équipe",
    text: "Un message peut être diffusé clairement à l’écran pour rappeler une consigne, transmettre une information urgente ou attirer l’attention sur un point important."
  },
  {
    src: "/feature-comptes.png",
    alt: "Gestion des types de comptes Jolab360",
    title: "Différents types de compte",
    text: "La plateforme peut être utilisée avec différents niveaux d’accès, comme les employés, les administrateurs et les RH, afin que chacun voie les bons outils selon son rôle."
  },
  {
    src: "/feature-messagerie.png",
    alt: "Messagerie Jolab360",
    title: "Messagerie entre administrateurs et RH",
    text: "Une section de messagerie permet de communiquer plus facilement à l’interne entre administrateurs et responsables RH pour faire circuler les demandes et les informations importantes."
  }
];

export default function FeaturesSection() {
  return (
    <section id="caracteristiques" style={{ padding: "40px 28px 80px 28px" }}>
      <style>
        {`
          .features-gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .admin-compta-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }

          .features-list-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }

          @media (max-width: 900px) {
            .features-gallery-grid,
            .admin-compta-grid,
            .features-list-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

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
              maxWidth: "920px",
              margin: "0 auto",
              lineHeight: 1.7
            }}
          >
            Jolab360 est un outil quotidien personnalisable conçu pour s’adapter à votre réalité, améliorer l’organisation de vos opérations et vous faire sauver du temps et de l'argent.
          </p>
        </div>

        <div style={{ ...cardStyle, marginBottom: "22px", padding: "24px" }}>
          <h3
            style={{
              marginTop: 0,
              marginBottom: "22px",
              fontSize: "clamp(28px, 3vw, 36px)",
              lineHeight: 1.2
            }}
          >
            Une seule plateforme pour gérer les employés et les projets
          </h3>

          <div
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "18px",
              border: "1px solid #334155",
              marginBottom: "24px",
              background: "#0b1120"
            }}
          >
            <img
              src="/app-preview.png"
              alt="Aperçu de l’application Jolab360"
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover"
              }}
            />
          </div>

          <div style={{ maxWidth: "980px" }}>
            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.85,
                margin: 0,
                fontSize: "18px"
              }}
            >
              Avec Jolab360, les opérations de l’entreprise sont regroupées dans un seul
              tableau de bord. On peut voir les employés, les projets en cours, les autres
              tâches, le temps accumulé et les actions importantes à partir d’un seul endroit.
            </p>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.85,
                margin: "18px 0 0 0",
                fontSize: "18px"
              }}
            >
              Au lieu de chercher l’information à plusieurs places, tout est présenté de
              façon simple, visuelle et structurée pour permettre de suivre le temps
              consacré à chaque projet ainsi que les dépenses qui y sont liées.
            </p>

            <p
              style={{
                color: "white",
                lineHeight: 1.8,
                marginTop: "20px",
                fontWeight: "bold",
                fontSize: "18px"
              }}
            >
              Le résultat : moins d’erreurs, moins de confusion, plus de contrôle.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
            marginBottom: "22px"
          }}
        >
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
        </div>

        <div style={{ ...cardStyle, marginBottom: "22px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "clamp(28px, 3vw, 38px)"
              }}
            >
              Une application complète pour vous
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.75,
                maxWidth: "900px",
                margin: "0 auto"
              }}
            >
              De l’activation des comptes à la gestion des projets, du matériel,
              des réglages, des messages internes et des niveaux d’accès, Jolab360
              propose plusieurs outils réunis dans une seule plateforme cohérente.
            </p>
          </div>

          <div className="features-gallery-grid">
            {screenshots.map((item) => (
              <div key={item.title} style={screenshotCardStyle}>
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    display: "block",
                    background: "#fff",
                    objectFit: "contain"
                  }}
                />

                <div style={{ padding: "20px" }}>
                  <h4
                    style={{
                      margin: "0 0 10px 0",
                      fontSize: "22px",
                      lineHeight: 1.25
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: "#cbd5e1",
                      lineHeight: 1.75,
                      fontSize: "16px"
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: "22px", padding: "24px" }}>
          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                margin: "0 0 14px 0",
                fontSize: "clamp(28px, 3vw, 36px)",
                lineHeight: 1.2
              }}
            >
              Un meilleur support pour l’administration et la comptabilité
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.8,
                margin: 0,
                fontSize: "18px",
                maxWidth: "980px"
              }}
            >
              Jolab360 aide aussi à mieux soutenir les ressources humaines, la paie, la
              comptabilité et le suivi administratif en centralisant les heures, les échanges
              importants et les demandes de remboursement dans un environnement simple à consulter.
            </p>
          </div>

          <div className="admin-compta-grid">
            <div style={screenshotCardStyle}>
              <img
                src="/feature-admin-compta-heures.png"
                alt="Suivi des heures et informations RH dans Jolab360"
                style={{
                  width: "100%",
                  display: "block",
                  background: "#fff",
                  objectFit: "contain"
                }}
              />

              <div style={{ padding: "20px" }}>
                <h4
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "22px",
                    lineHeight: 1.25
                  }}
                >
                  Pensé pour les ressources humaines et la comptabilité
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#cbd5e1",
                    lineHeight: 1.75,
                    fontSize: "16px"
                  }}
                >
                  Ce module permet de consulter plus facilement les heures des employés,
                  les périodes de paie, certaines notes RH et les informations importantes
                  liées au suivi administratif. Tout est regroupé pour rendre le travail
                  plus simple, plus clair et plus rapide.
                </p>
              </div>
            </div>

            <div style={screenshotCardStyle}>
              <img
                src="/feature-remboursements.png"
                alt="Feuille de dépenses et remboursements dans Jolab360"
                style={{
                  width: "100%",
                  display: "block",
                  background: "#fff",
                  objectFit: "contain"
                }}
              />

              <div style={{ padding: "20px" }}>
                <h4
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "22px",
                    lineHeight: 1.25
                  }}
                >
                  Gestion des remboursements des employés
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#cbd5e1",
                    lineHeight: 1.75,
                    fontSize: "16px"
                  }}
                >
                  Une section dédiée permet de gérer les remboursements lorsque des employés
                  doivent réclamer certaines dépenses ou commissions. Le suivi est centralisé
                  par période, ce qui facilite la consultation, le traitement et l’organisation
                  comptable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: "22px" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "clamp(28px, 3vw, 38px)"
              }}
            >
              Une liste de fonctionnalités sans limite
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.75,
                maxWidth: "920px",
                margin: "0 auto"
              }}
            >
              Jolab360 peut intégrer une grande variété de fonctionnalités selon vos besoins,
              pour bâtir une plateforme réellement utile au quotidien et adaptée à votre entreprise.
            </p>
          </div>

          <div className="features-list-grid">
            {[
              "Intelligence artificielle intégrée",
              "Auto dépunch planifié",
              "Alarmes de pause",
              "Affichage spécial pour une TV en garage",
              "Automatisations personnalisées",
              "Stockage de PDF et de documents",
              "Appareil photo et ajout d’images",
              "Gestion des employés et des rôles",
              "Suivi du temps par projet",
              "Suivi des dépenses et remboursements",
              "Messagerie interne",
              "Création et suivi de projets",
              "Historique détaillé",
              "Réglages personnalisés",
              "Gestion du matériel",
              "Notes et rappels importants",
              "Exportation d’informations",
              "Outils RH et comptabilité",
            ].map((feature) => (
              <div
                key={feature}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid #334155",
                  borderRadius: "14px",
                  padding: "16px 18px",
                  color: "white",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: 1.45
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}