import React, { useEffect, useState } from "react";
import "./landingPage.css";
import Header from "../header/header";
import SideCar from "../sideCar/sideCar";
import { getListData } from "../../helpers/mockFetch";

const LandingPage = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    getListData().then((response) => {
      setItemsList(response);
    });
  }, []);

  return (
    <div className="all-contents">
      <Header></Header>
      <div className="page-contents">
        <SideCar></SideCar>
        <div className="contents">
          {/* {
            itemsList.map((item, index) => {
              return(
                <div key={index}>
                  1
                </div>
              )
            })
          } */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
