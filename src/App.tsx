import React from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

// Import main page with all content
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
