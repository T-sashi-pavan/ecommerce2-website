import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import CustomerDetails from './CustomerDetails';

const OffcanvasCart = ({ cartItems, showCart, handleCloseCart }) => {
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  const handleContinueToCustomerDetails = () => {
    setShowCustomerDetails(true); // Switch to customer details view in offcanvas
  };

  return (
    <>
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end" style={{backgroundColor:'darkorange'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{backgroundColor:'lavender'}}>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'white'}}>
          {showCustomerDetails ? (
            <CustomerDetails totalCost={totalCost} />
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.quantity} x ₹{item.discountPrice} = ₹
                    {item.quantity * item.discountPrice}
                  </li>
                ))}
              </ul>
              <p>Total: ₹{totalCost}</p>
              <Button onClick={handleContinueToCustomerDetails} style={{backgroundColor:'green'}}>
                Continue
              </Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasCart;
