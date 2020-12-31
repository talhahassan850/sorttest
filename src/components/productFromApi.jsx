import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import productService from "./productService";
import { withRouter } from "react-router";
import userService from "./userService";
//import CardMedia from '@material-ui/core/CardMedia';
const SingleProduct = (props) => {
const { product, onDelete, history } = props;
console.log(props);
  return (
    <Grid item xs={4}>
      
      <h2>{" "}
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
        )}
    </h2>
    <p>Code={product.code}</p>
    <p>Price={product.price}</p>
    <p>Size={product.size}</p>
    <hr />
  </Grid>
  );
};

export default  withRouter (SingleProduct);