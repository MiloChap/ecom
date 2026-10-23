import { Link, NavLink, useNavigate } from "react-router";
import { useProducts } from "../features/products/context/ProductsContext";
import { useCart } from "../features/cart/context/CartContext";
import { useAuth } from "../features/auth/context/AuthContext";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

function Header() {
  const { categories } = useProducts();
  const { count } = useCart();
  const { user, isAdmin, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="header-logo">
          Ecom
        </Link>
        <nav className="header-nav">
          <NavLink to="/cart">
            🛒 Panier
            {count > 0 && <Badge>{count}</Badge>}
          </NavLink>
          {user ? (
            <>
              {isAdmin && <NavLink to="/admin">Admin</NavLink>}
              <span>Bonjour {user.username}</span>
              <Button onClick={handleLogout}>Déconnexion</Button>
            </>
          ) : (
            <>
              <NavLink to="/login">Connexion</NavLink>
              <NavLink to="/register">Inscription</NavLink>
            </>
          )}
        </nav>
      </div>
      <nav className="header-nav">
        <NavLink to="/">Tous les produits</NavLink>
        {categories.map((category) => (
          <NavLink
            key={category}
            to={`/category/${encodeURIComponent(category)}`}
          >
            {category}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
