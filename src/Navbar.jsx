export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #334155",
        background: "#0f172a"
      }}
    >
      <h2 style={{ margin: 0 }}>Jolab</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#features" style={{ color: "white", textDecoration: "none" }}>Fonctionnalités</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </div>
  );
}