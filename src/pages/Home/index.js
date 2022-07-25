import React from 'react';
import Search from './Search';
import { Row, Col, Table } from 'react-bootstrap';
// import '../../assets/chicken.jpg'

function MobileComponent() {
  return (
    <div>
      <div style={{ marginLeft: '6vw', marginRight: '6vw', marginTop: '2vh' }}>
        <Search autoFocus={false} />
      </div>
      <div className="mobBanner1Container text-center">
        <img
          style={{ width: '87.5%', borderRadius: '5px' }}
          src="https://raw.githubusercontent.com/rba1aji/my-assets/main/chicken1.jpg"
        />
        <div className="h3 mb-0 mobBanner1text ">
          What you eat there?
          <br /> Rate it here!
        </div>
      </div>
      <br />
      <div className="text-center">
        <img
          src="https://raw.githubusercontent.com/rba1aji/my-assets/main/pm2.jpg"
          style={{ width: '87.5%', borderRadius: '5px' }}
        />

        <div className="h2 mobBanner2text">
          FOODIES<br/>
          <br /> CHOICE<br/>
          <br />
          <span style={{fontSize:''}}>RESTOVIEW</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function DesktopComponent() {
  return (
    <div className="dskBanner1Container">
      <img
        style={{ width: '100%', borderRadius: '10px', maxHeight: '215px' }}
        src="https://raw.githubusercontent.com/rba1aji/my-assets/main/chicken1.jpg"
      />
      <Table
        className=""
        style={{
          position: 'absolute',
          top: '5%',
          borderColor: 'transparent',
          height: '200px',
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
          <td style={{ paddingLeft: '40%', paddingRight: '3%' }}>
            <Search autoFocus={false} />
          </td>
        </tr>
      </Table>
    </div>
  );
}

function Home() {
  return window.innerWidth < 600 ? <MobileComponent /> : <DesktopComponent />;
}
export default Home;
