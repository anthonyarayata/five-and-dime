import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './scenes/Landing';
import Feature from './scenes/Feature'; 

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <LandingPage />
      <Feature />
    </div>
  );
}

export default App;
