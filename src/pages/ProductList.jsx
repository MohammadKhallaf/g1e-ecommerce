import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../store/ProductsContext";

function ProductList() {
  const { products } = useContext(ProductsContext);
  return (
    <Container className="pt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((item, idx, arr) => (
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
