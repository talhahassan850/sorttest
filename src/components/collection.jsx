import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
//import { Link } from "react-router-dom";
import { Figure } from 'react-bootstrap';
import p6 from "./pics/p6.PNG";
import p5 from "./pics/p5Capture.PNG";
//import { MDBView } from 'mdbreact';


const UseStyles = makeStyles((theme) => ({
    c1: {
        color: "black",
        fontSize:"60px",
        fontFamily:"italic"  ,
        fontVariant:"small-caps",
    },
    c2:
    {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:"3rem",
        width:"100%"
    },
    c4:
    {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:"2rem",
        paddingBottom:"2rem",
        width:"100%"
    },
    c3:
    {
        paddingLeft:"10rem",
        paddingRight:"4rem",
    width:"100%"
    }
    }));
const Collection = () => {
    const classes=UseStyles();
    return ( <div style={{width:"100%"}}>
        <div className={classes.c2}>
        
        <p className={classes.c1}>New Collection 2021 
        <br/><p className={classes.c1}
        style={{fontFamily:"cursive", paddingLeft:"28%"
        ,textShadow:" 0 0 3px, 0 0 5px #0000FF"}}>Shoes</p> </p>
        
     </div>

        <div className={classes.c3}>
            <div style={{float:"left", width:"50%"}}>
                <a href="/second">
        <Figure>
  <Figure.Image
  
  style={{height:"32rem",width:"28rem"}}
    alt="171x180"
    src={p6}
  />
  <Figure.Caption>
  <h3 style={{fontWeight:"bolder", color:"black"}}>RISE TO THE OCCASION </h3>
      <p>Elevate your look with our edit occasionwear styles</p>
     
      <>
      <Button variant="success">shop Now</Button>{' '}
      </>
  </Figure.Caption>
</Figure></a>
</div>
<div style={{float:"right",width:"50%"}}>
<a href="/second">
<Figure>
  <Figure.Image
  style={{height:"32rem", width:"28rem"}}
    
    height="18rem"
    alt="171x180"
    src={p5}
  />
  <Figure.Caption>
  <h3 style={{fontWeight:"bolder", color:"black"}}>HERE'S TO NEW</h3>
      <p>The latest & greatest arrivals of week</p>
        
      <>
      <Button variant="success">shop Now</Button>{' '}
      </>
  </Figure.Caption>
</Figure>
</a>
</div>
</div>
<div className={classes.c4}>
        <p className={classes.c1}
        style={{fontSize:"40px", fontWeight:"bolder"
        ,fontFamily:"cursive",
        textShadow: "0 0 3px, 0 0 5px #0000FF"}}>THE LATEST GLASSES YOU NEED NOW</p>
     </div>
        
        </div> );
}
 
export default Collection;

/*<div className={classes.c2}>
        <p className={classes.c1}>New Collection 2021 <br/>
        <p style={{fontFamily:"cursive", paddingLeft:"18%"}}>Shoes</p></p>
        
        </div> */