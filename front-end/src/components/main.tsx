import React, { useState } from "react";
import { Container, Spinner, Stack } from "react-bootstrap";
import { useProductList } from "../hooks/use-product-list";
import Search from "./search";
import ProductForm from "./product-form";
import ProductsTable from "./products-table";
import { Product } from "../services/product-service";

const Main: React.FC = () => {
  const { products, loading, loadProducts } = useProductList();
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearchResults = (results: Product[]) => {
    setSearchResults(results);
  };

  const displayedProducts = searchResults.length > 0 ? searchResults : products;
  return (
    <>
      <Stack
        direction="horizontal"
        gap={5}
        className="d-flex justify-content-center m-4"
      >
        <Search onSearchResults={handleSearchResults} />
        <ProductForm loadProducts={loadProducts} />
      </Stack>
      <Container fluid className="d-flex justify-content-center">
        {loading ? (
          <div className="position-absolute top-50 start-50 translate-middle">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
          </div>
        ) : (
          <div className="table-responsive">
            <ProductsTable
              products={displayedProducts}
              loadProducts={loadProducts}
            />
          </div>
        )}
      </Container>
    </>
  );
};

export default Main;
