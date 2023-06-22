import "./sideCart.css";
import Gener from "../Filters/Gener/Gener";
import Discounts from "../Filters/Discounts/Discounts";
import Category from "../Filters/Category/Category";
import Brand from "../Filters/Brand/Brand";
import Price from "../Filters/Price/Price";
import Color from "../Filters/Color/Color";

const SideCar = () => {
  return (
    <div className="side-cart">
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
  );
};

export default SideCar;
