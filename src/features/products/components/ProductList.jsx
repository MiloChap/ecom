import ProductCard from "./ProductCard";
import "../products.css";

function ProductList({ products }) {
  if (products.length === 0) {
    return <p>Aucun produit à afficher.</p>;
  }

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
