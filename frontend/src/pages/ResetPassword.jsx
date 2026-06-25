import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api/axios";

export default function ResetPassword() {
  const [params] = useSearchParams();

  const token = params.get("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/reset-password", {
        token,
        email,
        password,
        password_confirmation:
          passwordConfirmation,
      });

      alert("Contraseña actualizada");
    } catch (err) {
      console.error(err);
      alert("Error al actualizar contraseña");
    }
  };

  return (
    <div>
      <h1>Nueva contraseña</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Nueva contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          onChange={(e) =>
            setPasswordConfirmation(e.target.value)
          }
        />

        <button type="submit">
          Guardar contraseña
        </button>
      </form>
    </div>
  );
}