import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// details of the product

import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { productsList } from "../list";
import { Container, Stack } from "react-bootstrap";
import { useState } from "react";

function ProductDetails() {
  // read the parameter from the url
  const params = useParams();
  const [comment, setComment] = useState("");

  // data - included -> data
  // product list -> get one item from the list
  // -> product id
  const productObj = productsList.find((item) => {
    return item.id === params.id;
  });

  if (!productObj) return <Container>No found</Container>;
  // product -> [{title:'someorf",date:new Date()}]
  return (
    <Container className="py-5">
      <Stack direction="horizontal" gap={3}>
        <ProductCard
          id={productObj.id}
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
          <Button
            variant="primary"
            onClick={() => {
              const commentArray = productObj.comment;
              if (commentArray) {
                productObj.comment.push({
                  title: comment,
                  date: new Date(),
                });
              } else {
                productObj.comment = [
                  {
                    title: comment,
                    date: new Date(),
                  },
                ];
              }
            }}
          >
            Add comment
          </Button>
          {productObj.comment.map((item) => {
            return <p>{item.title}</p>;
          })}
        </Stack>
      </Stack>
    </Container>
  );
}
export default ProductDetails;
