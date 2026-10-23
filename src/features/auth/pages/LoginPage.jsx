import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/authSchemas";
import { useAuth } from "../context/AuthContext";
import FormField from "../../../components/ui/FormField";
import Button from "../../../components/ui/Button";
import ErrorMessage from "../../../components/ErrorMessage";
import "../auth.css";

function LoginPage() {
  const [error, setError] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data) => {
    setError("");

    try {
      await loginUser(data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message ?? err.message);
    }
  };

  return (
    <section className="auth-page">
      <h1>Connexion</h1>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <Button type="submit">Se connecter</Button>
      </form>
      {error && <ErrorMessage message={error} />}
      <p>
        Pas encore de compte ? <Link to="/register">Créer un compte</Link>
      </p>
    </section>
  );
}

export default LoginPage;
