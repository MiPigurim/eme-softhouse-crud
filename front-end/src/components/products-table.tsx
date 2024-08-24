import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../services/productService';
import { Button, Table } from 'react-bootstrap';


const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <h1>Lista de Produtos</h1>
      <Button variant="success">Criar novo produto</Button>

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
                <Button title='Editar produto' variant="outline-dark" className='mx-2 my-1'><i className="bi bi-pencil-square"></i></Button>
                <Button title='Excluir produto' variant="outline-dark"><i className="bi bi-trash"></i></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
