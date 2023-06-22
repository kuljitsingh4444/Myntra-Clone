import { useState } from "react";
import Radio from "../../common/radio/radio";
import "./Gener.css";

const GENER_MEN = "Men";
const GENER_WOMEN = "Women";
const GENER_BOYS = "Boys";
const GENER_GIRLS = "Girls";
const GENER_LIST = [GENER_MEN, GENER_WOMEN, GENER_BOYS, GENER_GIRLS];

const Gener = () => {
  const [selected, setSelected] = useState("");

  const updateCheck = (text) => {
    setSelected(text);
  };

  return GENER_LIST.map((item) => {
    return (
      <div key={item} className="list-item">
        <Radio
          updateToParent={updateCheck}
          checked={selected === item}
          text={item}
        ></Radio>
      </div>
    );
  });
};

export default Gener;
