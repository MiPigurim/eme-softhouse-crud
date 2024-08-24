import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsTable from './components/products-table';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className="App">
      <ProductsTable />

    </Container>
  );
}

export default App;
