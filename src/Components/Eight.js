import React from "react";
import {Card, Button} from 'react-bootstrap';
import frances from "./frances.jpg";

const myText = (
  <div className="com8">
    <Card>
      <Card.Img className="col-8-img" variant="top" src={frances} />
      <Card.Body>
        <Card.Title>Component 8</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  </div>
);

function eight () {
  return <div>{myText}</div>;
};

export default eight;