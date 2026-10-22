import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Button from "../../../components/ui/Button";
import { formatPrice } from "../../../utils/formatPrice";
import "../cart.css";

function CartPage() {
  const { cart, total, dispatch } = useCart();

  if (cart.length === 0) {
    return (
      <section>
        <h1>Mon panier</h1>
        <p>Votre panier est vide.</p>
        <Link to="/">Voir les produits</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Mon panier</h1>
      <ul className="cart-list">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="cart-summary">
        <p className="cart-total">Total : {formatPrice(total)}</p>
        <Button type="button" onClick={() => dispatch({ type: "CLEAR" })}>
          Vider le panier
        </Button>
        <Link to="/checkout">Valider la commande</Link>
      </div>
    </section>
  );
}

export default CartPage;
