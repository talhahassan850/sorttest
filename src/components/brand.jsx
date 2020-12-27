import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView
} from "mdbreact";
import p12 from "./pics/p12.jpg";
import p13 from "./pics/p13.jpg";
import p15 from "./pics/p15.jpg";
import p17 from "./pics/p17.PNG";
import p14 from "./pics/p14.jpg";
//import { Link } from "@material-ui/core";

class Brand extends Component {
  render() {
    return (
        <div>
            <div style={{paddingTop:"4rem", width:""
        , fontSize:"40px",paddingLeft:"42%"}}>
                Brands Of the week
            </div>
      <MDBContainer>
        <MDBRow>
        
          <MDBCol lg="4" md="12" className="mb-3">
          <MDBView hover zoom>
          <a href="/second" style={{color:"black"}}>
          <img src={p12} style={{width:"100%",height:"20rem"}} 
           alt="" /> 
                 
            <h3>ZARA Shirts</h3> 
            </a>
            </MDBView>
          </MDBCol>
          
          <MDBCol lg="4" md="6" className="mb-3">
          <MDBView hover zoom>
              <a href="/second" style={{color:"black"}}>
            <img src={p13} style={{width:"100%",height:"20rem"}} alt="" />
            <h3>Nike Shirts</h3>
            </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
          <MDBView hover zoom>
              <a href="/second" style={{color:"black"}}>
            <img src={p14} style={{width:"100%",height:"20rem"}} alt="" />
            <h3>Nike Shoes</h3>
            </a>
            </MDBView>
          </MDBCol>
      </MDBRow>
      <MDBRow>

        <MDBCol md="6" className="mb-3">
        <MDBView hover zoom>
            <a href="/second" style={{color:"black"}}>
          <img src={p17} style={{width:"100%",height:"24rem"}} alt="" />
          <h3>J. Shalwaar Kameez</h3>
          </a>
          </MDBView>
        </MDBCol>
        <MDBCol md="6" className="mb-3">
        <MDBView hover zoom>
            <a href="/second" style={{color:"black"}}>
          <img src={p15} style={{width:"100%",height:"24rem"}} alt="" / >
          <h3>Indure Shoes</h3>
          </a>
          </MDBView>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );
  }
}

export default Brand;