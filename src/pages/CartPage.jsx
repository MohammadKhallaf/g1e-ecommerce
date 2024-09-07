import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useContext, useMemo, useState } from "react";
import { CartContext } from "../store/CartContext";

const radios = [
  { name: "Cash", value: "1" },
  { name: "Credit", value: "2" },
  { name: "Vodafone cash", value: "3" },
];

function CartPage() {
  const [radioValue, setRadioValue] = useState("1");

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const sum = useMemo(() => {
    return cart.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);
  }, [cart]);

  const renderList = useMemo(() => {
    return cart.map((item, idx, arr) => (
      <ListGroup.Item
        key={item.title}
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
        <Stack className="ms-aut0 flex-grow-0">
          <Button onClick={() => removeFromCart(item)}>Remove</Button>
          <div className="mt-auto fs-4 fw-semibold p-1">{item.price}EGP</div>
        </Stack>
      </ListGroup.Item>
    ));
  }, [cart]);

  return (
    <Container className="pt-5">
      <ListGroup as="ol" className="gap-4">
        {renderList}
      </ListGroup>
      <h4 className="mt-2">Details</h4>
      <p>{sum}EGP</p>
      <hr />
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-success" : "outline-danger"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </Container>
  );
}

export default CartPage;
