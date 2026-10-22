import { useProducts } from "../context/ProductsContext";
import ProductList from "../components/ProductList";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";

function HomePage() {
  const { products, loading, error } = useProducts();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Tous les produits</h1>
      <ProductList products={products} />
    </section>
  );
}

export default HomePage;
