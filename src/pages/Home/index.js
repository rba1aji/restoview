import React from 'react';
import Search from './Search';
import { Row, Col, Container } from 'react-bootstrap';
// import '../../assets/chicken.jpg'

function MobileComponent() {
  return (
    <div>
      <div style={{ marginLeft: '6vw', marginRight: '6vw', marginTop: '2vh' }}>
        <Search />
      </div>
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
    <div className="dskBanner1Container">
      <img
        style={{ width: '100%', borderRadius: '5px', maxHeight: '225px' }}
        src="https://raw.githubusercontent.com/rba1aji/my-assets/main/chicken1.jpg"
      />
      <Col className="h2 mb-0 dskBanner1text">
        <Row>
          What you eat there?
          <br /> Rate it here!
        </Row>
        <Row style={{ width: '100%' }}>
          <Search />
        </Row>
      </Col>
    </div>
  );
}

function Home() {
  return window.innerWidth <= 200 ? <MobileComponent /> : <DesktopComponent />;
}
export default Home;
