import Button from "../../../components/ui/Button";
import { formatPrice } from "../../../utils/formatPrice";

function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Titre</th>
            <th>Catégorie</th>
            <th>Prix</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="admin-table-image"
                />
              </td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{formatPrice(product.price)}</td>
              <td>
                <div className="admin-table-actions">
                  <Button type="button" onClick={() => onEdit(product)}>
                    Modifier
                  </Button>
                  <Button type="button" onClick={() => onDelete(product)}>
                    Supprimer
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
