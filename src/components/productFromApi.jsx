import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import productService from "./productService";
import { withRouter } from "react-router";
import userService from "./userService";
import "../App.css"
//import CardMedia from '@material-ui/core/CardMedia';
const SingleProduct = (props) => {
const { product, onDelete, history } = props;
console.log(props);
  return (
    <Grid item xs={4}>
      <br/>
      <h2>
      <div className="b1">

      <img src={product.image } className="a8"/>
      <div className="b2">
      <p style={{fontSize:"1.2rem", color:"darkblue",
     fontWeight:"bold"}}>{product.price}</p>{" "}
      <p style={{fontSize:"1.2rem", color:"darkblue"}}>{product.size}</p>{" "}
      <a href="/">
      <Button style={{background:"lightblue"}}>Add to cart</Button></a>
      </div>
      <br/>
      {userService.isAdmin() && (
          <>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          console.log("navigate to update");
          history.push("/product/update/" + product._id);
        }}
      >
        Edit
      </Button>{" "}


      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          productService
            .deleteProduct(product._id)
            .then((data) => {
              //console.log(data);
              onDelete();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
       
      >
        Delete
      </Button>
      </>
        )}</div>
    </h2>
    <hr/>
   
   
  </Grid>
  );
};

export default  withRouter (SingleProduct);