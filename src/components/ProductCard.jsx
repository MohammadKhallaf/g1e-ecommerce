import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { CartContext } from "../store/CartContext";

function ProductCard({ title, img, desc, price }) {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc} - {price}EGP
        </Card.Text>
        <Stack gap={2}>
          <Button
            variant="primary"
            onClick={() => {
              const productDetails = { title, img, desc, price };
              addToCart(productDetails);
            }}
          >
            Add to cart
          </Button>
          <Button variant="secondary">Details</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
