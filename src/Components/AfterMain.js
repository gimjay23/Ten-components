import React from "react";
import Carousel from "react-bootstrap/Carousel";
import elijah from './elijah.jpg'
import frances from './frances.jpg'
import josh from './josh.jpg'


const myCarousel = (
  <div style={{marginTop:"20px"}}>
    <Carousel>
      <Carousel.Item>
        <img className="d-block" src={josh} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Random Pic 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={elijah}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Random Pic II</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={frances} alt="Third slide" />

        <Carousel.Caption>
          <h3>Random Pic III</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);
function afterMain() {
  return <div className="after-1">{myCarousel}</div>;
};

export default afterMain;
