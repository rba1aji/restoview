import React from 'react';
import Search from './Search';
// import '../../assets/chicken.jpg'

function Home() {
  return (
    <div>
      <Search />
      <div className="m-4" style={{position:"relative"}}>
        <img
          style={{ width: '100%', borderRadius: '5px' }}
          src="https://raw.githubusercontent.com/rba1aji/restaurant-rating-app/firebasebranch/src/assets/chicken1.jpg?token=GHSAT0AAAAAABS7O7JPL33KAYJA6O6KEKXYYWRQOUQ"
        />
        <div className="h5" style={{ position: 'absolute', color: 'white', right:'5%', top:'30%' }}>
          What you eat there?<br/> Rate it here!
        </div>
      </div>
    </div>
  );
}
export default Home;

// https://raw.githubusercontent.com/rba1aji/restaurant-rating-app/firebasebranch/src/assets/chicken1.jpg?token=GHSAT0AAAAAABS7O7JPL33KAYJA6O6KEKXYYWRQOUQ
