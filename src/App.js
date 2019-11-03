import React from 'react';
import logo from './logo.svg';
import './App.css';

import Front_navbar from './Components/Front_navbar';

let frontNav = new Front_navbar();

function App() {
  return (
    <div className="App">
    {frontNav.render()}

    </div>
  );
}

export default App;
