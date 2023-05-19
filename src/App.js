import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";
import Navigation from "./components/navbar/navbar-component";
import ButtonConponent from "./components/button/button-component";
import ListItemComponent from "./components/list-item/list-item-component";

const songsList = [
  { id: 1, title: "Unavailable", artist: "Davido" },
  { id: 1, title: "Unavailable", artist: "Davido" },
  { id: 1, title: "Unavailable", artist: "Davido" },
  { id: 1, title: "Unavailable", artist: "Davido" },
  { id: 1, title: "Unavailable", artist: "Davido" },
];

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Navigation></Navigation>
        <Row className="">
          <Col sm={9} className="hero_section">
            <div className="p-5 rounded-lg m-5">
              <h1 className="display-3">Make your party fun!</h1>
              <p className="lead">
                Create your own custom playlist today
              </p>
              <ButtonConponent
                className="btn btn-lg"
                role="button"
                text="Create playlist"
                color="warning"
              />
            </div>
          </Col>
          <Col sm={3} className="sidebar_section">
            <ListGroup as="ol" className="trending_list">
              <h3>Trending songs</h3>
              {songsList.map((song, index) => (
                <ListItemComponent
                  key={index}
                  text={`${song.title} by ${song.artist}`}
                />
              ))}
              <ButtonConponent text="View more" color="warning" />
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
