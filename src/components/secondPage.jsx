import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView } from 'mdbreact';
import { MDBIcon } from 'mdbreact';
import h13 from "./pics/h13.jpg";
import h9 from "./pics/h9.jpg";
import h10 from "./pics/h10.jpg";
import h6 from "./pics/h6.jpg";
import h7 from "./pics/h7.jpg";
import h8 from "./pics/h8.jpg";
import h15 from "./pics/h15.jpg";
import a2 from "./pics/a2.jpg";
import a3 from "./pics/a3.jpg";
import a4 from "./pics/a4.jpg";
import a6 from "./pics/a6.jpg";
import c6 from "./pics/c6.jpg";
import c8 from "./pics/c8.jpg";

class Second extends Component {
  render() {
    return (
        <div>
            <a href="/">
            <div style={{display:"flex",            
        justifyContent: "center",
        alignItems: "center",
        width:"100%"}}>
                <div style={{color: "black",
        fontSize:"100px",
        fontFamily:"cursive"  ,
        textShadow: "2px 2px 5px blue,2px 2px 5px red ",
        fontVariant:"small-caps",}}>
                <p>The Style Hub</p>
                </div>
            </div></a>
     <div>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
          <MDBView hover zoom>
            <MDBCardImage cascade className="img-fluid" src={h6} 
             style={{width:"100%",height:"20rem"}}/> </MDBView>
            <MDBCardBody cascade>
              <MDBCardTitle>LightWeight Jogger</MDBCardTitle>
              <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>1000</b>rs. | '42' size </pre></MDBCardText>
               <p style={{color:"yellow"}}> <MDBIcon icon="star"/><MDBIcon icon="star" />
              <MDBIcon icon="star" /></p>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol >
          <MDBCard wide>
          <MDBView hover zoom>
            <MDBCardImage cascade className="img-fluid" src={h7} 
            style={{width:"100%",height:"20rem"}}/></MDBView>
            <MDBCardBody cascade>
            <MDBCardTitle>BasketBall Jogger</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>1200</b>rs. | '40' size </pre>
             <p style={{color:"yellow"}}> <MDBIcon icon="star"/><MDBIcon icon="star" />
              <MDBIcon icon="star" /></p></MDBCardText>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={h8}
            style={{width:"100%",height:"20rem"}} />
            <MDBCardBody cascade>
            <MDBCardTitle>Track Jogger</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>1800</b>rs. | '40' size </pre></MDBCardText>
               <p style={{color:"yellow"}}> <MDBIcon icon="star"/><MDBIcon icon="star" />
              <MDBIcon icon="star" /></p>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
        
      </MDBRow>
      </div>
      <div style={{paddingTop:"4rem"}}>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
          <MDBView hover zoom>
            <MDBCardImage cascade className="img-fluid" src={h9}
             style={{width:"100%",height:"18rem"}} />
             </MDBView>
            <MDBCardBody cascade>
            <MDBCardTitle>Nike Jogger</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}><del>2000</del></b>rs.| '42' size </pre></MDBCardText>
               <MDBCardText><pre><b 
              style={{fontSize:"1.5rem"}}>1500</b>rs. </pre></MDBCardText>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
          <MDBView hover zoom>
            <MDBCardImage cascade className="img-fluid" src={h10}
            style={{width:"100%",height:"18rem"}} />
            </MDBView>
            <MDBCardBody cascade>
              <MDBCardTitle>Ladies Jogger</MDBCardTitle>
              <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}><del>2600</del></b>rs.| '36' size </pre></MDBCardText>
               <MDBCardText><pre><b 
              style={{fontSize:"1.5rem"}}>2000</b>rs. </pre></MDBCardText>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
          <MDBView hover zoom>
            <MDBCardImage cascade className="img-fluid" src={h13} 
            style={{width:"100%",height:"18rem"}}/>
            </MDBView>
            <MDBCardBody cascade>
            <MDBCardTitle>Nike Jogger</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}><del>2000</del></b>rs.| '40' size </pre></MDBCardText>
               <MDBCardText><pre><b 
              style={{fontSize:"1.5rem"}}>1500</b>rs. </pre></MDBCardText>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={h15} 
            style={{width:"100%",height:"18rem"}}/>
            <MDBCardBody cascade>
            <MDBCardTitle>Track Jogger</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}><del>3000</del></b>rs.| '38' size </pre></MDBCardText>
               <MDBCardText><pre><b 
              style={{fontSize:"1.5rem"}}>2500</b>rs. </pre></MDBCardText>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
      </div>
      <div style={{paddingTop:"4rem"}}>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
          <MDBView hover zoom>
            <MDBCardImage cascade className="img-fluid" src={a2}
             style={{width:"100%",height:"18rem"}} /></MDBView>
            <MDBCardBody cascade>
            <MDBCardTitle>Hugo Boss Scent 500ml</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>1800</b>rs.</pre></MDBCardText>
              <p style={{color:"yellow"}}><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon far icon="star" /></p>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
          <MDBView hover zoom>
            <MDBCardImage cascade className="img-fluid" src={a3}
            style={{width:"100%",height:"18rem"}} />
            </MDBView>
            <MDBCardBody cascade>
              <MDBCardTitle>Tom ford Tuscan 200ml</MDBCardTitle>
              <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>1500</b>rs.</pre></MDBCardText>
              <p style={{color:"yellow"}}><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon far icon="star" /></p>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={a4} 
            style={{width:"100%",height:"18rem"}}/>
            <MDBCardBody cascade>
            <MDBCardTitle>Alhambra Perseus 100ml</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>2500</b>rs.</pre></MDBCardText>
              <p style={{color:"yellow"}}><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon far icon="star" /></p>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={a6} 
            style={{width:"100%",height:"18rem"}}/>
            <MDBCardBody cascade>
            <MDBCardTitle>Swiss Arabian Al 500ml</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>1000</b>rs.</pre></MDBCardText>
              <p style={{color:"yellow"}}><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon far icon="star" /></p>
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
      </div>

      <div style={{paddingTop:"4rem"}}>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
          <MDBView hover zoom>

            <MDBCardImage cascade className="img-fluid" src={c6}
             style={{width:"100%",height:"25rem"}} />
             </MDBView>
            <MDBCardBody cascade>
            <MDBCardTitle>Steel</MDBCardTitle>
            <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>1800</b>rs. | 20 'size'</pre></MDBCardText>
            
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
          <MDBView hover zoom>
            <MDBCardImage cascade className="img-fluid" src={c8}
            style={{width:"100%",height:"25rem"}} />
            </MDBView>
            <MDBCardBody cascade>
              <MDBCardTitle>Steel</MDBCardTitle>
              <MDBCardText><pre><b 
              style={{fontSize:"2rem",color:"slategray"}}>800</b>rs. | 20 'size'</pre></MDBCardText>
            
              <MDBBtn href="#">shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
       
        
        </MDBRow>
      </div>
      
      </div>
    )
  }
}

export default Second;