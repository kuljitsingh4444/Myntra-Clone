import Types from "../types";
import { PRICE, getUpperLimit } from "../../helpers/mock";

const perPage = 25;
const initialPaginationInfo = {
  page: 1,
  perPage: perPage,
};

const initialFilters = {
  sortBy: { value: "popularityScore", label: "Popularity" },
};

const initialState = {
  response: [],
  filters: initialFilters,
  displayList: [],
  pagination: initialPaginationInfo,
};

const handleFilters = (state, action) => {
  let displayList = [];

  const newFilters = {
    ...state.filters,
    [action.data.field]: action.data.value,
  };

  let priceRanges = [];
  if (newFilters.price && newFilters.price.length) {
    for (let i = 0; i < newFilters.price.length; i++) {
      let lowerLimit = PRICE[newFilters.price[i]];
      priceRanges[i] = {
        lower: lowerLimit,
        upper: getUpperLimit(lowerLimit),
      };
    }
  }

  displayList = state.response.filter((listItem) => {
    let inRange = false;
    const generFilter =
      newFilters.gener && newFilters.gener
        ? listItem.gener == newFilters.gener
        : true;
    const discountFilter =
      newFilters.discount && newFilters.discount
        ? newFilters.discount <= listItem.discount && listItem.discount <= 100
        : true;
    const categoriesFilter =
      newFilters.categories && newFilters.categories.length
        ? newFilters.categories.includes(listItem.category)
        : true;
    const brandsFilter =
      newFilters.brands && newFilters.brands.length
        ? newFilters.brands.includes(listItem.brand)
        : true;
    const colorsFilter =
      newFilters.colors && newFilters.colors.length
        ? newFilters.colors.includes(listItem.color)
        : true;

    for (let k = 0; k < priceRanges.length; k++) {
      let lowerLimit = priceRanges[k].lower;
      let upperLimit = priceRanges[k].upper;

      if (listItem.price >= lowerLimit && listItem.price <= upperLimit) {
        inRange = true;
        break;
      }
    }

    const priceFilter =
      newFilters.price && newFilters.price.length ? inRange : true;

    return (
      generFilter &&
      discountFilter &&
      categoriesFilter &&
      brandsFilter &&
      colorsFilter &&
      priceFilter
    );
  });

  const currentSortBy = newFilters.sortBy.value;
  const sortedDisplayList = displayList.toSorted(
    (a, b) => b[currentSortBy] - a[currentSortBy]
  );

  return {
    ...state,
    response: state.response,
    filters: newFilters,
    displayList: sortedDisplayList,
    pagination: initialPaginationInfo,
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.UPDATE_RESPONSE:
      const currentSortBy = state.filters.sortBy.value;
      return {
        ...state,
        pagination: initialPaginationInfo,
        response: action.data,
        displayList: action.data.toSorted(
          (a, b) => b[currentSortBy] - a[currentSortBy]
        ),
      };

    case Types.UPDATE_FILTERS:
      return handleFilters(state, action);

    case Types.CLEAR_FILTERS:
      const currentSort = state.filters.sortBy.value;
      return {
        ...state,
        pagination: initialPaginationInfo,
        response: state.response,
        filters: initialFilters,
        displayList: state.response.toSorted(
          (a, b) => b[currentSort] - a[currentSort]
        ),
      };

    case Types.UPDATE_PAGE:
      return {
        ...state,
        pagination: {
          page: action.data,
          perPage: perPage,
        },
      };

    default:
      return state;
  }
}
