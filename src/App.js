import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import './App.css';

const App = () => {
  return (
    <Router> 
      <div className="app">
        <Header />
        <div className="main-content">
          <ProductGrid />
        </div>
      </div>
    </Router>
  );
};

export default App;
