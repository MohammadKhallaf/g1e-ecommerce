import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// details of the product

import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

import { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useProducts } from "../store/ProductsContext";

function ProductDetails() {
  // read the parameter from the url
  const params = useParams();
  const [comment, setComment] = useState("");
  const { products, updateProducts } = useProducts();

  // data - included -> data
  // product list -> get one item from the list
  // -> product id
  const productIdx = products.findIndex((item) => {
    return item._id === params.id;
  });
  console.log(params.id, products, productIdx);
  const productObj = products[productIdx];

  const addComment = () => {
    // new object -> comment
    // set state -> new array

    const commentArray = productObj.comment
      ? [
          ...productObj.comment,
          {
            title: comment,
            date: new Date(),
          },
        ]
      : [
          {
            title: comment,
            date: new Date(),
          },
        ];

    const newProductObject = { ...productObj, comment: commentArray };
    products[productIdx] = newProductObject;

    updateProducts([...products, newProductObject]);
  };

  if (!productObj) return <Container>No found</Container>;
  // product -> [{title:'someorf",date:new Date()}]
  return (
    <Container className="py-5">
      <Stack direction="horizontal" gap={3}>
        <ProductCard
          _id={productObj._id}
          title={productObj.title}
          img={productObj.img}
          desc={productObj.desc}
          price={productObj.price}
        />
        <Stack direction="vertical" gap={2}>
          <Form.Label htmlFor="comment">Comment</Form.Label>
          <Form.Control
            type="text"
            id="comment"
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />{" "}
          <Button variant="primary" onClick={addComment}>
            Add comment
          </Button>
          {productObj.comment?.map((item) => {
            return <p>{item.title}</p>;
          })}
        </Stack>
      </Stack>
    </Container>
  );
}
export default ProductDetails;
