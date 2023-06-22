import React, { useEffect, useState } from "react";
import "./landingPage.css";
import Header from "../header/header";
import SideCar from "../sideCar/sideCar";
import { getListData } from "../../helpers/mockFetch";
import { useSelector, useDispatch } from "react-redux";
import Types from "../../duck/types";

const LandingPage = () => {
  const dispatch = useDispatch()
  const itemsList = useSelector(state => state.reducer.response)
  console.log(itemsList)

  const setDataToRedux = () => {
    getListData().then((response) => {
      dispatch({ type: Types.UPDATE_RESPONSE, data: response })
    });
  }

  useEffect(() => {
    setDataToRedux()
  }, []);

  return (
    <div className="all-contents">
      <Header></Header>
      <div className="page-contents">
        <SideCar></SideCar>
        <div className="sellable-content">
          {
            itemsList?.length && itemsList.map((item, index) => {
              return(
                <div className="myntra-item" key={index}>
                  <img className="item-image" src={item.image}></img>
                  <div className="item-detail">
                    <div className="item-brand">{item.brand}</div>
                    <div className="shade">
                      <div className="item-extra">{`${item.gener} ${item.category} (${item.color})`}</div>
                    </div>
                    <div className="cash-details">
                      <div className="item-metadata">{`Rs. ${item.price}`}</div>
                      <div className="item-discount">{`(${item.discount}% off)`}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
