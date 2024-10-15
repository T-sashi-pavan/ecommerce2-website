import 'bootstrap/dist/css/bootstrap.css'; 
import { Col, Row, Container, Image } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      {/* Header Row with Background Image */}
      <Row
        id="img"
        style={{
          backgroundImage: "url('https://www.mysivakasicrackers.com/images/safetytips.jpg')",
          padding: '9%',
        }}
      >
        <h1 style={{ color: "white", marginLeft: "38%" }}>
          <b>Safety Tips</b>
        </h1>
      </Row>

      {/* Introduction Row */}
      <Row
        id='s'
        style={{ marginTop: '5%', marginLeft: '15%', marginRight: '15%' }}
      >
        <Col>
          <h2 style={{ color: "red" }}><b>My Sivakasi Crackers</b></h2>
          <p>
            There are certain Do's & Don’ts to follow while purchasing, bursting and storing crackers. Thus, it is very important to follow the precautions while bursting crackers. A little negligence, ignorance and carelessness can cause a fatal injury.
          </p>
        </Col>
      </Row>

      {/* Do's and Don'ts Section */}
      <Row id='s' style={{ marginTop: '4%', marginLeft: '15%', marginRight: '15%' }}>
        <Col>
          <h1 style={{ color: "darkblue" }}><b>Do<sup>'</sup>s</b></h1>
          <hr style={{ borderColor: "red", width: "90%" }} />
        </Col>
        <Col>
          <h1 style={{ color: "darkblue" }}><b>Don<sup>'</sup>ts</b></h1>
          <hr style={{ borderColor: "red", width: "90%" }} />
        </Col>
      </Row>

      {/* Instructions and Warnings Rows */}
      {[ 
        {
          instruction: "Display fireworks as per the instructions mentioned on the pack.",
          warning: "Never make your own fireworks."
        },
        {
          instruction: "Use fireworks only outdoor.",
          warning: "Never try to re-light or pick up fireworks that have not ignited fully."
        },
        {
          instruction: "Buy fireworks from authorized / reputed manufacturers only.",
          warning: "Never carry fireworks in your pockets."
        },
        {
          instruction: "Light only one firework at a time, by one person. Others should watch from a safe distance.",
          warning: "After fireworks display never pick up fireworks that may be left over, they still may be active."
        },
        {
          instruction: "Keep two buckets of water handy. In the event of fire or any mishap.",
          warning: "Do not wear loose clothing while using fireworks."
        }
      ].map((item, index) => (
        <Row id='s' style={{ marginTop: '2%', marginLeft: '15%', marginRight: '15%' }} key={index}>
          <Col xs="auto" style={{ marginTop: '1%' }}>
            <Image
              src='https://assets.website-files.com/56579ffcc34a791f576971ce/606718f2e3e8ec4c2eb2a16b_check.svg'
              height={35}
            />
          </Col>
          <Col>
            <h4><b>Instructions</b></h4>
            <p>{item.instruction}</p>
          </Col>
          <Col xs="auto" style={{ marginTop: '1%' }}>
            <Image
              src='https://icones.pro/wp-content/uploads/2022/05/icone-fermer-et-x-rouge.png'
              height={30}
            />
          </Col>
          <Col>
            <h4><b>Don't make tricks</b></h4>
            <p>{item.warning}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default App;
