import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsTable from "./components/products-table";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#edb97d",
          fontFamily: "'New Amsterdam', sans-serif",
        }}
      >
        <h1 className="d-flex justify-content-center p-3 fs-4">
          Lista de Produtos
        </h1>
      </div>

      <Container fluid className="App">
        <ProductsTable />
      </Container>
    </>
  );
}

export default App;
