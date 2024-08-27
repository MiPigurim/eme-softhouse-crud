import React from "react";
import { Product } from "../services/product-service";
import { Table } from "react-bootstrap";
import ProductForm from "./product-form";
import DeleteConfirmation from "./delete-confirmation";

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
  return (
    <>
      <div className="w-50">
        <Table hover size="sm">
          <thead>
            <tr className="text-center">
              <th
                style={{
                  backgroundColor: "var(--bs-primary)",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Índice
              </th>
              <th
                style={{
                  backgroundColor: "var(--bs-primary)",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Nome
              </th>
              <th
                style={{
                  backgroundColor: "var(--bs-primary)",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Preço
              </th>
              <th
                style={{
                  backgroundColor: "var(--bs-primary)",
                  fontFamily: "'New Amsterdam', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Estoque
              </th>
              <th
                style={{
                  backgroundColor: "var(--bs-primary)",
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
                  <ProductForm
                    loadProducts={loadProducts}
                    isEditing
                    product={product}
                  />
                  <DeleteConfirmation
                    product={product}
                    loadProducts={loadProducts}
                  />
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
