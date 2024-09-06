import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const productsList = [
  {
    title: "AC",
    price: 500,
    desc: "lorem",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Fan",
    price: 50,
    desc: "lorem",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Mobile",
    price: 5000,
    desc: "lorem",
    img: "https://placehold.co/600x400",
  },
];

function ProductList() {
  return (
    <Container className="pt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {productsList.map((item, idx, arr) => (
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

export default ProductList;
