import React from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import AppHeader from "./components/AppHeader"

function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="App-header">
      <AppHeader />
        <h2>
          Finding quality pickup games in your area since 2019
        </h2>    
      </header>
    </div>
    </HashRouter>
  );
}

export default App;
