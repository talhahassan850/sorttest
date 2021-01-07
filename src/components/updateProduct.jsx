import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
//import { Button } from 'bootstrap';

import productService from './productService';
import Admin from './auth/Admin';
const UpdateProducts = (props) => {
    const [code, setCode] = React.useState(0);
    const [size, setSize] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [image, setImage] = React.useState("");
    const id = props.match.params.id;
    React.useEffect(() => {
      productService.getSingleProduct(id).then((data) => {
        setCode(data.code);
        setSize(data.size)
        setPrice(data.price);
        setImage(data.image);
      });
    }, [])
    return ( 
      <Admin>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1 style={{textAlign:"center", paddingTop:"6rem"}}>Update Product</h1>
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
         <TextField
          label="image"
          fullWidth
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
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
              .updateProduct(id, { code, price, size, image })
              .then((data) => {
                console.log(data);
                props.history.push("/product");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Update
        </Button>
      </Grid>
    </Grid>
    </Admin>
     );
}
 
export default UpdateProducts;