import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import Navigation from "./components/navbar/navbar-component";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Navigation></Navigation>
      </Container>
    </div>
  );
}

export default App;
