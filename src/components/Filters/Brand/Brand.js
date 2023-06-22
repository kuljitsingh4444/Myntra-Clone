import MultiSelect from "../../common/multiSelect/multiSelect";
import { brandValues } from "../../../helpers/mock";

const Category = () => {
  return (
    <MultiSelect
      field={"brands"}
      title={"BRAND"}
      searchEnabled={true}
      list={brandValues}
    ></MultiSelect>
  );
};

export default Category;
