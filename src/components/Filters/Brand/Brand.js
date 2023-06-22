import MultiSelect from "../../common/multiSelect/multiSelect";

const BRAND_LIST = [
  "Puma",
  "Roadster",
  "Bata",
  "Flite",
  "Crocs",
  "Red Tape",
  "Wood Land",
];

const Category = () => {
  return (
    <MultiSelect
      title={"BRAND"}
      searchEnabled={true}
      list={BRAND_LIST}
    ></MultiSelect>
  );
};

export default Category;
