import React, { useEffect, useState } from "react";
import "./landingPage.css";
import Header from "../header/header";
import SideCart from "../sideCart/sideCart";
import { getListData } from "../../helpers/mock";
import { useSelector, useDispatch } from "react-redux";
import Types from "../../duck/types";
import Dropdown from "../common/dropdown/dropdown";
import Pagination from "../pagination/pagination";
import WishListButton from "../common/wishlistButton/wishlistButton";

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
          {itemsList && itemsList.length == 0 ? (
            <div className="no-data">
              <div className="no-data-text">
                Nothing to see here, Come back later or clear all filters!
              </div>
              <img src="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png" />
            </div>
          ) : (
            <React.Fragment>
              <div className="sellable-content">
                {itemsList &&
                  itemsList.length &&
                  itemsList.map((item, index) => {
                    return (
                      <div className="selectable-card" key={index}>
                        <div className="image-contents">
                          <img className="item-image" src={item.image}></img>
                          <div className="overlay-items">
                            <div className="rating">{item.rating}</div>
                            <div className="star-icon">&#9733;</div>
                          </div>
                          <div className="overlay-wishlist">
                            <WishListButton></WishListButton>
                            <div className="free-size">Size: Free Size</div>
                          </div>
                        </div>
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
              {itemsList?.length && <Pagination></Pagination>}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
