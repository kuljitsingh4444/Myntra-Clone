import MultiSelect from "../../common/multiSelect/multiSelect";
import { categoryValues } from "../../../helpers/mock";
import "./Category.css";

const Category = () => {
  return (
    <MultiSelect
      field={"categories"}
      title={"CATEGORIES"}
      searchEnabled={true}
      list={categoryValues}
    ></MultiSelect>
  );
};

export default Category;
