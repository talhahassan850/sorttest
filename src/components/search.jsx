import React from 'react';
import { Form } from 'react-bootstrap';
import "../index.css";
import { makeStyles } from '@material-ui/core';
//import { BorderColor } from '@material-ui/icons';
import { MDBIcon } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const UseStyles = makeStyles((theme) => ({
    c1: {

 
    },
    c2:
    {
        paddingTop:"2rem",
        paddingBottom:"2rem",
    }
    
  }));
const Search = () => {
    const classes=UseStyles();
    return (                  
            <div className={classes.c2}>
              <div style={{width:"40%", float:"left",
            paddingLeft:"20rem",}}>
            <Form >
    <Form.Group >
      
        <Form.Control as="select" id="disabledSelect" 
      style={{border:"2px solid black",borderRadius: "8px",}}>
        
        <option>search here...</option>
        
        <option>
      Perfumes
        </option>
        <option>Watches</option>
        <option>Shoe</option>
        <option>Shirts</option>
        
      </Form.Control>
              </Form.Group>
    </Form>
    </div>
    <div >
    <MDBIcon style={{paddingLeft:"5rem"}} icon="bell" size="2x"/>
    <MDBIcon style={{paddingLeft:"1.5rem"}}icon="envelope" size="2x" />
    <MDBIcon style={{paddingLeft:"1.5rem"}} fab icon="facebook-messenger" size="2x" />
    <MDBIcon style={{paddingLeft:"1.5rem"}} fab icon="facebook-square" size="2x"/>
    <MDBIcon  style={{paddingLeft:"1.5rem"}}fab icon="instagram" size="2x"/>
    <MDBIcon style={{paddingLeft:"1.5rem"}} fab icon="youtube" size="2x"/>
    <MDBIcon style={{paddingLeft:"1.5rem"}} icon="shopping-cart" size="2x"/>
    
    </div>
            </div>
            
    );
}
 
export default Search;