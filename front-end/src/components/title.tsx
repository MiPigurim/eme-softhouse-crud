const Title: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--bs-primary)",
        fontFamily: "'New Amsterdam', sans-serif",
        letterSpacing: "1px",
      }}
    >
      <h1 className="d-flex justify-content-center p-3 fs-4">
        Lista de Produtos
      </h1>
    </div>
  );
};

export default Title;
