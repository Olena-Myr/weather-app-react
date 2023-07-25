import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from App</h1>
        <Weather city="Sydney" />
      </header>
    </div>
  );
}

export default App;
