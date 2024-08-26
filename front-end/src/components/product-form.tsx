import { useState } from "react";
import { Form, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProductForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="success"
        onClick={handleShow}
        style={{
          backgroundColor: "#54881d",
        }}
      >
        Criar novo produto
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "'New Amsterdam', sans-serif",
              letterSpacing: "1px",
            }}
          >
            Novo produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome do produto</Form.Label>
              <Form.Control placeholder="Nome" />
            </Form.Group>

            <Stack direction="horizontal" gap={3}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Preço do produto</Form.Label>
                <Form.Control type="number" placeholder="00,00" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantidade em estoque</Form.Label>
                <Form.Control type="number" placeholder="00" />
              </Form.Group>
            </Stack>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" size="sm" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="success"
            size="sm"
            onClick={handleClose}
            style={{
              backgroundColor: "#54881d",
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductForm;
