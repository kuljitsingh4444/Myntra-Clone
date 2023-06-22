import React from "react";
import "./landingPage.css";
import Header from "../header/header";
import SideCar from "../sideCar/sideCar";

const landingPage = () => {
  return (
    <div className="all-contents">
      <Header></Header>
      <div className="page-contents">
        <SideCar></SideCar>
        <div className="contents">Main Page</div>
      </div>
    </div>
  );
};

export default landingPage;
