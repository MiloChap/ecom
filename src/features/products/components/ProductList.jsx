import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import "../products.css";

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (products.length === 0) {
    return <p>Aucun produit à afficher.</p>;
  }

  return (
    <>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              onShowDetails={() => setSelectedProduct(product)}
            />
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default ProductList;
