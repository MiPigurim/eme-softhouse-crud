import { useEffect, useState } from "react";
import { Form, OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  createProduct,
  Product,
  updateProduct,
} from "../services/product-service";

function ProductForm({
  loadProducts,
  isEditing,
  product,
}: {
  loadProducts: () => void;
  isEditing?: boolean;
  product?: Product;
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const schema = yup
    .object({
      nome: yup.string().required("Informe o nome do produto"),
      preco: yup
        .number()
        .typeError("Informe o preço do produto")
        .positive()
        .required("Informe o preço do produto"),
      estoque: yup
        .number()
        .integer("O estoque deve ser um valor inteiro")
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: product?.nome,
      preco: product?.preco,
      estoque: product?.estoque,
    },
  });

  useEffect(() => {
    reset({
      nome: product?.nome,
      preco: product?.preco,
      estoque: product?.estoque,
    });
  }, [product, reset]);

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    if (isEditing && product) {
      await updateProduct(product.id, {
        nome: data.nome,
        preco: data.preco,
        estoque: data.estoque ?? 0,
      });
    } else {
      await createProduct({
        nome: data.nome,
        preco: data.preco,
        estoque: data.estoque ?? 0,
      });
    }
    reset();
    handleClose();
    loadProducts();
  };

  return (
    <>
      <OverlayTrigger
        placement={"bottom"}
        overlay={isEditing ? <Tooltip>Editar</Tooltip> : <></>}
      >
        <Button
          size="sm"
          className="me-2 "
          variant={isEditing ? "outline-secondary" : "secondary"}
          onClick={handleShow}
          style={{
            borderWidth: isEditing ? "0px" : "1px",
            color: "#fff",
          }}
        >
          {isEditing ? (
            <i className="bi bi-pencil-square text-dark"></i>
          ) : (
            "Adicionar novo produto"
          )}
        </Button>
      </OverlayTrigger>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        <Form onSubmit={handleSubmit(onSubmit)} validated={isValid}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontFamily: "'New Amsterdam', sans-serif",
                letterSpacing: "1px",
              }}
            >
              {isEditing ? "Editar" : "Novo"} produto
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome do produto</Form.Label>
              <Form.Control
                placeholder="nome"
                {...register("nome")}
                isInvalid={!!errors?.nome}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.nome?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Stack direction="horizontal" gap={3}>
              <Form.Group className="mb-3" controlId="preco">
                <Form.Label>Preço do produto</Form.Label>
                <Form.Control
                  type="float"
                  placeholder="00.00"
                  {...register("preco")}
                  isInvalid={!!errors?.preco}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.preco?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="estoque">
                <Form.Label>Quantidade em estoque</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="00"
                  {...register("estoque")}
                  isInvalid={!!errors?.estoque}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.estoque?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-cancel"
              size="sm"
              onClick={() => {
                reset();
                handleClose();
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="secondary"
              size="sm"
              style={{ color: "#fff" }}
            >
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ProductForm;
