import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        Ecom
      </Link>
      <nav className="header-nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/cart">Panier</NavLink>
        <NavLink to="/login">Connexion</NavLink>
      </nav>
    </header>
  );
}

export default Header;
