import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";

const App = () => {
return (
  <div className="App">
    <Router>
      <Navbar />
      <Home />
    </Router>
  </div>
  );
};
export default App;