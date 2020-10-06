import React from "react";
import {Card, Button} from 'react-bootstrap';
import wendy from "./wendy.jpg";

const myText = (
  <div className="col-6">
    <Card style={{ width: "18rem" }}>
      <Card.Img className="col-6-img" variant="top" src={wendy} />
      <Card.Body>
        <Card.Title>Component 6</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  </div>
);

function six () {
  return <div>{myText}</div>;
};

export default six;