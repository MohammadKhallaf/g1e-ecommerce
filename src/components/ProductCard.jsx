import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext";
import { useWishlist } from "../store/WishlistContext";

function ProductCard({ _id, title, img, desc, price }) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // 1. wishlist -> product ??
  const checkIfInWishlist = () => {
    const idx = wishlist.findIndex((item) => {
      return item.title === title;
    });
    // result the idx -> idx>-1
    return idx > -1; // this means the product is in the wishlist
  };

  // one line condition

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
            variant="success"
            onClick={() => {
              const productDetails = { title, img, desc, price };
              addToCart(productDetails);
              toast.success("Product Added!");
            }}
          >
            Add to cart
          </Button>
          {checkIfInWishlist() ? (
            <Button
              variant="danger"
              onClick={() => {
                const productDetails = { title, img, desc, price };
                removeFromWishlist(productDetails);
              }}
            >
              Remove from wishlist
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                const productDetails = { title, img, desc, price };
                addToWishlist(productDetails);
              }}
            >
              Add to wishlist
            </Button>
          )}

          <Button variant="secondary" as={Link} to={`product/${_id}`}>
            Details
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
