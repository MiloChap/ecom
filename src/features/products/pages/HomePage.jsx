import { useEffect } from "react";
import { getProducts, getCategories } from "../../../api/fakestoreApi";

function HomePage() {
  useEffect(() => {
    getProducts().then((products) => console.log("produits", products));
    getCategories().then((categories) => console.log("categories", categories));
  }, []);

  return <h1>Tous les produits</h1>;
}

export default HomePage;
