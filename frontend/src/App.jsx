import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landing';
import Feature from './scenes/Feature'; 
import Footer from './scenes/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
