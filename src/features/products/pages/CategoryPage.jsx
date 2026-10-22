import { useParams } from "react-router";

function CategoryPage() {
  const { name } = useParams();

  return <h1>Catégorie : {name}</h1>;
}

export default CategoryPage;
