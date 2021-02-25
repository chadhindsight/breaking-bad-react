import React, { useState, useEffect, useContext } from 'react';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid'
import axios from 'axios';
import './App.css';


import { Context } from './context'
import { ContextController } from "./context";


function App() {
  const { value, value2, value3 } = useContext(Context)

  const [items] = useContext(value)
  const [isLoading] = useContext(value2)
  const [query, setQuery] = useContext(value3)

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
