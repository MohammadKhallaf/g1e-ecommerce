// details of the product

import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { productsList } from "../list";
import { Container } from "react-bootstrap";

function ProductDetails() {
  // read the parameter from the url
  const params = useParams();

  // data - included -> data
  // product list -> get one item from the list
  // -> product id
  const productObj = productsList.find((item) => {
    return item.id === params.id;
  });

  if (!productObj) return <Container>No found</Container>;

  return (
    <ProductCard
      id={productObj.id}
      title={productObj.title}
      img={productObj.img}
      desc={productObj.desc}
      price={productObj.price}
    />
  );
}
export default ProductDetails;
