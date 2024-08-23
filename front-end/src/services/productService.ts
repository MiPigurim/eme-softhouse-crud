export interface Product {
  id: string;
  nome: string;
  preco: number;
  estoque: number;
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${process.env.REACT_APP_NEST_API_URL}/product`);
  const data: Product[] = await response.json();
  return data;
}

export async function createProduct(product: Omit<Product, 'id'>): Promise<Product> {
  const response = await fetch(`${process.env.REACT_APP_NEST_API_URL}/product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  const data: Product = await response.json();
  return data;
}
