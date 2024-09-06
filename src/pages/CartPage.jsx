import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Stack } from "react-bootstrap";
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

function CartPage() {
  return (
    <Container className="pt-5">
      <ListGroup as="ol" className="gap-4">
        {productsList.map((item, idx, arr) => (
          <ListGroup.Item
            key={idx}
            as="li"
            className="d-flex gap-3 justify-content-between align-items-start"
          >
            <div className="">
              <Image
                src={item.img}
                className="square-img object-fit-cover border rounded-circle"
              />
            </div>
            <div className="fs-2 fw-bolder me-auto">{item.title}</div>

            <div className="mt-auto fs-4 fw-semibold p-1">{item.price}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default CartPage;
