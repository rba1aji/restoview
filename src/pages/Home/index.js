import React from 'react';
import Search from './Search';
import { Row, Col, Table } from 'react-bootstrap';
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
        style={{ width: '100%', borderRadius: '5px', maxHeight: '45vh' }}
        src="https://raw.githubusercontent.com/rba1aji/my-assets/main/chicken1.jpg"
      />
      <Table
        className=""
        style={{
          position: 'absolute',
          top: '5%',
          borderColor: 'transparent',
          height: '40vh',
        }}
      >
        <tr className="border-0">
          <td
            className="h1 mb-0 cursiveFont"
            style={{ paddingLeft: '40%', color: 'white', textAlign: 'center' }}
          >
            What you eat there?
            <br /> Rate it here!
          </td>
        </tr>
        <tr className="border-0">
          <td style={{ paddingLeft: '35%', paddingRight: '3%' }}>
            <Search />
          </td>
        </tr>
      </Table>
    </div>
  );
}

function Home() {
  return window.innerWidth < 92 ? <MobileComponent /> : <DesktopComponent />;
}
export default Home;
