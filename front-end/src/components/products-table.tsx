import React from "react";
import {
  deleteProduct,
  Product,
  updateProduct,
} from "../services/product-service";
import { Button, Table } from "react-bootstrap";

interface ProductsTableProps {
  products: Product[];
  loading: boolean;
  loadProducts: () => void;
}

const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  loading,
  loadProducts,
}) => {
  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  const handleEdit = async (id: string) => {
    const newName = prompt("Digite o novo nome do produto:");
    if (newName) {
      await updateProduct(id, { nome: newName });
      loadProducts();
    }
  };

  return (
    <>
      <div className="w-50">
        <Table hover size="sm">
          <thead>
            <tr className="text-center">
              <th
                style={{
                  backgroundColor: "#edb97d",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Índice
              </th>
              <th
                style={{
                  backgroundColor: "#edb97d",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Nome
              </th>
              <th
                style={{
                  backgroundColor: "#edb97d",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Preço
              </th>
              <th
                style={{
                  backgroundColor: "#edb97d",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Estoque
              </th>
              <th
                style={{
                  backgroundColor: "#edb97d",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            {products.map((product, index) => (
              <tr className="text-center" key={product.id}>
                <td>{index + 1}</td>
                <td>{product.nome}</td>
                <td>R${product.preco}</td>
                <td>{product.estoque}</td>
                <td>
                  <Button
                    title="Editar produto"
                    variant="link"
                    className="p-0 ms-2 me-3 my-1 hover-effect"
                    onClick={() => handleEdit(product.id)}
                  >
                    <i className="bi bi-pencil-square text-dark"></i>
                  </Button>
                  <Button
                    title="Excluir produto"
                    variant="link"
                    className="p-0 ms-3 me-2 my-1"
                    onClick={() => handleDelete(product.id)}
                  >
                    <i className="bi bi-trash text-dark"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductsTable;
