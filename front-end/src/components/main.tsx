import React from "react";
import { Container, Stack } from "react-bootstrap";
import { useProductList } from "../hooks/use-product-list";
import Search from "./search";
import ProductForm from "./product-form";
import ProductsTable from "./products-table";

const Main: React.FC = () => {
  const { products, loading, loadProducts } = useProductList();
  return (
    <>
      <Stack
        direction="horizontal"
        gap={5}
        className="d-flex justify-content-center m-4"
      >
        <Search />

        <ProductForm loadProducts={loadProducts} />
      </Stack>
      <Container fluid className="d-flex justify-content-center w-100">
        <ProductsTable
          products={products}
          loading={loading}
          loadProducts={loadProducts}
        />
      </Container>
    </>
  );
};

export default Main;
