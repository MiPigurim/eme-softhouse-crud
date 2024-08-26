import { useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";

function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = async () => {
    setSearching(true);
    const response = await fetch(`/api/search?q=${search}`);
    const data = await response.json();
    setSearchResults(data);
    setSearching(false);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Pesquisar produto"
          aria-label="Pesquisar produto"
          aria-describedby="basic-addon2"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          variant="outline-secondary"
          id="button-addon2"
        >
          <i className="bi bi-search"></i>
        </Button>
        {searching && <div>Pesquisando...</div>}
        {/* <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
        </ul> */}
      </InputGroup>
    </div>
  );
}

export default Search;
