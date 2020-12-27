import React from "react";
//import { Link } from "react-router-dom";
//import Button from '@material-ui/core/Button';
import "../index.css"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import userService from "./userService";

const UseStyles = makeStyles((theme) => ({
  c1: {
    color: "black",
    fontWeight:"bold",
    textDecoration:"none",
    paddingRight: "2rem",
  },
  c2:
  {
      fontSize: "46px",
      color:"black",
      fontWeight:"bold",
      textDecoration:"none",
      fontFamily:"cursive",
      paddingLeft: "1rem",
      paddingRight: "20rem",
      textShadow: "2px 2px 5px wheat,5px 5px 5px blue"

  }
}));
const menu = () => {
  const classes=UseStyles();
    return (
      <div>
      <AppBar position="static" style={{backgroundColor:"Azure"}}>
        <Toolbar>
        <Typography>
           <Link to="/" className={classes.c2}>The Style Hub</Link>
           </Typography>
          <Typography>
            <Link to="/" className={classes.c1}>Home</Link>
          </Typography>
          <Typography >
          <Link to="/product" className={classes.c1}>
            Products
          </Link>
        </Typography>
        
        <Typography >
          <Link to="/contactus" className={classes.c1}>
            Contact Us
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
        <Typography >
          <Link to="/login" className={classes.c1}>
            Login
          </Link>
        </Typography>
        <Typography >
          <Link to="/register" className={classes.c1}>
          Register
          </Link>
        </Typography>
        </>
        ) : (
          <Button variant="contained"
          color="primary"
          onClick={(e) => {
            userService.logout();
            window.location.reload();
          }}
            >logout  {userService.getLoggedInUser().name}
          </Button>
        )}
        </Toolbar>
      </AppBar>
      </div>
    );
}
 
export default menu;
/*variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name} */
/*
return ( 
        <div>
             <ul>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/">Home</Link>
        </li>

        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/product">Products</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/login">Login</Link>
        </li>
        <li style={{ display: "inline", padding: "5px", }}>
        <Button variant="success" >
  Sign Up
</Button>
        </li>
        
      </ul>
        </div>
     );
*/