import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="jolab-footer">
      <style>
        {`
          .jolab-footer {
            width: 100%;
            background: #0f172a;
            color: rgba(255,255,255,0.82);
            border-top: 1px solid rgba(255,255,255,0.10);
            padding: 26px 18px;
            box-sizing: border-box;
          }

          .jolab-footer-inner {
            width: 100%;
            max-width: 1600px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            flex-wrap: wrap;
          }

          .jolab-footer-brand {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
          }

          .jolab-footer-logo {
            width: 34px;
            height: 34px;
            object-fit: contain;
            display: block;
            border-radius: 8px;
            flex: 0 0 auto;
          }

          .jolab-footer-name {
            margin: 0;
            color: white;
            font-size: 15px;
            font-weight: 850;
            letter-spacing: 0.10em;
            text-transform: uppercase;
            white-space: nowrap;
          }

          .jolab-footer-text {
            margin: 0;
            color: rgba(255,255,255,0.70);
            font-size: 14px;
            font-weight: 600;
            line-height: 1.45;
            text-align: right;
          }

          .jolab-footer-links {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .jolab-footer-link {
            color: rgba(255,255,255,0.72);
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            transition: color 0.2s ease;
          }

          .jolab-footer-link:hover {
            color: #f59e0b;
          }

          .jolab-footer-separator {
            color: rgba(255,255,255,0.25);
          }

          @media (max-width: 760px) {
            .jolab-footer {
              padding: 24px 14px;
            }

            .jolab-footer-inner {
              flex-direction: column;
              justify-content: center;
              text-align: center;
            }

            .jolab-footer-brand {
              justify-content: center;
            }

            .jolab-footer-text {
              text-align: center;
            }

            .jolab-footer-links {
              justify-content: center;
            }
          }
        `}
      </style>

      <div className="jolab-footer-inner">
        <div className="jolab-footer-brand">
          <img
            src="/logo-jolab-solutions.png"
            alt="Logo Jolab Solutions"
            className="jolab-footer-logo"
          />

          <p className="jolab-footer-name">Jolab Solutions</p>
        </div>

        <div>
          <p className="jolab-footer-text">
            © {currentYear} Jolab Solutions. Tous droits réservés.
          </p>

          <div className="jolab-footer-links">
            <a className="jolab-footer-link" href="mailto:jobrie31@hotmail.com">
              jobrie31@hotmail.com
            </a>

            <span className="jolab-footer-separator">•</span>

            <a className="jolab-footer-link" href="tel:4183302124">
              418-330-2124
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}