import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import CardSort from "./components/cardSort/CardSort"
import DataValidation from "./components/dataValidation/DataValidation"

function App() {
  return (
    <div className="App">
      <h1>MetroNet Developer Test</h1>
      <CardSort />
      <DataValidation />
    </div>
  );
}

export default App;
