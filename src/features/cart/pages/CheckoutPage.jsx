import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "../context/CartContext";
import { useAuth } from "../../auth/context/AuthContext";
import { checkoutSchema } from "../utils/checkoutSchema";
import { saveOrder } from "../utils/orderStorage";
import FormField from "../../../components/ui/FormField";
import Button from "../../../components/ui/Button";
import { formatPrice } from "../../../utils/formatPrice";
import "../cart.css";

function CheckoutPage() {
  const { cart, total, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { email: user ? user.email : "" },
  });

  const onSubmit = (data) => {
    const order = {
      id: Date.now(),
      email: data.email,
      items: cart,
      total,
    };

    saveOrder(order);
    dispatch({ type: "CLEAR" });
    navigate(`/order/${order.id}`);
  };

  if (cart.length === 0) {
    return (
      <section>
        <h1>Validation de la commande</h1>
        <p>Votre panier est vide.</p>
        <Link to="/">Voir les produits</Link>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <h1>Validation de la commande</h1>
      <ul className="checkout-list">
        {cart.map((item) => (
          <li key={item.id} className="checkout-item">
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>{formatPrice(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total : {formatPrice(total)}</p>
      <form
        className="checkout-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormField
          label="Email de confirmation"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <Button type="submit">Confirmer la commande</Button>
      </form>
      {!user && (
        <p>
          Vous avez un compte ? <Link to="/login">Se connecter</Link>
        </p>
      )}
    </section>
  );
}

export default CheckoutPage;
