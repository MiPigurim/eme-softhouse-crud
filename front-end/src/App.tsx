import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsTable from "./components/products-table";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import ProductForm from "./components/product-form";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#edb97d", // ba9a6b
          fontFamily: "'New Amsterdam', sans-serif",
          letterSpacing: "1px",
        }}
      >
        <h1 className="d-flex justify-content-center p-3 fs-4">
          Lista de Produtos
        </h1>
      </div>

      <div
        className="d-flex justify-content-end my-3"
        style={{ fontFamily: "'Raleway', sans-serif", marginRight: "26%" }}
      >
        <ProductForm />
      </div>

      <Container fluid className="d-flex justify-content-center w-100">
        <ProductsTable />
      </Container>
    </div>
  );
}

export default App;
