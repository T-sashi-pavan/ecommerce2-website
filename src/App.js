import 'bootstrap/dist/css/bootstrap.css'; 
import './App.css';
import {Col, Row, Container, Image, Button, Navbar, Nav,Form} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import SafetyTips from './SafetyTips';
import Contact from './Contact';
import Carousel from 'react-bootstrap/Carousel';
import QuickBuy from './QuickBuy';
import Gridview from './Gridview';
import CustomerDetails from './CustomerDetails';
import React, { useState } from 'react';
import OffcanvasCart from './OffcanvasCart';
import * as Icon from 'react-bootstrap-icons';
import './Gridview.css';

import {  getItems, addItem, updateItem, deleteItem  } from './itemservices/itemServices'; 



function Home() {
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
     <Navbar style={{ padding: '1px', backgroundColor: 'white'}}>
            <Container>
                <Nav className="me-auto">
                <Nav.Link
                  as={Link} to="/Gridview"
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
                 <i class="fa fa-list" aria-hidden="true"></i> &nbsp;
                  Grid View
                </Nav.Link>
                <Nav.Link
                  as={Link} to="/QuickBuy"
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
                 <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                  List View
                </Nav.Link>
         </Nav>
            </Container>
          </Navbar>
    </div>
    </>
  );
}




const App = () => {
   const [products, setProducts] = useState(0);
  const [saved, setSaved] = useState(0);
  const [total, setTotal] = useState(0);

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // To control offcanvas

  const handleCartClick = () => {
    setShowCart(true); // Show offcanvas when cart icon is clicked
  };

  const handleCloseCart = () => {
    setShowCart(false); // Close offcanvas
  };

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      setCartItems((prevItems) => {
        const itemExists = prevItems.find((item) => item.name === product.name);
        if (itemExists) {
          return prevItems.map((item) =>
            item.name === product.name
              ? { ...item, quantity: quantity }
              : item
          );
        } else {
          return [...prevItems, { ...product, quantity }];
        }
      });
    } else {
      setCartItems((prevItems) => prevItems.filter((item) => item.name !== product.name));
    }
  };

  

  return (
    <>
      <Router>
       <div className="icon-container2">
       
      <button className="icon1">
      <Icon.Telephone />
      <span className="tooltip">For More Details Call <br/><Icon.Telephone /> 0123456789</span>
      </button>
      </div>


      <div className="icon-container3">
      <button className="icon2">
      <Icon.Whatsapp />
      <span className="tooltip">Contact Us on Whatsapp <br/><Icon.Whatsapp /> 0123456789</span>
      </button>
      </div>
    
    <Container fluid>
      <Row id='r1' style={{ padding: '1px' }}>
        <Col id='c1'  xs='auto'>
          <Image src='https://www.mysivakasicrackers.com/images/gmap1.png' height={50}/>
        </Col>
        <Col id='c11'>
          <h5 style={{color:'crimson'}}>My Sivakasi Crackers</h5>
          <p>3/1233/1/1, Mariyamman Nagar,</p>
          <p>Sattur Road Paraipatti, Sivakasi - 626 189.</p>
        </Col>
        <Col id='c11'>
          <Image src='https://mysivakasicrackers.com/image/logo.png'/>
        </Col>
        <Col id='c11' xs={2}>
          <Image src='https://img.icons8.com/win10/512/FA5252/whatsapp.png' height={20}/>
          <p>+91 78710 76094</p>
          <Image src='https://t4.ftcdn.net/jpg/06/96/00/75/360_F_696007506_UGJIfkR50LZ1FJhSOytuwGPP4DrtRj9Y.jpg' height={30}/>
          <p>+91 94424 56559</p>
        </Col>
      </Row>
      <Row id='r2'>
        <Col id='c2'>
          <Navbar style={{ padding: '1px', backgroundColor: 'rgb(233, 0, 0)' }}>
            <Container>
                <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                <Nav.Link
                  as={Link} to="/"
                 style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      fontFamily: 'Franklin Gothic Medium',
                      fontSize: '22px', 
                      padding: '5px 10px',
                      margin: '0 10px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                >
                  Quick Purchase
                </Nav.Link>
                <Nav.Link
                  as={Link} to="/About"
                 style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      fontFamily: 'Franklin Gothic Medium',
                      fontSize: '22px', 
                      padding: '5px 10px',
                      margin: '0 10px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}
                >
                  About
                </Nav.Link>
              <Nav.Link
                    as={Link}
                    to="/SafetyTips"
                    style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      fontFamily: 'Franklin Gothic Medium',
                      fontSize: '22px', 
                      padding: '5px 10px',
                      margin: '0 10px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'rgb(233, 0, 0)';
                      e.target.style.backgroundColor = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'white';
                      e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                    }}
                  >
                    Safety Tips
                  </Nav.Link>

                <Nav.Link
                  as={Link} to="/Contact"
               style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      fontFamily: 'Franklin Gothic Medium',
                      fontSize: '22px', 
                      padding: '5px 10px',
                      margin: '0 10px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
         
        </Col>
      </Row>

    </Container>
     <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/SafetyTips" element={<SafetyTips />} />
            <Route path="/Contact" element={<Contact />} />
             <Route path="/Gridview" element={<Gridview />} />
            <Route path="/CustomerDetails" element={<CustomerDetails />} />
          <Route
          path="/QuickBuy"
          element={<QuickBuy cartItems={cartItems} addToCart={addToCart} />}
          />

          </Routes>

 


 <OffcanvasCart
        cartItems={cartItems}
        showCart={showCart}
        handleCloseCart={handleCloseCart}
      />
      {/* Cart Icon */}
      <div
        onClick={handleCartClick}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 35px',
          backgroundColor: '#FF9100',
          borderRadius: '50% 0% 0% 50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        <i className="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: '30px', color: 'white' }}></i>
        <span style={{ marginTop: '5px' }}>
          <b>Cart list ({cartItems.length})</b>
        </span>
      </div>


  </Router>






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
  
