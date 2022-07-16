import React from 'react';
import Search from './Search';
import { Row, Col, Container } from 'react-bootstrap';
// import '../../assets/chicken.jpg'

function MobileComponent() {
  return (
    <div>
      <Search />
      <div className="mobBanner1Container">
        <img
          style={{ width: '100%', borderRadius: '5px' }}
          src="https://raw.githubusercontent.com/rba1aji/my-assets/main/chicken1.jpg"
        />
        <div className="h2 mb-0 mobBanner1text">
          What you eat there?
          <br /> Rate it here!
        </div>
      </div>
    </div>
  );
}

function DesktopComponent() {
  return (
    <Container style={{}}>
      <img
        style={{ borderRadius: '5px', maxHeight: '225px' }}
        src="https://raw.githubusercontent.com/rba1aji/my-assets/main/chicken1.jpg"
      />
      <Col style={{}}>
        <Row className="h2 mb-0">
          What you eat there?
          <br />
          Rate it here!
        </Row>
        <Row>
          <Search />
        </Row>
      </Col>
    </Container>
  );
}

function Home() {
  return window.innerWidth <= 300 ? <MobileComponent /> : <DesktopComponent />;
}
export default Home;
