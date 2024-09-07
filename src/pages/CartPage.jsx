import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Stack } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

function CartPage() {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Container className="pt-5">
      <ListGroup as="ol" className="gap-4">
        {cart.map((item, idx, arr) => (
          <ListGroup.Item
            key={idx}
            as="li"
            className="d-flex gap-3 justify-content-between align-items-start"
          >
            <div className="">
              <Image
                src={item.img}
                className="square-img object-fit-cover border rounded-circle"
              />
            </div>
            <div className="fs-2 fw-bolder me-auto">
              {item.title}{" "}
              <span className="fs-4 fw-normal">x{item.quantity ?? 0}</span>
            </div>

            <div className="mt-auto fs-4 fw-semibold p-1">{item.price}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default CartPage;
