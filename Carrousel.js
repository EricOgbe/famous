import React from "react";
import '../App.css'
import { Carousel } from "react-bootstrap"

function Carrousel() {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1618537993538-0690d0976a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhpcGhvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="slide">Famous Tears</h1>
      <p className="slide-sub">"He will wipe out every tear from their eyes,<br/>and death will be no more".</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1611223726890-af5181f7769d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHJhcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className="slide">Famous Tears</h1>
      <p className="slide-sub">"He will wipe out every tear from their eyes,<br/>and death will be no more".</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1562563841-3b2d1d16cd5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE2fHxyYXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className="slide">Famous Tears</h1>
      <p className="slide-sub">"He will wipe out every tear from their eyes,<br/>and death will be no more".</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Carrousel;