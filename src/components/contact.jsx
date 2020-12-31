import React from "react";
import "../index.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const Contact = () => {
return (
  <div className="b1">
<MDBContainer >
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Write to us</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
         
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <a href="/">
        <div className="text-center">
          <MDBBtn outline color="secondary">
            Submit
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
        </a>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
};

export default Contact;