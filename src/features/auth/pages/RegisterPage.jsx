import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../utils/authSchemas";
import { useAuth } from "../context/AuthContext";
import FormField from "../../../components/ui/FormField";
import Button from "../../../components/ui/Button";
import ErrorMessage from "../../../components/ErrorMessage";
import "../auth.css";

function RegisterPage() {
  const [error, setError] = useState("");
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data) => {
    setError("");

    try {
      await registerUser(data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message ?? err.message);
    }
  };

  return (
    <section className="auth-page">
      <h1>Créer un compte</h1>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          label="Nom d'utilisateur"
          register={register("username")}
          error={errors.username}
        />
        <FormField
          label="Email"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <FormField
          label="Mot de passe"
          type="password"
          register={register("password")}
          error={errors.password}
        />
        <Button type="submit">Créer mon compte</Button>
      </form>
      {error && <ErrorMessage message={error} />}
      <p>
        Déjà un compte ? <Link to="/login">Se connecter</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
