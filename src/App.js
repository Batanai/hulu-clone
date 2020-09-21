import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Results from "./results/Results";
import requests from "./requests/requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
