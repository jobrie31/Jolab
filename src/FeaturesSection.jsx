const cardStyle = {
  background: "linear-gradient(180deg, rgba(30,41,59,0.96), rgba(15,23,42,0.98))",
  padding: "28px",
  borderRadius: "24px",
  border: "1px solid #334155",
  boxShadow: "0 16px 40px rgba(0,0,0,0.24)"
};

const screenshotCardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid #334155",
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "0 12px 28px rgba(0,0,0,0.16)"
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
    text: "Un nouveau projet peut être créé avec toutes les informations importantes, par exemple: client, unité, temps estimé, véhicule, plaque, VIN, kilométrage et notes de travail."
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
    text: "Par exemple: clients, années, marques et modèles peuvent être configurés directement dans l’application."
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
    <section id="caracteristiques" style={{ padding: "52px 24px 84px 24px" }}>
      <style>
        {`
          .features-gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }

          .admin-compta-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }

          .features-list-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
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
              letterSpacing: "0.14em",
              marginBottom: "14px",
              fontWeight: 700
            }}
          >
            Caractéristiques
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: 1.08,
              margin: "0 0 8px 0",
              color: "white",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              textWrap: "balance",
              textAlign: "center"
            }}
          >
            Ce que Jolab360 vous permet de faire
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "22px",
            marginBottom: "22px"
          }}
        >
          <div style={{ ...cardStyle, textAlign: "center" }}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "16px",
                fontSize: "clamp(24px, 2.7vw, 34px)",
                lineHeight: 1.15,
                color: "white",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textWrap: "balance",
                textAlign: "center"
              }}
            >
              Une plateforme personnalisable selon vos besoins
            </h3>

            <p
              style={{
                color: "#dbe4f0",
                lineHeight: 1.65,
                margin: "0 auto",
                fontSize: "clamp(17px, 1.6vw, 21px)",
                fontWeight: 500,
                maxWidth: "900px",
                textAlign: "center"
              }}
            >
              Jolab360 peut être adapté à votre entreprise. Il est possible
              d’ajouter des fonctionnalités, d’en retirer, de modifier certains
              processus et d’ajuster la plateforme selon votre réalité terrain.
              L’objectif est d’avoir un outil qui vous ressemble vraiment.
            </p>
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: "22px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h3
              style={{
                margin: "0 0 14px 0",
                fontSize: "clamp(27px, 3vw, 40px)",
                lineHeight: 1.1,
                color: "white",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textWrap: "balance",
                textAlign: "center"
              }}
            >
              Une application complète pour vous
            </h3>

            <p
              style={{
                color: "#dbe4f0",
                fontSize: "clamp(17px, 1.7vw, 22px)",
                lineHeight: 1.65,
                maxWidth: "900px",
                margin: "0 auto",
                fontWeight: 500,
                textAlign: "center"
              }}
            >
              De l’activation des comptes à la gestion des projets, du matériel,
              des réglages, des messages internes et des niveaux d’accès,
              Jolab360 propose plusieurs outils réunis dans une seule plateforme
              cohérente.
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

                <div style={{ padding: "22px" }}>
                  <h4
                    style={{
                      margin: "0 0 12px 0",
                      fontSize: "clamp(21px, 2vw, 28px)",
                      lineHeight: 1.2,
                      color: "white",
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      textWrap: "balance",
                      textAlign: "center"
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: "#dbe4f0",
                      lineHeight: 1.65,
                      fontSize: "clamp(16px, 1.45vw, 19px)",
                      fontWeight: 500,
                      textAlign: "left"
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: "22px" }}>
          <div style={{ marginBottom: "26px", textAlign: "center" }}>
            <h3
              style={{
                margin: "0 0 14px 0",
                fontSize: "clamp(27px, 3vw, 39px)",
                lineHeight: 1.1,
                color: "white",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textWrap: "balance",
                textAlign: "center"
              }}
            >
              Un meilleur support pour l’administration et la comptabilité
            </h3>

            <p
              style={{
                color: "#dbe4f0",
                lineHeight: 1.65,
                margin: "0 auto",
                fontSize: "clamp(17px, 1.7vw, 21px)",
                maxWidth: "980px",
                fontWeight: 500,
                textAlign: "center"
              }}
            >
              Jolab360 aide aussi à mieux soutenir les ressources humaines, la
              paie, la comptabilité et le suivi administratif en centralisant les
              heures, les échanges importants et les demandes de remboursement
              dans un environnement simple à consulter.
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

              <div style={{ padding: "22px" }}>
                <h4
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "clamp(21px, 2vw, 28px)",
                    lineHeight: 1.2,
                    color: "white",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    textWrap: "balance",
                    textAlign: "center"
                  }}
                >
                  Pensé pour les ressources humaines et la comptabilité
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#dbe4f0",
                    lineHeight: 1.65,
                    fontSize: "clamp(16px, 1.45vw, 19px)",
                    fontWeight: 500,
                    textAlign: "left"
                  }}
                >
                  Ce module permet de consulter plus facilement les heures des
                  employés, les périodes de paie, certaines notes RH et les
                  informations importantes liées au suivi administratif. Tout est
                  regroupé pour rendre le travail plus simple, plus clair et plus
                  rapide.
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

              <div style={{ padding: "22px" }}>
                <h4
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "clamp(21px, 2vw, 28px)",
                    lineHeight: 1.2,
                    color: "white",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    textWrap: "balance",
                    textAlign: "center"
                  }}
                >
                  Gestion des remboursements des employés
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#dbe4f0",
                    lineHeight: 1.65,
                    fontSize: "clamp(16px, 1.45vw, 19px)",
                    fontWeight: 500,
                    textAlign: "left"
                  }}
                >
                  Une section dédiée permet de gérer les remboursements lorsque
                  des employés doivent réclamer certaines dépenses ou commissions.
                  Le suivi est centralisé par période, ce qui facilite la
                  consultation, le traitement et l’organisation comptable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: "22px" }}>
          <div style={{ textAlign: "center", marginBottom: "26px" }}>
            <h3
              style={{
                margin: "0 0 14px 0",
                fontSize: "clamp(27px, 3vw, 40px)",
                lineHeight: 1.1,
                color: "white",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textWrap: "balance",
                textAlign: "center"
              }}
            >
              Une liste de fonctionnalités sans limite
            </h3>

            <p
              style={{
                color: "#dbe4f0",
                fontSize: "clamp(17px, 1.7vw, 21px)",
                lineHeight: 1.65,
                maxWidth: "900px",
                margin: "0 auto",
                fontWeight: 500,
                textAlign: "center"
              }}
            >
              Jolab360 peut intégrer une grande variété de fonctionnalités selon
              vos besoins, pour bâtir une plateforme réellement utile au
              quotidien et adaptée à votre entreprise.
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
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid #334155",
                  borderRadius: "16px",
                  padding: "18px 18px",
                  color: "white",
                  fontSize: "clamp(17px, 1.5vw, 20px)",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.14)",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "84px"
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