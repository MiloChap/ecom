import { Link } from "react-router";

function NotFound() {
  return (
    <section>
      <h1>Page introuvable</h1>
      <Link to="/">Retour à l'accueil</Link>
    </section>
  );
}

export default NotFound;
