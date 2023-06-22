import { useState } from "react";
import Radio from "../../common/radio/radio";
import "./Discounts.css";
import { useDispatch } from "react-redux";
import Types from "../../../duck/types";

let discount = {};
for (let i = 10; i < 100; i += 10) {
  discount[`${i}% and above`] = i;
}

const Discounts = () => {
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();

  const updateCheck = (text) => {
    setSelected(text);
    dispatch({
      type: Types.UPDATE_FILTERS,
      data: { field: "discount", value: discount[text] },
    });
  };

  return Object.keys(discount).map((item) => {
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
