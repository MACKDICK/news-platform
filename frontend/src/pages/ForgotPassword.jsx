import { useState } from "react";
import api from "../api/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/forgot-password", {
        email,
      });

      setMessage("Si el correo existe, recibirás un enlace de recuperación.");
    } catch (err) {
      console.error(err);
      alert("Error enviando enlace");
    }
  };

  return (
    <div>
      <h1>Recuperar contraseña</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Enviar enlace
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}