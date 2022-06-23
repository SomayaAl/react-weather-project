import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
      <footer>
        This project was coded by Somaya Albadawi and is{" "}
        <a href="">open-sourced.</a>
      </footer>
    </div>
  );
}


