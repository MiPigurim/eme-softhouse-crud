import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteProduct, Product } from "../services/product-service";

function DeleteConfirmation({
  product,
  loadProducts,
}: {
  product: Product;
  loadProducts: () => void;
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await deleteProduct(product.id);
    handleClose();
    loadProducts();
  };

  return (
    <>
      <Button
        variant="outline-danger"
        onClick={handleShow}
        className="ms-2"
        size="sm"
      >
        <i className="bi bi-trash text-dark"></i>
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
            Deletar produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Deseja deletar o produto {product.nome} ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => {
              handleClose();
            }}
          >
            Cancelar
          </Button>
          <Button variant="danger" size="sm" onClick={handleDelete}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmation;
