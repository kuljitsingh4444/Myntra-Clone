import React, { useEffect, useState } from "react";
import Checkbox from "../../common/checkbox/checkbox";
import "./multiSelect.css";

const Category = ({ list, title, searchEnabled, viewSample }) => {
  const [selected, setSelected] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [showSearchText, setShowSearchText] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const updatedList = list.filter((item) => {
      return item.toLowerCase().includes(text.toLowerCase());
    });
    setDisplayList(updatedList);
  }, [list, text]);

  const updateCheck = (text) => {
    if (selected.indexOf(text) == -1) {
      setSelected([text, ...selected]);
    } else {
      const updatedSelectedList = selected.filter((item) => item != text);
      setSelected(updatedSelectedList);
    }
  };

  const getOptions = () => {
    return (
      <React.Fragment>
        <div className="title-ms">{title}</div>
        {searchEnabled && (
          <div className="search-icon" onClick={() => setShowSearchText(true)}>
            &#x1F50E;
          </div>
        )}
      </React.Fragment>
    );
  };

  const handleChange = (e) => {
    setText(e.target.value);
    setSelected([]);
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
        <div onClick={() => {
            setShowSearchText(false); setText('');
        }} className="close-search">
          &#x2715;
        </div>
      </div>
    );
  };

  const renderList = () => {
    return(
      <React.Fragment>
            {
      displayList.length
      ? displayList.map((item, index) => {
          return (
            <div key={index} className="discount-item">
              <Checkbox
                viewSample={viewSample ? viewSample[item]: null}
                updateToParent={updateCheck}
                checked={selected.includes(item)}
                text={item}
              ></Checkbox>
            </div>
          );
        })
      : `Not found!`
    }
      </React.Fragment>
    )
  }

  return (
    <div className="all-multiselect">
      <div className={showSearchText ? "options" : "options"}>
        {showSearchText ? getInput() : getOptions()}
      </div>
      <div>
        {renderList()}
      </div>
    </div>
  );
};

export default Category;
