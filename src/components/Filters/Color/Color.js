import MultiSelect from "../../common/multiSelect/multiSelect";
import { colorValues } from "../../../helpers/mock";

const Category = () => {
  return (
    <MultiSelect
      field={"colors"}
      title={"COLOR"}
      searchEnabled={true}
      list={Object.keys(colorValues)}
      viewSample={colorValues}
    ></MultiSelect>
  );
};

export default Category;
