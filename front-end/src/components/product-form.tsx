import { useState } from "react";
import { Form, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createProduct } from "../services/product-service";

function ProductForm({ loadProducts }: { loadProducts: () => void }) {
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
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    await createProduct({
      nome: data.nome,
      preco: data.preco,
      estoque: data.estoque ?? 0,
    });
    reset();
    handleClose();
    loadProducts();
  };

  console.log({ errors });
  console.log({ isValid });

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
        <Form onSubmit={handleSubmit(onSubmit)} validated={isValid}>
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
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-secondary"
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
              variant="success"
              size="sm"
              style={{
                backgroundColor: "#54881d",
              }}
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
