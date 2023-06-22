import MultiSelect from "../../common/multiSelect/multiSelect";
import { PRICE } from "../../../helpers/mock";

const Category = () => {
  return (
    <MultiSelect
      field="price"
      title={"PRICE"}
      searchEnabled={false}
      list={Object.keys(PRICE)}
    ></MultiSelect>
  );
};

export default Category;
