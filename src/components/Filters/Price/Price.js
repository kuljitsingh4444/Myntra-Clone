import MultiSelect from "../../common/multiSelect/multiSelect";

const PRICE_LIST = [
  "Rs. 1000 - Rs.1500",
  "Rs. 1500 - Rs.2000",
  "Rs. 2000 - Rs.2500",
  "Rs.2500+",
];

const Category = () => {
  return (
    <MultiSelect
      title={"PRICE"}
      searchEnabled={false}
      list={PRICE_LIST}
    ></MultiSelect>
  );
};

export default Category;
