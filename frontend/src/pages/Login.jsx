import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      // Laravel debe devolver: { token: "xxx" }
      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Error en login");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: 10 }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", marginBottom: 10 }}
        />

        <button type="submit">Entrar</button>
        
 <p>
  <Link to="/forgot-password">
    ¿Olvidaste tu contraseña?
  </Link>
</p>
<p>
  ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
</p>
        <hr />

<button
  type="button"
  onClick={() =>
    window.location.href =
      "http://localhost:8000/api/auth/google"
  }
>
  Continuar con Google
</button>
      </form>
    </div>

    
  );
}