import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";

function CustomNavbar() {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          G1Commerce
        </Navbar.Brand>
        <Nav className="ms-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link as={Link} to="wishlist">
            Wishlist{" "}
            <Badge bg="danger" text="dark">
              10
            </Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="cart">
            Cart{" "}
            <Badge bg="warning" text="dark">
              {cart.length}
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
