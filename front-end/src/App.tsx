import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Main from "./components/main";
import Title from "./components/title";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Title />
      <Main />
    </div>
  );
}

export default App;
