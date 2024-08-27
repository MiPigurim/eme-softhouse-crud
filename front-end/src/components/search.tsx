import { useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import { Product, searchProducts } from "../services/product-service";

function Search() {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const data = await searchProducts(query);
    setSearchResults(data);
    console.log(data);
    setLoading(false);
  };

  return (
    <div>
      <InputGroup>
        <Form.Control
          placeholder="Pesquisar produto 🔎"
          aria-label="Pesquisar produto"
          aria-describedby="basic-addon2"
          type="text"
          //value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {loading && <div>Pesquisando...</div>}
        {/* <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
        </ul> */}
      </InputGroup>
    </div>
  );
}

export default Search;
