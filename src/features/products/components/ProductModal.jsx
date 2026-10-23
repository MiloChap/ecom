import Button from "../../../components/ui/Button";
import { formatPrice } from "../../../utils/formatPrice";
import { useCart } from "../../cart/context/CartContext";

function ProductModal({ product, onClose }) {
  const { dispatch } = useCart();

  return (
    <div className="product-modal-overlay">
      <div className="product-modal">
        <img
          className="product-modal-image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-modal-content">
          <p className="product-modal-category">{product.category}</p>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            Note : {product.rating.rate} / 5 ({product.rating.count} avis)
          </p>
          <p className="product-modal-price">{formatPrice(product.price)}</p>
          <div className="product-card-actions">
            <Button type="button" onClick={onClose}>
              Fermer
            </Button>
            <Button
              type="button"
              onClick={() => dispatch({ type: "ADD", product })}
            >
              Ajouter au panier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
