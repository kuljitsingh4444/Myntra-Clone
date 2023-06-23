import "./sideCart.css";
import Gener from "../Filters/Gener/Gener";
import Discounts from "../Filters/Discounts/Discounts";
import Category from "../Filters/Category/Category";
import Brand from "../Filters/Brand/Brand";
import Price from "../Filters/Price/Price";
import Color from "../Filters/Color/Color";
import { useDispatch } from "react-redux";
import Types from "../../duck/types";
import { useEffect, useState } from "react";

const SideCar = () => {
  
  const [reset, resetApplication] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if(reset){
      resetApplication(false)
    }
  }, [reset])

  const clearFilters = () => {
    dispatch({
      type: Types.CLEAR_FILTERS
    })
    resetApplication(true)
  }

  const getVisibility = () => {
    let visibility;
    reset ? visibility = "hidden" : visibility = "visible"
    return { visibility }
  }

  return (
    <div>
      <div className="filter-options">
        <div>FILTERS</div>
        <div onClick={() => clearFilters()} className="clear-all">CLEAR ALL</div>
      </div>
      <div className="side-cart">
        {
          !reset &&
          <div style={getVisibility()}>
            <Gener></Gener>
            <div className="separator"></div>
            <Category></Category>
            <div className="separator"></div>
            <Brand></Brand>
            <div className="separator"></div>
            <Price></Price>
            <div className="separator"></div>
            <Color></Color>
            <div className="separator"></div>
            <div className="side-header options-header">DISCOUNT RANGE</div>
            <Discounts></Discounts>
          </div>
        }
      </div>
    </div>
  );
};

export default SideCar;
