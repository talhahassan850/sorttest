import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
//import { Button } from 'bootstrap';

import productService from './productService';
import Auth from './auth/Auth';
const NewProducts = (props) => {
    const [code, setCode] = React.useState(0);
    const [size, setSize] = React.useState("");
    const [price, setPrice] = React.useState(0);
    return ( 
      <Auth>
        <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="code"
          fullWidth
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <TextField
          label="price"
          fullWidth
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          label="size"
          fullWidth
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ code, price,size })
              .then((data) => {
                console.log(data);
                props.history.push("/product");
              })
              .catch((err) => {
                console.log(err);  
              });
          }}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
    </Auth>
     );
}
 
export default NewProducts;