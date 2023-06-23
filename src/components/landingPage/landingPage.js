import React, { useEffect, useState } from "react";
import "./landingPage.css";
import Header from "../header/header";
import SideCart from "../sideCart/sideCart";
import { getListData } from "../../helpers/mock";
import { useSelector, useDispatch } from "react-redux";
import Types from "../../duck/types";
import Dropdown from "../common/dropdown/dropdown";
import Pagination from "../pagination/pagination";

const options = [
  { label: "Popularity", value: "popularityScore" },
  { label: "Trending", value: "trendingScore" },
  { label: "Recommended", value: "recommendationScore" },
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const pagination = state.reducer.pagination;

  const getPaginatedList = (list) => {
    const { page, perPage } = pagination;
    const fromIndex = perPage * (page - 1);
    const toIndex = fromIndex + perPage - 1;
    const subList = list.slice(fromIndex, toIndex + 1);

    return subList;
  };

  const itemsList = getPaginatedList(state.reducer.displayList);
  const setDataToRedux = () => {
    getListData().then((response) => {
      dispatch({ type: Types.UPDATE_RESPONSE, data: response });
    });
  };

  useEffect(() => {
    setDataToRedux();
  }, []);

  const onChange = (event) => {
    dispatch({
      type: Types.UPDATE_FILTERS,
      data: { field: "sortBy", value: event },
    });
  };

  return (
    <div className="all-contents">
      <Header></Header>
      <div className="page-contents">
        <SideCart></SideCart>
        <div className="sellable-container">
          <div className="dropdown-container">
            <Dropdown
              currentValue={state.reducer.filters.sortBy}
              onChange={onChange}
              options={options}
              prefix={"Sort by: "}
            ></Dropdown>
          </div>
          <div className="sellable-content">
            {itemsList?.length &&
              itemsList.map((item, index) => {
                return (
                  <div key={index}>
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
                );
              })}
          </div>
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
