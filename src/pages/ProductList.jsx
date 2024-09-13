import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productsList } from "../list";

function ProductList() {
  return (
    <Container className="pt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {productsList.map((item, idx, arr) => (
          <Col key={idx}>
            <ProductCard
              id={item.id}
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
