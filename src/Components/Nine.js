import React from "react";
import {Card, Button} from 'react-bootstrap';
import kenya from "./kenya.jpg";

const myText = (
  <div className="com9">
    <Card>
      <Card.Img className="col-9-img" variant="top" src={kenya} />
      <Card.Body>
        <Card.Title>Component 9</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  </div>
);

function nine () {
  return <div>{myText}</div>;
};

export default nine;