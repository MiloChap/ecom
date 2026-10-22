import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { formatPrice } from "../../../utils/formatPrice";

function ProductCard({ product, onShowDetails }) {
  return (
    <Card>
      <img
        className="product-card-image"
        src={product.image}
        alt={product.title}
      />
      <h2 className="product-card-title">{product.title}</h2>
      <p className="product-card-price">{formatPrice(product.price)}</p>
      <div className="product-card-actions">
        <Button type="button" onClick={onShowDetails}>
          Détails
        </Button>
        <Button type="button">Ajouter au panier</Button>
      </div>
    </Card>
  );
}

export default ProductCard;
