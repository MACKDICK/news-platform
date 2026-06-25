import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Error al registrarse");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Registro</h1>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Crear cuenta</button>
      </form>

      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
}