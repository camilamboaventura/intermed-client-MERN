import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../src/assets/styles/Home.css";

function Home() {
  return (
    <div className="allHome">
      <Navbar />
      <div className="homeBody"></div>
    </div>
  );
}

export default Home;
