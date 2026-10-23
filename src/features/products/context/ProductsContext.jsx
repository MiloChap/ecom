import { createContext, useContext, useEffect, useState } from "react";
import {
  getProducts,
  getCategories,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../api/fakestoreApi";

const ProductsContext = createContext(null);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        const categoriesData = await getCategories();
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addProduct = async (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      rating: { rate: 0, count: 0 },
    };
    await createProduct(newProduct);
    setProducts([...products, newProduct]);
  };

  const editProduct = async (id, product) => {
    await updateProduct(id, product);
    setProducts(products.map((p) => (p.id === id ? { ...p, ...product } : p)));
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  const value = {
    products,
    categories,
    loading,
    error,
    addProduct,
    editProduct,
    removeProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;

export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}
