import "./checkbox.css";

const Checkbox = ({ text, checked, updateToParent, viewSample }) => {
  return (
    <div
      key={text}
      onClick={() => updateToParent(text)}
      className="checkbox-contents"
    >
      <input checked={checked} type="checkbox"></input>
      {viewSample && (
        <div className="sample-view" style={{ background: viewSample }}></div>
      )}
      <div className="select-text">{text}</div>
    </div>
  );
};

export default Checkbox;
