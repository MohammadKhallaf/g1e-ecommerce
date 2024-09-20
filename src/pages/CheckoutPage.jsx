import { useMemo } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { useCart } from "../store/CartContext";

function CheckoutPage() {
  const { cart } = useCart();

  const sum = useMemo(() => {
    // useMemo -> return value
    return cart.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);
  }, [cart]);

  return (
    <Container>
      <Stack direction="vertical" gap={4} className="my-4">
        <h2>Checkout</h2>
        You have to pay {sum} EGP
        <Button>Confirm</Button>
      </Stack>
    </Container>
  );
}

export default CheckoutPage;
