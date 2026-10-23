import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../utils/productSchema";
import { useProducts } from "../../products/context/ProductsContext";
import FormField from "../../../components/ui/FormField";
import Button from "../../../components/ui/Button";
import ErrorMessage from "../../../components/ErrorMessage";

const emptyProduct = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};

function ProductForm({ product, onSave, onCancel }) {
  const [error, setError] = useState("");
  const { categories } = useProducts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: product
      ? { ...product, price: String(product.price) }
      : emptyProduct,
  });

  const onSubmit = async (data) => {
    setError("");

    try {
      await onSave({ ...data, price: Number(data.price) });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>{product ? "Modifier le produit" : "Ajouter un produit"}</h2>

      <FormField
        label="Titre"
        register={register("title")}
        error={errors.title}
      />
      <FormField
        label="Prix (€)"
        register={register("price")}
        error={errors.price}
      />

      <div className="admin-form-field">
        <label htmlFor="category">Catégorie</label>
        <select id="category" {...register("category")}>
          <option value="">-- Choisir --</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <ErrorMessage message={errors.category.message} />}
      </div>

      <FormField
        label="URL de l'image"
        type="url"
        register={register("image")}
        error={errors.image}
      />

      <div className="admin-form-field">
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="4" {...register("description")} />
        {errors.description && (
          <ErrorMessage message={errors.description.message} />
        )}
      </div>

      <div className="admin-form-actions">
        <Button type="submit">Enregistrer</Button>
        <Button type="button" onClick={onCancel}>
          Annuler
        </Button>
      </div>

      {error && <ErrorMessage message={error} />}
    </form>
  );
}

export default ProductForm;
