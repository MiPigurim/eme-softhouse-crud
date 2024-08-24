import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  fetchProducts,
  Product,
  updateProduct,
} from "../services/productService";
import { Button, Table } from "react-bootstrap";
import ProductForm from "./product-form";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

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
      <h1>Lista de Produtos</h1>
      <ProductForm />

      <Table striped responsive hover size="sm">
        <thead>
          <tr>
            <th>Índice</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade em estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.nome}</td>
              <td>{product.preco}</td>
              <td>{product.estoque}</td>
              <td>
                <Button
                  title="Editar produto"
                  variant="outline-dark"
                  className="mx-2 my-1"
                  onClick={() => handleEdit(product.id)}
                >
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button title="Excluir produto" variant="outline-dark">
                  <i
                    className="bi bi-trash"
                    onClick={() => handleDelete(product.id)}
                  ></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
