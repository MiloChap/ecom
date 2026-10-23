import { useState } from "react";
import { useProducts } from "../../products/context/ProductsContext";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";
import Button from "../../../components/ui/Button";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import "../admin.css";

function AdminPage() {
  const { products, loading, addProduct, editProduct, removeProduct } =
    useProducts();
  const [showForm, setShowForm] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [error, setError] = useState("");

  const openForm = (product) => {
    setEditedProduct(product);
    setShowForm(true);
  };

  const closeForm = () => {
    setEditedProduct(null);
    setShowForm(false);
  };

  const handleSave = async (data) => {
    if (editedProduct) {
      await editProduct(editedProduct.id, data);
    } else {
      await addProduct(data);
    }
    closeForm();
  };

  const handleDelete = async (product) => {
    if (!window.confirm(`Supprimer « ${product.title} » ?`)) return;

    setError("");

    try {
      await removeProduct(product.id);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <Loader />;

  if (showForm) {
    return (
      <section>
        <h1>Administration</h1>
        <ProductForm
          product={editedProduct}
          onSave={handleSave}
          onCancel={closeForm}
        />
      </section>
    );
  }

  return (
    <section>
      <h1>Administration</h1>
      <div className="admin-toolbar">
        <Button type="button" onClick={() => openForm(null)}>
          Ajouter un produit
        </Button>
      </div>
      {error && <ErrorMessage message={error} />}
      <ProductTable
        products={products}
        onEdit={openForm}
        onDelete={handleDelete}
      />
    </section>
  );
}

export default AdminPage;
