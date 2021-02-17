import React, { useState, useEffect } from 'react';
import Header from './component/ui/Header';
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
