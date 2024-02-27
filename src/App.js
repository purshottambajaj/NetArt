import React from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-yellow-200 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <Header />
        <Hero />
        <Services/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