<div>
 <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{
        backgroundImage: 'url("https://images.designtrends.com/wp-content/uploads/2016/03/29115235/Abstract-Plain-White-Wallpaper-.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20px 0', // Optional: adjust padding as needed
      }}>
      {/* Section: Social media */}
      <hr/>
      <section className="justify-content-center" style={{ marginTop: '3%', fontSize: 'larger', textAlign: 'center', fontStretch: 'semi-condensed' }}>
        <p><b>I ❤️ SIVAKASI CRACKERS</b></p>
      </section>
      <hr/>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Grid column: Our Showroom */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <img src="https://www.mysivakasicrackers.com/images/logo.png" alt="Showroom" />
                <b className="fas fa-gem me-1" style={{ color: 'red' }}>Our Showroom</b>
              <p>3/1233/1/1, Mariyamman Nagar,<br /> Sattur Road Paraipatti,<br /> Sivakasi - 626 189.</p>
            </div>

            {/* Grid column: Contact Us */}
            <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4" style={{ color: 'black' }}>Contact Us</h4>
              <h5 style={{ color: 'red' }}><b>Whats App</b></h5>
              <p><i className="fab fa-whatsapp" aria-hidden="true"></i> +91 7871076094</p>
              <h5 style={{ color: 'red' }}><b>Mobile</b></h5>
              <p><i className="fa fa-phone" aria-hidden="true"></i> +91 9442456559</p>
              <h5 style={{ color: 'red' }}><b>Email</b></h5>
              <p><i className="fa fa-envelope" aria-hidden="true"></i> beswaycrackersenquiry@gmail.com</p>
            </div>

            {/* Grid column: Quick Links */}
            <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4" style={{ color: 'black' }}>Quick Links</h4>
              <div className="tagcloud roboto" style={{display: 'flex',         
      justifyContent: 'space-evenly', 
      flexWrap: 'wrap',     
      gap: '5px',}}>
                <a href="#!" className="text-reset"  style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      fontSize:'10px',
                      padding: '5px 10px',
                      margin: '0 0px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}>Home</a><br />
                <a href="#!" className="text-reset" 
                style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      padding: '0px 10px',
                      fontSize:'10px',
                      margin: '0 0px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}>About Us</a><br />
                <a href="#!" className="text-reset"   style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      padding: '0px 10px',
                      fontSize:'10px',
                      margin: '0 0px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}>Fire Crackers</a><br />
                <a href="#!" className="text-reset"  style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      padding: '0px 10px',
                      fontSize:'10px',
                      margin: '0 0px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}>Fireworks Gift Box</a><br />
                <a href="#!" className="text-reset"   style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      padding: '0px 10px',
                      fontSize:'10px',
                      margin: '0 0px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}>Price List</a><br />
                <a href="#!" className="text-reset"   style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      padding: '0px 10px',
                      fontSize:'10px',
                      margin: '0 0px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}>Quick Purchase</a><br />
                <a href="#!" className="text-reset"   style={{
                      color: 'white',
                      backgroundColor: 'rgb(233, 0, 0)',
                      padding: '0px 10px',
                      fontSize:'10px',
                      margin: '0 0px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s, color 0.3s',
                      fontWeight: 'bold', 
                    }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgb(233, 0, 0)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.backgroundColor = 'rgb(233, 0, 0)';
                  }}>Contact us</a>
              </div>
            </div>

            {/* Grid column: Reach Us */}
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
              <h4 className="text-uppercase fw-bold mb-4" style={{ color: 'black' }}>Reach Us</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62969.99610824452!2d77.75142291763581!3d9.454264267407781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee43d812d0d%3A0x8ce12e9dcdaa2a2c!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1728479751123!5m2!1sen!2sin"
                width="270"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sivakasi Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'red' }}>
        Copyright © 2024, My Sivakasi Crackers. All rights reserved.
      </div>
    </footer>
</div>    
</>
  );
}

export default App;
