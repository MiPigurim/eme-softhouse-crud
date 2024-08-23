import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../services/productService';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log('Carregando produtos...');
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
      console.log(data);
    }

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.nome} - R$ {product.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
