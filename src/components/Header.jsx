import { Link, NavLink } from "react-router";
import { useProducts } from "../features/products/context/ProductsContext";
import { useCart } from "../features/cart/context/CartContext";
import Badge from "./ui/Badge";

function Header() {
  const { categories } = useProducts();
  const { count } = useCart();

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
          <NavLink to="/login">Connexion</NavLink>
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
