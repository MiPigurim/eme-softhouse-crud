import { useEffect, useState } from "react";
import { fetchProducts, Product } from "../services/product-service";

export const useProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  return { products, loading, loadProducts };
};
