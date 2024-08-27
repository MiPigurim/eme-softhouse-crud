import { InputGroup, Form } from "react-bootstrap";
import { Product, searchProducts } from "../services/product-service";

function Search({
  onSearchResults,
}: {
  onSearchResults: (results: Product[]) => void;
}) {
  const handleSearch = async (query: string) => {
    const data = await searchProducts(query);
    onSearchResults(data);
  };

  return (
    <div>
      <InputGroup>
        <Form.Control
          placeholder="Pesquisar produto 🔎"
          aria-label="Pesquisar produto"
          aria-describedby="basic-addon2"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}

export default Search;
