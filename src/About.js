import 'bootstrap/dist/css/bootstrap.css'; 
import { Col, Row, Container, Image, Button } from 'react-bootstrap';

function ppa() {
  return (
    <Container fluid style={{
      backgroundImage: "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/fireworks-in-the-night-sky-alan-lutz.jpg')",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      height: "100%",
      backgroundAttachment: "fixed"
    }}>
      <Row style={{ backgroundColor: 'white' }}>
        <Image src='https://www.mysivakasicrackers.com/images/aboutbanner.jpg' />
      </Row>
      <Row style={{ backgroundColor: 'white',gap:'100px' }}>
        <Col style={{ marginLeft: '20%' }}>
          <Image src='https://www.mysivakasicrackers.com/images/besway.png' />
        </Col>
        <Col style={{ marginRight: '15%', marginTop: '3%' }}>
          <h2><b>We Provide Premium Quality Crackers</b></h2>
          <p>We are reputed and reliable name involved in the field of Fireworks trading business for past 10 years.</p>
          <p>We offer various range of fireworks products such as Sparklers, Ground Chakkars, Twinkling Stars, Chorsa, Rockets, Flower Pots, Pencils, Atom Bombs, Colour Matches and other Fancy Items. We also offer fireworks gift boxes ranges at competitive price. With websites, e-mail services & other technologies we are able to serve you faster, better and in time to your complete satisfaction. We offer the best products and services at economical prices to our clients.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{ color: 'white', textAlign: 'center', marginTop: '5%' }}>
            <big>Have any questions related to our products? Feel Free to Enquire Us!</big>
          </h1>
          <Button variant="danger" style={{ marginLeft: '45%', marginTop: '2%', marginBottom: '5%' }}><b>CONTACT NOW</b></Button>{' '}
        </Col>
      </Row>
      <Row style={{ backgroundColor: 'white' }}>
        <Col style={{ marginLeft: '3%', marginTop: '4%', marginBottom: '4%' }}>
          <h2 style={{ color: "red", textAlign: "center", marginBottom: "8%" }}><b>Why Choose Us</b></h2>
          <p>Our Company is known for providing the best Quality Products to our esteemed customers at competitive prices.</p>
          <ul>
            <li>10+ years of experience</li>
            <li>Direct dealers of reputed brands</li>
            <li>Quality and safety crackers</li>
            <li>Credible and healthy dealings</li>
            <li>Quick response & on-time delivery</li>
          </ul>
        </Col>
        <Col style={{ marginTop: '4%', marginBottom: '4%' }}>
          <Image src='https://www.mysivakasicrackers.com/images/aboutcenter.png' height={400} />
        </Col>
        <Col style={{ marginRight: '2%', marginTop: '4%', marginBottom: '4%' }}>
          <h2 style={{ color: "red", textAlign: "center", marginBottom: "8%" }}><b>Vision & Mission</b></h2>
          <p>To be the Best wholesale Dealer for all kinds of fancy crackers & Giftboxes and market leader in innovative and colourful crackers.</p>
          <p>Our Mission is to provide Quality and Innovative Crackers products to our valuable customers at a reasonable price and light up all their celebrations.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ppa;
