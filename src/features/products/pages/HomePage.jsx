import { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";

function HomePage() {
  const { products, loading, error } = useProducts();
  const [query, setQuery] = useState("");

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section>
      <h1>Tous les produits</h1>
      <SearchBar query={query} onSearch={setQuery} />
      <ProductList products={filteredProducts} />
    </section>
  );
}

export default HomePage;
