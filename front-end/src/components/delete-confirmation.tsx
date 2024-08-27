import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteProduct, Product } from "../services/product-service";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

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
      <OverlayTrigger placement={"bottom"} overlay={<Tooltip>Excluir</Tooltip>}>
        <Button
          variant="outline-danger"
          onClick={handleShow}
          className="ms-2"
          size="sm"
          style={{
            borderWidth: "0px",
          }}
        >
          <i className="bi bi-trash text-dark"></i>
        </Button>
      </OverlayTrigger>
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
            Excluir produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Deseja excluir o produto {product.nome} ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-cancel"
            size="sm"
            onClick={() => {
              handleClose();
            }}
          >
            Cancelar
          </Button>
          <Button variant="danger" size="sm" onClick={handleDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmation;
