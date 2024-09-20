import { useMemo, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store/CartContext";

const radios = [
  { name: "Cash", value: "1" },
  { name: "Credit", value: "2" },
  { name: "Vodafone cash", value: "3" },
];

function CartPage() {
  const [radioValue, setRadioValue] = useState("1");
  const navigate = useNavigate();

  const { cart, addToCart, removeFromCart } = useCart();

  const sum = useMemo(() => {
    // useMemo -> return value
    return cart.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);
  }, [cart]);

  // useMemo -> value
  // useCallback -> function
  // same concept
  // return function

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
      <Stack gap={3}>
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

        <Button
          variant="success"
          onClick={() => {
            if (sum > 0) navigate("/checkout");
            else toast.error("Your cart is empty!");
          }}
        >
          Checkout
        </Button>
      </Stack>
    </Container>
  );
}

export default CartPage;
