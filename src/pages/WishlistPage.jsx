import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useWishlist } from "../store/WishlistContext";

function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <Container className="pt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {wishlist.map((item, idx, arr) => (
          <Col key={idx}>
            <ProductCard
              title={item.title}
              img={item.img}
              price={item.price}
              desc={item.desc}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WishlistPage;
