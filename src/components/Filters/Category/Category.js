import MultiSelect from "../../common/multiSelect/multiSelect";
import "./Category.css";

const CATEGORY_LIST = [
  "Tshirts",
  "Shirts",
  "Jeans",
  "jackets",
  "Sweaters",
  "Sweatshirts",
];

const Category = () => {
  return (
    <MultiSelect
      title={"CATEGORIES"}
      searchEnabled={true}
      list={CATEGORY_LIST}
    ></MultiSelect>
  );
};

export default Category;
