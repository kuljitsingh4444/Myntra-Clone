import { useState } from "react";
import Radio from "../../common/radio/radio";
import "./Discounts.css";

const DISCOUNT_10 = "10% and above";
const DISCOUNT_20 = "20% and above";
const DISCOUNT_30 = "30% and above";
const DISCOUNT_40 = "40% and above";
const DISCOUNT_50 = "50% and above";
const DISCOUNT_60 = "60% and above";
const DISCOUNT_70 = "70% and above";
const DISCOUNT_80 = "80% and above";
const DISCOUNT_90 = "90% and above";

const DISCOUNT_LIST = [
  DISCOUNT_10,
  DISCOUNT_20,
  DISCOUNT_30,
  DISCOUNT_40,
  DISCOUNT_50,
  DISCOUNT_60,
  DISCOUNT_70,
  DISCOUNT_80,
  DISCOUNT_90,
];

const Discounts = () => {
  const [selected, setSelected] = useState("");

  const updateCheck = (text) => {
    setSelected(text);
  };

  return DISCOUNT_LIST.map((item) => {
    return (
      <div key={item} className="discount-item">
        <Radio
          updateToParent={updateCheck}
          checked={selected === item}
          text={item}
        ></Radio>
      </div>
    );
  });
};

export default Discounts;
