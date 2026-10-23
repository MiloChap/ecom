import { Link, useParams } from "react-router";
import { getOrder } from "../utils/orderStorage";
import { formatPrice } from "../../../utils/formatPrice";
import "../cart.css";

function ConfirmationPage() {
  const { id } = useParams();
  const order = getOrder(id);

  if (!order) {
    return (
      <section>
        <h1>Commande introuvable</h1>
        <p>Cette commande n'existe pas.</p>
        <Link to="/">Retour à l'accueil</Link>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <h1>Merci pour votre commande !</h1>
      <p>Commande n° {order.id}</p>
      <p>Un email de confirmation sera envoyé à {order.email}.</p>
      <ul className="checkout-list">
        {order.items.map((item) => (
          <li key={item.id} className="checkout-item">
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>{formatPrice(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total : {formatPrice(order.total)}</p>
      <Link to="/">Continuer mes achats</Link>
    </section>
  );
}

export default ConfirmationPage;
