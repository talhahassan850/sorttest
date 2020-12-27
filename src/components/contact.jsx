import { Button } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
const Contact = () => {
    return ( 
        <div style={{width:"30%",border:"2px solid black",height:"20rem"  ,      
        marginLeft:"30%", backgroundColor:"zure",
        borderRadius:"10px"}}>
           <Form>
           <Form.Group controlId="formBasicName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name..." />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email..." />
  </Form.Group>

  <Form.Group controlId="formBasicDetail">
    <Form.Label>Enter Detail</Form.Label>
    <textarea  rows="4" cols="45.5" placeholder="Enter detail ..." >
  </textarea>
  </Form.Group>
  
 
  <a href="/">
    <div> <>
  <Button style={{backgroundColor:"blue"
, marginLeft:"40%"}} type="submit">Submit</Button>{' '}
</>
</div></a>
</Form>
        </div>
     );
}
 
export default Contact;
