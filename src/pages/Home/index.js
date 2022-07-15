import React from 'react';
import Search from './Search';
// import '../../assets/chicken.jpg'

function Home() {
  return (
    <div>
      <Search />
      <div
        style={{
          position: 'relative',
          marginLeft: '6vw',
          marginRight: '6vw',
          marginTop: '3vh',
        }}
      >
        <img
          style={{ width: '100%', borderRadius: '5px' }}
          src="https://raw.githubusercontent.com/rba1aji/my-assets/main/chicken1.jpg"
        />
        <div
          className="h5 mb-0"
          style={{
            position: 'absolute',
            color: 'white',
            right: '5%',
            top: '25%',
          }}
        >
          What you eat there?
          <br /> Rate it here!
        </div>
      </div>
    </div>
  );
}
export default Home;
