import Button from "../../../components/ui/Button";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../../../utils/formatPrice";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <li className="cart-item">
      <img className="cart-item-image" src={item.image} alt={item.title} />
      <div className="cart-item-info">
        <p className="cart-item-title">{item.title}</p>
        <p>{formatPrice(item.price)}</p>
      </div>
      <div className="cart-item-quantity">
        <Button
          type="button"
          onClick={() => dispatch({ type: "DECREMENT", id: item.id })}
          disabled={item.quantity === 1}
        >
          −
        </Button>
        <span>{item.quantity}</span>
        <Button
          type="button"
          onClick={() => dispatch({ type: "INCREMENT", id: item.id })}
        >
          +
        </Button>
      </div>
      <p className="cart-item-subtotal">
        {formatPrice(item.price * item.quantity)}
      </p>
      <Button
        type="button"
        onClick={() => dispatch({ type: "REMOVE", id: item.id })}
      >
        Supprimer
      </Button>
    </li>
  );
}

export default CartItem;
