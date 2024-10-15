import React from "react";
import {Container} from 'react-bootstrap';

const ContactUs = () => {
  return (
    <>
      {/* Image Section */}
    <Container fluid style={{ padding: 0 }}>
  <div style={{ width: "100%", height: "auto" }}>
    <img
      src="https://www.mysivakasicrackers.com/images/contactbanner.jpg"
      alt="Banner"
      style={{ width: "100%", height: "auto" }}
    />
  </div>
</Container>
      <div
        style={{
          textAlign: "center",
          maxWidth: "70100px",
          paddingLeft: "1%",
          paddingTop: "5%",
          paddingBottom: "5%",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h1 style={{ fontSize: "60px", marginBottom: "16px" }}>Contact Us</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            marginTop: "20px",
          }}
        >
          {/* Address Section */}
          <div style={{ flex: 1, margin: "0 10px" }}>
            <i
              className="fa fa-map-marker"
              style={{ fontSize: "32px", color: "#ff0000", marginBottom: "10px", border: "2px solid red", borderRadius: "100%", padding: "20px", display: "inline-block"  }}
            ></i>
            <h3 style={{ marginTop: "0", fontSize: "19px", color: "#333" }}>
              Address
            </h3>
            <p style={{ color: "#555", margin: "0" }}>My Sivakasi Crackers</p>
            <p style={{ color: "#555", margin: "0" }}>
              3/1233/1/1, Mariyamman Nagar,
            </p>
            <p style={{ color: "#555", margin: "0" }}>
              Sattur Road Paraipatti, Sivakasi - 626 189
            </p>
          </div>

          {/* Phone Section */}
          <div style={{ borderLeft: "1px solid black", height: "50px", margin: "0 20px" }}></div>
          <div style={{ flex: 1, margin: "0 10px" }}>
            <i
              className="fa fa-phone"
              style={{ fontSize: "32px", color: "#ff0000", marginBottom: "10px", border: "2px solid red", borderRadius: "100%", padding: "20px", display: "inline-block"   }}
            ></i>
            <h3 style={{ marginTop: "0", fontSize: "19px", color: "#333" }}>
              Phone
            </h3>
            <p style={{ color: "#555", margin: "0" }}>Mobile: +91 78710 76094</p>
            <p style={{ color: "#555", margin: "0" }}>Mobile: +91 94424 56559</p>
          </div>

          {/* Email Section */}
          <div style={{ borderLeft: "1px solid black", height: "50px", margin: "0 20px" }}></div>
          <div style={{ flex: 1, margin: "0 10px" }}>
            <i
              className="fa fa-envelope"
              style={{ fontSize: "32px", color: "#ff0000", marginBottom: "10px", border: "2px solid red", borderRadius: "100%", padding: "20px", display: "inline-block"   }}
            ></i>
            <h3 style={{ marginTop: "0", fontSize: "19px", color: "#333" }}>
              Connect With Us
            </h3>
            <p style={{ color: "#555", margin: "0" }}>
              beswaycrackersenquiry@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62969.99610824452!2d77.75142291763582!3d9.45426426740778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee43d812d0d%3A0x8ce12e9dcdaa2a2c!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1728543113946!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default ContactUs;
