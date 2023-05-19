import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import ButtonConponent from "../button/button-component";


export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="nav_bar">
      <Container fluid className="justify-content-end">
      <Nav className="me-2">
            <Nav.Link href="#Contact-us">Contact us</Nav.Link>
          </Nav>
        <ButtonConponent text="Signup" color="warning"/>
      </Container>
    </Navbar>
  );
}
