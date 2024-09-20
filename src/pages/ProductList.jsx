import { Col, Container, Row, ToggleButton } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../store/ProductsContext";
import { useState } from "react";

function ProductList() {
  const [checked, setChecked] = useState(false);

  const { products } = useProducts();
  const sortedProducts = [...products].sort(
    (itemA, itemB) => +itemA.price - +itemB.price
  );

  const list = checked ? sortedProducts : products;
  return (
    <Container className="pt-5">
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        sort by price low to high
      </ToggleButton>
      <Row xs={1} md={2} lg={3} className="g-4">
        {list.map((item, idx, arr) => (
          <Col key={item._id}>
            <ProductCard
              _id={item._id}
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

export default ProductList;
