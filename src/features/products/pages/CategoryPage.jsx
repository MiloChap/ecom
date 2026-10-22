import { useParams } from "react-router";
import { useProducts } from "../context/ProductsContext";
import ProductList from "../components/ProductList";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";

function CategoryPage() {
  const { name } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const latestProducts = products
    .filter((product) => product.category === name)
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <section>
      <h1>{name}</h1>
      <p>Les 5 derniers produits de la catégorie</p>
      <ProductList products={latestProducts} />
    </section>
  );
}

export default CategoryPage;
