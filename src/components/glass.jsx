import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView
} from "mdbreact";
import g5 from "./pics/g5.jpg"
import g8 from "./pics/g8.jpg"
import g7 from "./pics/g7.jpg"
import { Button} from "@material-ui/core";
class Sale extends Component {

  render() {
    
    return (
        <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol xl="4" md="4" className="mb-3">
          <MDBView hover zoom>
            <img src={g5} className="img-fluid z-depth-1" alt="" />
            </MDBView>
          </MDBCol>

          <MDBCol xl="5" md="4" className="mb-3 text-center">
          <MDBView hover zoom>
            <img src={g7} className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol xl="3" md="4" className="mb-3 text-md-right text-center">
          <MDBView hover zoom>
            <img src={g8} className="img-fluid z-depth-1" alt="" />
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <a href="/second">
      <div  style={{paddingLeft:"46%",paddingTop:"1rem"}}>
          <>
      <Button variant="dark"
      style={{backgroundColor:"black",color:"white",
     }}>Shop the Collection</Button>{' '}</>
      </div></a>
      </div>
      );
    }
  }

  export default Sale;