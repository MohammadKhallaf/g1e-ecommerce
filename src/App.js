import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomNavbar from "./components/CustomNavbar";
import "./App.css";
import ProductCard from "./components/ProductCard";

const productList = [
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
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Container className="pt-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <ProductCard />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
