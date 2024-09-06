import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">G1Commerce</Navbar.Brand>
        <Nav className="ms-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link href="#features">
            Wishlist{" "}
            <Badge bg="danger" text="dark">
              10
            </Badge>
          </Nav.Link>
          <Nav.Link href="#pricing">
            Cart{" "}
            <Badge bg="warning" text="dark">
              10
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
