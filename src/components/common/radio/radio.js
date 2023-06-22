import "./radio.css";

const Radio = ({ text, checked, updateToParent }) => {
  return (
    <div
      key={text}
      onClick={() => updateToParent(text)}
      className="radio-contents"
    >
      <input checked={checked} type="radio"></input>
      <div className="radio-text">{text}</div>
    </div>
  );
};

export default Radio;
