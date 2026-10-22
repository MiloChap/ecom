import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../utils/cartReducer";

const CartContext = createContext(null);

function getSavedCart() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, getSavedCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = { cart, count, total, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
