import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext";
import { useWishlist } from "../store/WishlistContext";
import { NavDropdown } from "react-bootstrap";
import { useAuth } from "../store/AuthContext";

function CustomNavbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

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
              {wishlist.length}
            </Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="cart">
            Cart{" "}
            <Badge bg="warning" text="dark">
              {cart.length}
            </Badge>
          </Nav.Link>
          <NavDropdown drop="start" title="Account" id="basic-nav-dropdown">
            {user?.username ? (
              <NavDropdown.Item>{user?.username}</NavDropdown.Item>
            ) : null}
            <NavDropdown.Item as={Link} to="cart">
              Cart{" "}
              <Badge bg="warning" text="dark">
                {cart.length}
              </Badge>
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="wishlist">
              {" "}
              Wishlist{" "}
              <Badge bg="danger" text="dark">
                {wishlist.length}
              </Badge>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {user ? (
              <NavDropdown.Item onClick={() => logout()}>
                Logout
              </NavDropdown.Item>
            ) : (
              <NavDropdown.Item as={Link} to="login">
                Login
              </NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
