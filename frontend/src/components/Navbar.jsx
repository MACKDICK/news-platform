import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        marginBottom: 20,
      }}
    >
      <h3>📰 NewsPlatform</h3>

      <div style={{ display: "flex", gap: 15 }}>
        <Link to="/">Inicio</Link>
        <Link to="/categories">Categorías</Link>
      </div>
    </nav>
  );
}