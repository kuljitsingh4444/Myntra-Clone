import MultiSelect from "../../common/multiSelect/multiSelect";


const COLOR = {
  "White": "rgb(255, 255, 255)",
  "Black":"rgb(54, 69, 79)",
  "Navy Blue": "rgb(60, 68, 119)",
  "Grey": "rgb(159, 168, 171)",
  "Brown": "rgb(145, 80, 57)",
  "Tan": "rgb(210, 180, 140)",
  "Blue": "rgb(0, 116, 217)"
};

const Category = () => {
  return (
    <MultiSelect
      title={"BRAND"}
      searchEnabled={true}
      list={Object.keys(COLOR)}
      viewSample={COLOR}
    ></MultiSelect>
  );
};

export default Category;
