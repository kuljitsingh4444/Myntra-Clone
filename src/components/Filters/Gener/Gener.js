import { useState } from "react";
import Radio from "../../common/radio/radio";
import "./Gener.css";
import { useDispatch } from "react-redux";
import types from "../../../duck/types";
import { generValues } from "../../../helpers/mock";

const Gener = () => {
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();

  const updateCheck = (text) => {
    setSelected(text);
    dispatch({
      type: types.UPDATE_FILTERS,
      data: { field: "gener", value: text },
    });
  };

  return generValues.map((item) => {
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
