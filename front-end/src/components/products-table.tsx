import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../services/productService';
import { Table } from 'react-bootstrap';

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
    <Table striped bordered hover>
    
      <thead>
        <tr>
          <th>Índice</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade em estoque</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index+1}</td>
            <td>{product.nome}</td>
            <td>{product.preco}</td>
            <td>{product.estoque}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>  
  );
};

export default ProductList;
