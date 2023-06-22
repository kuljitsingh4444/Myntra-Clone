import "./sideCar.css";
import Gener from "../Filters/Gener/Gener";
import Discounts from "../Filters/Discounts/Discounts";
import Category from "../Filters/Category/Category";
import Brand from "../Filters/Brand/Brand";
import Price from "../Filters/Price/Price";
import Color from "../Filters/Color/Color";

const sideCar = () => {
  return (
    <div className="side-car">
      <Gener></Gener>
      <div className="separator"></div>
      <Category></Category>
      <Brand></Brand>
      <Price></Price>
      <Color></Color>
      <div className="side-header">DISCOUNT RANGE</div>
      <Discounts></Discounts>
    </div>
  );
};

export default sideCar;
