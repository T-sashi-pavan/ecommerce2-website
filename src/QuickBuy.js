import React, { useState } from 'react';
import { Container, Table,Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const QuickBuy = ({ addToCart }) => {
const productsData1 = [
    {
      name: 'Kurivi Bird Crackers',
      unit: '1 pkt 10 pcs',
      originalPrice: 35,
      discountPrice: 10,
      imageUrl: 'https://www.mysivakasicrackers.com/images/62ccf6703b53c.jpg',
    },
    {
      name: '4” Laxmi/Bird 10/ Joker Crackers',
      unit: '1 pkt',
      originalPrice: 50,
      discountPrice: 20,
      imageUrl: 'https://www.mysivakasicrackers.com/images/62ccf784971a2.jpg',
    },
    {
      name: '4" Deluxe Laxmi Crackers (12 Ply)',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/66892f696703d.jpg',
    },
    {
      name: '4" Super Deluxe Laxmi Crackers (16 Ply)',
      unit: '1 pkt',
      originalPrice: 150,
      discountPrice: 70,
      imageUrl: 'https://www.mysivakasicrackers.com/images/66892f2815cf6.jpg',
    },
  ];

  const productsData2 = [
    {
      name: 'Sky Lantern Crackers',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 40,
      imageUrl: 'https://www.mysivakasicrackers.com/images/64b769bcba633.jpg',
    },
    {
      name: 'Musical Crackers',
      unit: '1 pkt',
      originalPrice: 75,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/63f4ff1a0497d.jpg',
    },
     {
      name: '4" Deluxe Laxmi Crackers (12 Ply)',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/65d5fcc6ea16b.jpg',
    },
    {
      name: '4" Super Deluxe Laxmi Crackers (16 Ply)',
      unit: '1 pkt',
      originalPrice: 150,
      discountPrice: 70,
      imageUrl: 'https://www.mysivakasicrackers.com/images/63ea05de49d73.jpg',
    },
  ];

  const productsData3 = [
    {
      name: 'Sky Lantern Crackers',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 40,
      imageUrl: 'https://www.mysivakasicrackers.com/images/611fc8b0bc0b3.jpg',
    },
    {
      name: 'Musical Crackers',
      unit: '1 pkt',
      originalPrice: 75,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/611fc8ca94ed6.jpg',
    },
     {
      name: '4" Deluxe Laxmi Crackers (12 Ply)',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/63f9d36614f04.jpg',
    },
    {
      name: '4" Super Deluxe Laxmi Crackers (16 Ply)',
      unit: '1 pkt',
      originalPrice: 150,
      discountPrice: 70,
      imageUrl: 'https://www.mysivakasicrackers.com/images/66de65ad1fe34.jpg',
    },
  ];


const productsData4 = [
    {
      name: 'Sky Lantern Crackers',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 40,
      imageUrl: 'https://www.mysivakasicrackers.com/images/611fc933a5aa8.jpg',
    },
    {
      name: 'Musical Crackers',
      unit: '1 pkt',
      originalPrice: 75,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/611fc9583cae0.jpg',
    },
     {
      name: '4" Deluxe Laxmi Crackers (12 Ply)',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/62ff5dcaa0f53.jpg',
    },
    {
      name: '4" Super Deluxe Laxmi Crackers (16 Ply)',
      unit: '1 pkt',
      originalPrice: 150,
      discountPrice: 70,
      imageUrl: 'https://www.mysivakasicrackers.com/images/6125e5e2ae5e4.jpg',
    },
  ];

const productsData5 = [
    {
      name: 'Sky Lantern Crackers',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 40,
      imageUrl: 'https://www.mysivakasicrackers.com/images/64d70ccb8de58.jpg',
    },
    {
      name: 'Musical Crackers',
      unit: '1 pkt',
      originalPrice: 75,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/64d70ce88ba66.jpg',
    },
     {
      name: '4" Deluxe Laxmi Crackers (12 Ply)',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/64d70d7db8f3d.jpg',
    },
    {
      name: '4" Super Deluxe Laxmi Crackers (16 Ply)',
      unit: '1 pkt',
      originalPrice: 150,
      discountPrice: 70,
      imageUrl: 'https://www.mysivakasicrackers.com/images/66e6674d6bd4f.jpg',
    },
  ];

const productsData6 = [
    {
      name: 'Sky Lantern Crackers',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 40,
      imageUrl: 'https://www.mysivakasicrackers.com/images/611a2dec37580.jpg',
    },
    {
      name: 'Musical Crackers',
      unit: '1 pkt',
      originalPrice: 75,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/611a2e118edf3.jpg',
    },
     {
      name: '4" Deluxe Laxmi Crackers (12 Ply)',
      unit: '1 pkt',
      originalPrice: 100,
      discountPrice: 30,
      imageUrl: 'https://www.mysivakasicrackers.com/images/61204d836ed06.jpg',
    },
    {
      name: '4" Super Deluxe Laxmi Crackers (16 Ply)',
      unit: '1 pkt',
      originalPrice: 150,
      discountPrice: 70,
      imageUrl: 'https://www.mysivakasicrackers.com/images/61204da890407.jpg',
    },
  ];

  


 const [quantities1, setQuantities1] = useState(Array(productsData1.length).fill(0));
  const [quantities2, setQuantities2] = useState(Array(productsData2.length).fill(0));
  const [products, setProducts] = useState(0);
  const [saved, setSaved] = useState(0);
  const [total, setTotal] = useState(0);

  // Function to handle quantity changes for both tables
  const handleQuantityChange = (index, value, setQuantities, quantities, productsData) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);

    // Calculate total products, savings, and total price
    const productCount1 = newQuantities.reduce((acc, curr) => acc + curr, 0);
    const totalSaved1 = newQuantities.reduce(
      (acc, curr, idx) =>
        acc + curr * (productsData[idx]?.originalPrice - productsData[idx]?.discountPrice),
      0
    );
    const totalPrice1 = newQuantities.reduce(
      (acc, curr, idx) => acc + curr * productsData[idx]?.discountPrice,
      0
    );

    // Update global products, saved, and total with both tables
    const totalProducts = productCount1 + quantities1.reduce((acc, curr) => acc + curr, 0) + quantities2.reduce((acc, curr) => acc + curr, 0);
    const totalSaved = totalSaved1 + quantities1.reduce(
      (acc, curr, idx) => acc + curr * (productsData1[idx]?.originalPrice - productsData1[idx]?.discountPrice),
      0
    ) + quantities2.reduce(
      (acc, curr, idx) => acc + curr * (productsData2[idx]?.originalPrice - productsData2[idx]?.discountPrice),
      0
    );
    const overallTotalPrice = totalPrice1 + quantities1.reduce(
      (acc, curr, idx) => acc + curr * productsData1[idx]?.discountPrice,
      0
    ) + quantities2.reduce(
      (acc, curr, idx) => acc + curr * productsData2[idx]?.discountPrice,
      0
    );

    setProducts(totalProducts);
    setSaved(totalSaved);
    setTotal(overallTotalPrice);
    addToCart(productsData[index], value);

  };





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



       <Container fluid style={{backgroundColor:'#B8001F'}}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', animation: 'blink 1s infinite',backgroundColor:'#B8001F' }}>
        <p style={{ color: 'yellow' }}>Products</p>
        <input type="number" value={products} readOnly />
        <p style={{ color: 'yellow' }}>You Saved</p>
        <input type="number" value={saved} readOnly />
        <p style={{ color: 'yellow' }}>Overall Total</p>
        <input type="number" value={total} readOnly />
      </div>

      {/* First Table for Soundcrackers */}
      <div style={{ padding: '0px', background: 'transparent' }}>
        <Table striped bordered hover >
          <thead >
            <tr>
              <th colSpan="7" style={{ textAlign: 'center',backgroundColor:"#D49B54" }}>
                Soundcrackers (Up to 80% discount)
              </th>
            </tr>
            <tr style={{backgroundColor:'#EF5A6F'}}>
            <th style={{backgroundColor:'#461111',color:'white'}}>Image</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Product</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Unit</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Price</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Discount</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Quantity</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Total</th>
            </tr>
          </thead>
          <tbody>
            {productsData1.map((product, index) => (
              <tr key={index} style={{backgroundColor:'#EF5A6F'}}>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.name}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.unit}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <strike>₹{product.originalPrice}</strike>
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{product.discountPrice}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <input
                    type="number"
                    min="0"
                    value={quantities1[index]}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0, setQuantities1, quantities1, productsData1)}
                  />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{quantities1[index] * product.discountPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Second Table for Sky Lantern Crackers */}
      <div style={{ padding: '0px', background: 'transparent' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="7" style={{ textAlign: 'center',backgroundColor:"#D49B54" }}>
                OLA VEDI / Sky Lantern / Musical Crackers (Up to 80% discount)
              </th>
            </tr>
            <tr>
              <th style={{backgroundColor:'#461111',color:'white'}}>Image</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Product</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Unit</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Price</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Discount</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Quantity</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Total</th>
            </tr>
          </thead>
          <tbody>
            {productsData2.map((product, index) => (
              <tr key={index}>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.name}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.unit}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <strike>₹{product.originalPrice}</strike>
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{product.discountPrice}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <input
                    type="number"
                    min="0"
                    value={quantities2[index]}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0, setQuantities2, quantities2, productsData2)}
                  />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{quantities2[index] * product.discountPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

       <div style={{ padding: '0px', background: 'transparent' }}>
        <Table striped bordered hover >
          <thead >
            <tr>
              <th colSpan="7" style={{ textAlign: 'center',backgroundColor:"#D49B54" }}>
                    GROUND SPINNERS ( 80 % Discount )
              </th>
            </tr>
            <tr style={{backgroundColor:'#EF5A6F'}}>
             <th style={{backgroundColor:'#461111',color:'white'}}>Image</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Product</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Unit</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Price</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Discount</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Quantity</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Total</th>
            </tr>
          </thead>
          <tbody>
            {productsData3.map((product, index) => (
              <tr key={index} style={{backgroundColor:'#EF5A6F'}}>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.name}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.unit}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <strike>₹{product.originalPrice}</strike>
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{product.discountPrice}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <input
                    type="number"
                    min="0"
                    value={quantities1[index]}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0, setQuantities1, quantities1, productsData3)}
                  />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{quantities1[index] * product.discountPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>


       <div style={{ padding: '0px', background: 'transparent' }}>
        <Table striped bordered hover >
          <thead >
            <tr>
              <th colSpan="7" style={{ textAlign: 'center',backgroundColor:"#D49B54" }}>
                    FLOWER POTS ( 80 % Discount )
              </th>
            </tr>
            <tr style={{backgroundColor:'#461111',color:'white'}}>
            <th style={{backgroundColor:'#461111',color:'white'}}>Image</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Product</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Unit</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Price</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Discount</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Quantity</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Total</th>
            </tr>
          </thead>
          <tbody>
            {productsData4.map((product, index) => (
              <tr key={index} style={{backgroundColor:'#EF5A6F'}}>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.name}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.unit}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <strike>₹{product.originalPrice}</strike>
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{product.discountPrice}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <input
                    type="number"
                    min="0"
                    value={quantities1[index]}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0, setQuantities1, quantities1, productsData4)}
                  />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{quantities1[index] * product.discountPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>


          <div style={{ padding: '0px', background: 'transparent' }}>
        <Table striped bordered hover >
          <thead >
            <tr>
              <th colSpan="7" style={{ textAlign: 'center',backgroundColor:"#D49B54" }}>
                                MUD FLOWER POT ( 80 % Discount )
              </th>
            </tr>
            <tr style={{backgroundColor:'#461111',color:'white'}}>
            <th style={{backgroundColor:'#461111',color:'white'}}>Image</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Product</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Unit</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Price</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Discount</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Quantity</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Total</th>
            </tr>
          </thead>
          <tbody>
            {productsData5.map((product, index) => (
              <tr key={index} style={{backgroundColor:'#EF5A6F'}}>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.name}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.unit}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <strike>₹{product.originalPrice}</strike>
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{product.discountPrice}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <input
                    type="number"
                    min="0"
                    value={quantities1[index]}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0, setQuantities1, quantities1, productsData5)}
                  />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{quantities1[index] * product.discountPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>


    <div style={{ padding: '0px', background: 'transparent' }}>
        <Table striped bordered hover >
          <thead >
            <tr>
              <th colSpan="7" style={{ textAlign: 'center',backgroundColor:"#D49B54" }}>
                          BIJILI CRACKERS ( 80 % Discount )
              </th>
            </tr>
            <tr style={{backgroundColor:'#461111',color:'white'}}>
            <th style={{backgroundColor:'#461111',color:'white'}}>Image</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Product</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Unit</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Price</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Discount</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Quantity</th>
              <th style={{backgroundColor:'#461111',color:'white'}}>Total</th>
            </tr>
          </thead>
          <tbody>
            {productsData6.map((product, index) => (
              <tr key={index} style={{backgroundColor:'#EF5A6F'}}>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.name}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>{product.unit}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <strike>₹{product.originalPrice}</strike>
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{product.discountPrice}</td>
                <td style={{backgroundColor:'#FFC6C6'}}>
                  <input
                    type="number"
                    min="0"
                    value={quantities1[index]}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0, setQuantities1, quantities1, productsData6)}
                  />
                </td>
                <td style={{backgroundColor:'#FFC6C6'}}>₹{quantities1[index] * product.discountPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        
      </div>



      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </Container>
    </>
  );
};

export default QuickBuy;
