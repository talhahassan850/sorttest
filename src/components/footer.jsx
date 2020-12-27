import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text"
          style={{paddingTop:"2rem"}}>
            <h6 className="text-uppercase font-weight-bold">
              <strong>Company name</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              The Style Hub is revolutionary ecommerce platform tailored for fashion
              ,design and lifestyle brands to built beautiful online stores
              without the hassle of pluggins and addons.

            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text"
          style={{paddingTop:"2rem"}}>
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
                Perfumes
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Tie
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Shirts
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Belt
              </a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text"
          style={{paddingTop:"2rem"}}>
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            
            
            <p>
              <a href="#!" className="dark-grey-text">
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Help
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text"
          style={{paddingTop:"2rem"}}>
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Lahore
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> admin@admin.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 92354444
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 923333389
              </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
    
  );
}

export default Footer;