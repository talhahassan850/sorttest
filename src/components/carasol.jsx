import React from 'react'
import "../index.css";
import Carousel from 'react-bootstrap/Carousel'
import pic from "./pics/pic2.jpg";
import p2 from "./pics/Capture.PNG";
import p3 from "./pics/h16.jpg"

class Carasol extends React.Component{

    render(){
        return(
            <div style={{}}>
              <Carousel>
  <Carousel.Item interval={1000}>
    <img
      style={{width:"100%", height:"28rem"}}
      src={pic}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>World Of Fashion</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      style={{width:"100%", height:"28rem"}}
      src={p2}
      alt="Pic slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{width:"100%", height:"28rem"}}
      src={p3}  
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"black"}}><b>Basketball Shoes</b></h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
    
}

export default Carasol;
