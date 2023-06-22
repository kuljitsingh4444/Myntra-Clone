import React, { useEffect, useState } from "react";
import Checkbox from "../../common/checkbox/checkbox";
import Search from "../../../assets/images/search.png";
import "./multiSelect.css";
import Types from "../../../duck/types";
import { useDispatch } from "react-redux";

const MultiSelect = ({ list, title, searchEnabled, viewSample, field }) => {
  const [selected, setSelected] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [showSearchText, setShowSearchText] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const updatedList = list.filter((item) => {
      return item.toLowerCase().includes(text.toLowerCase());
    });
    setDisplayList(updatedList);
  }, [list, text]);

  const setSelectedList = (list) => {
    setSelected(list);
    if (field) {
      dispatch({
        type: Types.UPDATE_FILTERS,
        data: { field: field, value: list },
      });
    }
  };

  const updateCheck = (text) => {
    if (selected.indexOf(text) == -1) {
      setSelectedList([text, ...selected]);
    } else {
      const updatedSelectedList = selected.filter((item) => item != text);
      setSelectedList(updatedSelectedList);
    }
  };

  const getOptions = () => {
    return (
      <React.Fragment>
        <div className="title-ms">{title}</div>
        {searchEnabled && (
          <div onClick={() => setShowSearchText(true)}>
            <img className="search-icon" src={Search} />
          </div>
        )}
      </React.Fragment>
    );
  };

  const handleChange = (e) => {
    setText(e.target.value);
    setSelectedList([]);
  };

  const getInput = () => {
    return (
      <div className="input-with-suffix">
        <input
          value={text}
          onChange={(e) => handleChange(e)}
          placeholder="Search by name"
          className="search-text"
        ></input>
        <div
          onClick={() => {
            setShowSearchText(false);
            setText("");
          }}
          className="close-search"
        >
          &#x2715;
        </div>
      </div>
    );
  };

  const renderList = () => {
    return (
      <React.Fragment>
        {displayList.length
          ? displayList.map((item, index) => {
              return (
                <div key={index} className="item">
                  <Checkbox
                    viewSample={viewSample ? viewSample[item] : null}
                    updateToParent={updateCheck}
                    checked={selected.includes(item)}
                    text={item}
                  ></Checkbox>
                </div>
              );
            })
          : `Not found!`}
      </React.Fragment>
    );
  };

  return (
    <div className="all-multiselect-contents">
      <div className={"options-header"}>
        {showSearchText ? getInput() : getOptions()}
      </div>
      <div>{renderList()}</div>
    </div>
  );
};

export default MultiSelect;
