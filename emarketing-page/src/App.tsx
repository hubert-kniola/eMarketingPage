import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Nabar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
