import './Gridview.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import {Col,Row,Container,Image,Form,Navbar, Nav} from 'react-bootstrap';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Giv() {



  const [products, setProducts] = useState(0);
  const [saved, setSaved] = useState(0);
  const [total, setTotal] = useState(0);

  // Function to handle quantity changes for both tables
 

    // Calculate total products, savings, and total price
   
    // Update global products, saved, and total with both tables
  
   
  

  return (
    <>

 <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mysivakasicrackers.com/images/65ca6db6d389d.jpg"
            alt="First slide"
            style={{
              height: '500px', // Set a consistent height
              objectFit: 'cover', // Ensure image fits without distortion
              objectPosition: 'center' // Center the image
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mysivakasicrackers.com/images/65ca6dc78eaaa.jpg"
            alt="Second slide"
            style={{
              height: '500px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mysivakasicrackers.com/images/65ca6dd7c4eb2.jpg"
            alt="Third slide"
            style={{
              height: '500px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mysivakasicrackers.com/images/65ca6debcda54.jpg"
            alt="Fourth slide"
            style={{
              height: '500px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mysivakasicrackers.com/images/65ca6dfb86616.jpg"
            alt="Fifth slide"
            style={{
              height: '500px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mysivakasicrackers.com/images/65ca6e0d724ee.jpg"
            alt="Sixth slide"
            style={{
              height: '500px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>



<div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "100px 40px", height: "80px" }}>
  
  {/* First Section - Discount Crackers */}
  <div style={{ margin: "0 20px", textAlign: "center", minWidth: "200px" }}>
    <div style={{ border: "2px solid red", borderRadius: "50%", padding: "15px", display: "inline-block" }}>
      <i className="fa fa-tag" aria-hidden="true" style={{ color: "red", fontSize: "30px" }}></i>
    </div>
    <h2 style={{ color: "red" }}>Discount Crackers</h2>
    <p style={{ fontSize: "15px" }}>Highest Discount at low price</p>
  </div>

  {/* Divider Line */}
  <div style={{ borderLeft: "1px solid black", height: "50px", margin: "0 20px" }}></div>

  {/* Second Section - Wholesale Price */}
  <div style={{ margin: "0 20px", textAlign: "center", minWidth: "200px" }}>
    <div style={{ border: "2px solid red", borderRadius: "50%", padding: "15px", display: "inline-block" }}>
      <i className="fa fa-diamond" aria-hidden="true" style={{ color: "red", fontSize: "30px" }}></i>
    </div>
    <h2 style={{ color: "red" }}>Wholesale Price</h2>
    <p style={{ fontSize: "15px" }}>Our crackers are safe to use.</p>
  </div>

  {/* Divider Line */}
  <div style={{ borderLeft: "1px solid black", height: "50px", margin: "0 20px" }}></div>

  {/* Third Section - Best Quality */}
  <div style={{ margin: "0 20px", textAlign: "center", minWidth: "200px" }}>
    <div style={{ border: "2px solid red", borderRadius: "50%", padding: "15px", display: "inline-block" }}>
      <i className="fa fa-magic" aria-hidden="true" style={{ color: "red", fontSize: "30px" }}></i>
    </div>
    <h2 style={{ color: "red" }}>Best Quality</h2>
    <p style={{ fontSize: "15px" }}>100% superior quality crackers</p>
  </div>

</div>


<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Navbar style={{ padding: '1px', backgroundColor: 'white' }}>
    <Container>
      <Nav className="me-auto">
        <div
          style={{
            color: 'white',
            backgroundColor: 'green',
            fontFamily: 'Franklin Gothic Medium',
            fontSize: '15px',
            padding: '5px 10px',
            margin: '0 10px',
            textDecoration: 'none',
            display: 'inline-block',
            borderRadius: '4px',
            transition: 'background-color 0.3s, color 0.3s',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = 'white';
            e.target.style.backgroundColor = 'green';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white';
            e.target.style.backgroundColor = 'green';
          }}
        >
          <i className="fa fa-list" aria-hidden="true"></i> &nbsp;
          Grid View
        </div>
        <div
          style={{
            color: 'white',
            backgroundColor: '#686D76',
            fontFamily: 'Franklin Gothic Medium',
            fontSize: '15px',
            padding: '5px 10px',
            margin: '0 10px',
            textDecoration: 'none',
            display: 'inline-block',
            borderRadius: '4px',
            transition: 'background-color 0.3s, color 0.3s',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = 'white';
            e.target.style.backgroundColor = '#705C53';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white';
            e.target.style.backgroundColor = '#705C53';
          }}
        >
          <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
          List View
        </div>
      </Nav>
    </Container>
  </Navbar>
</div>




    <Container fluid>
  <div style={{ display: 'flex', justifyContent: 'space-evenly', animation: 'blink 1s infinite',backgroundColor:'#B8001F' }}>
        <p style={{ color: 'yellow' }}>Products</p>
        <input type="number" value={products} readOnly />
        <p style={{ color: 'yellow' }}>You Saved</p>
        <input type="number" value={saved} readOnly />
        <p style={{ color: 'yellow' }}>Overall Total</p>
        <input type="number" value={total} readOnly />
      </div>
</Container>    
    <Container fluid>
   
      <Row id="sc">
        <Col id="sc1">
        <h6><b>SOUND CRACKERS ( 80 % Discount )</b></h6>
        </Col>
      </Row>
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaLo8PtVXs9Xez6ATBaPqyCTiYpgLnkdY1A&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/62ccf6703b53c.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>2.75" Kuruvi Bird Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 35 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>7 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sg4YoqcitHk6lr_aKeggsi7zNGecdxhbxQ&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/62ccf784971a2.jpg'height={80} />
        </Col>
        <Col id="sc23"xs="auto">
        <p>4” Laxmi/Bird 10/ Joker Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>70 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>14 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ240aBnqYLmtiSUOOTGtI4RnxTzzSvyUx6zw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f696703d.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Deluxe Laxmi Crackers (12 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
                          
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbItoQ5lwXVbVKWhfzSBueh8I4Hk6ux9QGQ&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f2815cf6.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Super Deluxe Laxmi Crackers (16 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6-pslSWnQ50lyk7ubKFPjZ5kdCrnuLPTYIp8bI-0sgtmqSiviIlGg070GtmLxjDWYrg&usqp=CAU'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689296847f27.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>5" Mega Laxmi Deluxe BEAST Crackers(20 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>175 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>35 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zGcSW1rpgcfE-msC3vKPepChwj_nifTe1w&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689282702345.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Gold Laxmi Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
      
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='data:image/png;base64,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'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/660b8e191e929.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>6" Glant Deluxe Lakshmi</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>250 / 1 Pkt</del></p>
        <p><b> &#8377;</b> 50 / 1 Pkt</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSja9UPxHN49DuiGrRvvBlX-jbc50fo25cBQw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6684e17ad7f2f.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>3 Sound Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 200 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>40 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
    </Container>

 <Container fluid>
      <Row id="sc">
        <Col id="sc1">
        <h6><b>OLA VEDI / Sky Lantern /Musical Crackers ( 80 % Discount )
</b></h6>
        </Col>
      </Row>
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/64b769bcba633.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/65d5fcc6ea16b.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>2.75" Kuruvi Bird Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 35 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>7 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/63ea078be743a.jpg' height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/63f4ff1a0497d.jpg'height={80} />
        </Col>
        <Col id="sc23"xs="auto">
        <p>4” Laxmi/Bird 10/ Joker Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>70 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>14 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ240aBnqYLmtiSUOOTGtI4RnxTzzSvyUx6zw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f696703d.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Deluxe Laxmi Crackers (12 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
                          
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbItoQ5lwXVbVKWhfzSBueh8I4Hk6ux9QGQ&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f2815cf6.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Super Deluxe Laxmi Crackers (16 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6-pslSWnQ50lyk7ubKFPjZ5kdCrnuLPTYIp8bI-0sgtmqSiviIlGg070GtmLxjDWYrg&usqp=CAU'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689296847f27.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>5" Mega Laxmi Deluxe BEAST Crackers(20 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>175 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>35 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zGcSW1rpgcfE-msC3vKPepChwj_nifTe1w&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689282702345.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Gold Laxmi Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
      
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='data:image/png;base64,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'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/660b8e191e929.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>6" Glant Deluxe Lakshmi</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>250 / 1 Pkt</del></p>
        <p><b> &#8377;</b> 50 / 1 Pkt</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSja9UPxHN49DuiGrRvvBlX-jbc50fo25cBQw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6684e17ad7f2f.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>3 Sound Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 200 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>40 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
    </Container>


<Container fluid>
      <Row id="sc">
        <Col id="sc1">
        <h6><b>GROUND SPINNERS ( 80 % Discount )
</b></h6>
        </Col>
      </Row>
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/611fc8b0bc0b3.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/618b3182b197c.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>2.75" Kuruvi Bird Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 35 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>7 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/64b78de44e5ec.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/663dc7b406c6e.jpg'height={80} />
        </Col>
        <Col id="sc23"xs="auto">
        <p>4” Laxmi/Bird 10/ Joker Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>70 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>14 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/66b71b1980e8c.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66b71f3835fed.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Deluxe Laxmi Crackers (12 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
                          
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbItoQ5lwXVbVKWhfzSBueh8I4Hk6ux9QGQ&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f2815cf6.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Super Deluxe Laxmi Crackers (16 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6-pslSWnQ50lyk7ubKFPjZ5kdCrnuLPTYIp8bI-0sgtmqSiviIlGg070GtmLxjDWYrg&usqp=CAU'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689296847f27.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>5" Mega Laxmi Deluxe BEAST Crackers(20 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>175 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>35 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zGcSW1rpgcfE-msC3vKPepChwj_nifTe1w&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689282702345.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Gold Laxmi Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
      
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/AAD/////fX3/9vb/eHj/7u7/jIz/29v/+/v/m5v/zs7/q6v/6Oj/pKT/39//bGz/yMj/4+P/t7f/LCz/RET/Gxv/Jib/n5//7e3/1tb/T0//Z2f/EhL/PDz/sLD/mJj/MzP/hob/kpL/ysr/UlL/wcH/Xl7/SEj/rq7/ICD/g4P/cnL/W1v/KCj/OTn/Fhag0GegAAAHYklEQVR4nO2dbVeyQBBAWdFAQhJ8F1Qy0bTS///vHvCpFGWUal5i8373MPes4g7szBiqBPZ/zN9EFlCZ2JVxTW7oO7OX8HWx6k7ilLdeRmQIEvV6/XiyWoS1+dTx/MaPDK2kudxJ2lxnWwuci5IXDN2kuZKOvxT92tT6hqHbCvvSoZdnMR990dCcjUV/a19nUvO/YtiKK+aX8TYrbWiNpYP9JhOnlGFj8MvvnpeYDa8bjkLpKH/Ew9kd59Qwqeo39INxcNnwOZaO8Mf07y8ZDnrS8SHQa8GGLR0EDWM3gwzv9RBM9+aDYsNgLR0ZGlHLLjB0JtJxIbJOzg2H1f4fPGVlnRneSceETGieGAbSEaEzyBvaFcoFSxK5OcNH6XgICI8NR/r8URyIpgdD+0E6GhKW5qdh0pEOhoR+8GFo1qRjIaJuvhu2t9KhENFJ/hvaTelIyJjZe0NvIR0IGa/e3jCRjoOQJDM0dduRHjM3U0O3Kx0GIV03NbSkoyDFSw2n0kGQEijDrksHQUrNNkydHl6cE5uGKR0DMTfD6tPQ3tDV3tBPHfXG0t5wZOi9aTOMp9RRb9p/wPBJOgRigtRRb/6Coc5PaTICQ7/Xannub4aV5y8YPkuHQMwgddSb5s2w8uhvODP0fXn4n7ub4XeI4u7idbkMHzLqX+Al+0C4DJev4y7W4QkKw23LGVme7/tuRuMLDPefSD/pWSMHqWSAwvDhWjVZORo4hyUpDDfl6gKvYc5RoqEwnKMIKruFEg2BYVRcfiRniPNdOCJ3jFzecGOgn8TYta5Hz2hYuxl+nfX99egrbvisveFUd8Oe9t9S/e80+hui/ePj7EUoDJF2bUhnJgkMjTscQ5wvaWqIf04fJ3sykZJ8CsPQxTBEWkISwygcTJN228kYWQV4H/gpwAMBrCUkMSxH1OutO53t9rR8/h20x7hyhu/ExV1XGmiND8QN52ahIV5ZubRhYTcStOdsGdKGwH/nFK8eUtiwW/wrHCLWQwobPhYvIWbvA1lD4EY6xCyQkDWsFS9hgtmfQ9Qw8goFTdQaF1FDYAkd1D5joobAlhS3TEnSELiRIh/LFjTcnTce24PcY0XQcFacKHvIl5EzjIF2ldjxyBnOipOKEXZ7BzFDIKnAb7IiZgi8Ch+hl11LGXaBJUR/Iy1mCOSFI/y2vkKGk+KkgqJDh5DhpngJLYIOHTKG6+KWvzbFSVAZQ2AJfYreqTKGQFJBUjYgYgjkhTS9D0QMi/drRA06JAyBpMKmaTgmYBgDvdOJincEDAfAEhI1oeY3BB5zq4Cozz2/IXCOwV4SXY/dEEoqAqr2ouyGQF5okvWm5DbsAk9nyJaQ3RDICxt0UTAbdoD/wjZde1Fmw0fgV7ihuySzIbAjpWzyy2sI5IU2ZZ9mXkNgCbEf5OdgNYQOnpKGwGkYAyf6aPs4cRoCSQVxt3RGQ2g749J2S2c0bAJLiP8gPwef4QrIC33iFrh8hlDdJfES8hmugF+hRz1Bi80QWsIB9YW5DLdAUuG9Ul+ZyxCqwaDvysFkGAFnZ3yq508HmAyhJWRo4cRkCCQVDYaZBTyGTWAJObrhsRh2gKTC5ujoz2IIJRUsDQ05DKGkQrFMjOYwhJIKnp6UDIZjaJ40+XZmD4MhtCNNeOaE0RtCeaHNNG+xZhA+bt4DbmeY5oRRVDrnmAA3UtyiiguQG0JLyDbqjdqwB+SFlO9i8lAbPgJL6LDNzKQ2BHakSJ3KykBsCC0h6buYPLSGPaj3ANuvkNpwDuxIfcJrnkJqCJSIEr9OO4HUEKi1V0O6S55DabgFjj/xDh+u4XcV/OQRWEKfdXLthq7LbpwUCzLPjybsI1wDbqQW70RJOsMOtITMQ0HpDB+gJaR+nXYCmeEOWkLy12knkBmOAUHyN6KnsBtiNbgqDZlhtHhsBUny5OQJ3mguB3On/eQA/Wcj3AyrT9PQe6RzNklH/2lIN8Oq8xcM9Z8OqP+ER/0N9Z+0qv+0XP0N9Z9arf/kcdaXCAJYhikdAjG+9oau9obmzbDymAZVT5FfwjY1ZH4XxEzdNpTeyUWgDM7TOwJYqeGQ5zSyDF03NUSaq/Q7mZupodI5B26rzNBlOnEtwMLbG/K/tWQjaw2XGTq85z/4iNMv6d7QZjwMyUrdfDdU7Vg6FhL6+0lLe0NF1mlLlKV9MLRYD9MxsX5SB0Puo1gs1NWxoRlLx4NOZ5gzZCoG5ORjoNuHoXbf08+uW5+Gmu3dlu6ZIUXHdzniwxnzg6FKYum40Ogfnf08MmQreiQnNzj72FBN9VDMT3fPGeqxirv86PO8oQ6/xf7JZNMTQ+VU/bnUuK0uGyqfqwSZhoezaXVnhsoc7KTD/DbR4LwS6dxQKW9J1D2cmGhZVBpfZKjUPUPzH2yi8X2hS7GhGjYrto7RsgmU5AKG6R1n+oI5LJOWdX0KFP5fMEyzDadVjc34quUA3dKuGCplu9Y05Gmy8l164bPlAkVkJQz3lmYjad5tar+Pzd0sGZoX7TL+AWAAYLnsv/5FAAAAAElFTkSuQmCC'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/660b8e191e929.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>6" Glant Deluxe Lakshmi</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>250 / 1 Pkt</del></p>
        <p><b> &#8377;</b> 50 / 1 Pkt</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSja9UPxHN49DuiGrRvvBlX-jbc50fo25cBQw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6684e17ad7f2f.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>3 Sound Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 200 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>40 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
    </Container>

 <Container fluid>
      <Row id="sc">
        <Col id="sc1">
        <h6><b>FLOWER POTS ( 80 % Discount )
</b></h6>
        </Col>
      </Row>
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/611fc933a5aa8.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6125e5e2ae5e4.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>2.75" Kuruvi Bird Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 35 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>7 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/62ff5dcaa0f53.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/63918de95d857.jpg'height={80} />
        </Col>
        <Col id="sc23"xs="auto">
        <p>4” Laxmi/Bird 10/ Joker Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>70 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>14 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ240aBnqYLmtiSUOOTGtI4RnxTzzSvyUx6zw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/618b3182b197c.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Deluxe Laxmi Crackers (12 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
                          
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbItoQ5lwXVbVKWhfzSBueh8I4Hk6ux9QGQ&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f2815cf6.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Super Deluxe Laxmi Crackers (16 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6-pslSWnQ50lyk7ubKFPjZ5kdCrnuLPTYIp8bI-0sgtmqSiviIlGg070GtmLxjDWYrg&usqp=CAU'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689296847f27.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>5" Mega Laxmi Deluxe BEAST Crackers(20 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>175 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>35 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zGcSW1rpgcfE-msC3vKPepChwj_nifTe1w&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689282702345.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Gold Laxmi Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
      
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='data:image/png;base64,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'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/660b8e191e929.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>6" Glant Deluxe Lakshmi</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>250 / 1 Pkt</del></p>
        <p><b> &#8377;</b> 50 / 1 Pkt</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSja9UPxHN49DuiGrRvvBlX-jbc50fo25cBQw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6684e17ad7f2f.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>3 Sound Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 200 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>40 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
    </Container>


     <Container fluid>
      <Row id="sc">
        <Col id="sc1">
        <h6><b>MUD FLOWER POT ( 80 % Discount )
</b></h6>
        </Col>
      </Row>
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaLo8PtVXs9Xez6ATBaPqyCTiYpgLnkdY1A&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/618b3182b197c.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>2.75" Kuruvi Bird Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 35 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>7 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sg4YoqcitHk6lr_aKeggsi7zNGecdxhbxQ&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/62ccf784971a2.jpg'height={80} />
        </Col>
        <Col id="sc23"xs="auto">
        <p>4” Laxmi/Bird 10/ Joker Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>70 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>14 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ240aBnqYLmtiSUOOTGtI4RnxTzzSvyUx6zw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f696703d.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Deluxe Laxmi Crackers (12 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
                          
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbItoQ5lwXVbVKWhfzSBueh8I4Hk6ux9QGQ&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f2815cf6.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Super Deluxe Laxmi Crackers (16 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6-pslSWnQ50lyk7ubKFPjZ5kdCrnuLPTYIp8bI-0sgtmqSiviIlGg070GtmLxjDWYrg&usqp=CAU'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689296847f27.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>5" Mega Laxmi Deluxe BEAST Crackers(20 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>175 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>35 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zGcSW1rpgcfE-msC3vKPepChwj_nifTe1w&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689282702345.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Gold Laxmi Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
      
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='data:image/png;base64,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'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/660b8e191e929.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>6" Glant Deluxe Lakshmi</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>250 / 1 Pkt</del></p>
        <p><b> &#8377;</b> 50 / 1 Pkt</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSja9UPxHN49DuiGrRvvBlX-jbc50fo25cBQw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6684e17ad7f2f.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>3 Sound Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 200 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>40 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
    </Container>


   
<Container fluid>
      <Row id="sc">
        <Col id="sc1">
        <h6><b>PAPER BOMB ( 80 % Discount )

</b></h6>
        </Col>
      </Row>
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/63f9f9d598651.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/63f9fa01045cc.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>2.75" Kuruvi Bird Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 35 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>7 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/63f9fa3f1db0d.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/65fbd87ca2c07.jpg'height={80} />
        </Col>
        <Col id="sc23"xs="auto">
        <p>4” Laxmi/Bird 10/ Joker Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>70 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>14 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://www.mysivakasicrackers.com/images/63918de95d857.jpg'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/63918de95d857.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Deluxe Laxmi Crackers (12 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
                          
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbItoQ5lwXVbVKWhfzSBueh8I4Hk6ux9QGQ&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/66892f2815cf6.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Super Deluxe Laxmi Crackers (16 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 150 / 1 Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / 1 Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6-pslSWnQ50lyk7ubKFPjZ5kdCrnuLPTYIp8bI-0sgtmqSiviIlGg070GtmLxjDWYrg&usqp=CAU'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689296847f27.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>5" Mega Laxmi Deluxe BEAST Crackers(20 Ply)</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>175 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>35 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zGcSW1rpgcfE-msC3vKPepChwj_nifTe1w&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6689282702345.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>4" Gold Laxmi Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>150 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>30 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
      
      <Row style={{alignItems:"center"}} >
        <Col id="sc21" xs="auto" >
        <Image src='data:image/png;base64,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'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/660b8e191e929.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>6" Glant Deluxe Lakshmi</p>
        <p><b> &#8377;</b><del style={{color:"red"}}>250 / 1 Pkt</del></p>
        <p><b> &#8377;</b> 50 / 1 Pkt</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>

        <Col id="sc21" xs="auto" >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSja9UPxHN49DuiGrRvvBlX-jbc50fo25cBQw&s'height={30}width={20}/>
        </Col>
        <Col id="sc22" xs="auto">
        <Image src='https://www.mysivakasicrackers.com/images/6684e17ad7f2f.jpg'height={80}/>
        </Col>
        <Col id="sc23"xs="auto">
        <p>3 Sound Crackers</p>
        <p><b> &#8377;</b><del style={{color:"red"}}> 200 / Pkt 5 Pcs</del></p>
        <p><b> &#8377;</b>40 / Pkt 5 Pcs</p>
        </Col>
        <Col id="sc24"xs="auto">
        <Form.Control type="number"id="am"/>
        <p style={{color:"white",backgroundColor:"indianred"}}id='am1'><b> &#8377;</b>0.00</p>
        </Col>
      </Row>
    </Container>
  </>

  );
}

export default Giv;