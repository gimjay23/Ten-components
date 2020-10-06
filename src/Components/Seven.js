import React from "react";
import {Card, Button} from 'react-bootstrap';
import souls from "./souls.jpg";

const myText = (
  <div className="com7">
    <Card>
      <Card.Img className="col-7-img" variant="top" src={souls} />
      <Card.Body>
        <Card.Title>Component 7</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  </div>
);

function seven () {
  return <div>{myText}</div>;
};

export default seven;